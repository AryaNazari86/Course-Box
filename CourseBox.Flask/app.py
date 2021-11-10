from flask import Flask, request, Response, jsonify
from flask_sqlalchemy import SQLAlchemy
import os, uuid, datetime, jwt
from functools import wraps

app = Flask(__name__)
app.config["SECRET_KEY"] = "C83D98E8-B23B-4325-A8F0-5C58106B9145"
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///coursebox.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

    
def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):

        token = None
        if 'x-access-tokens' in request.headers:
            token = request.headers['x-access-tokens']

        if not token:
            status_code = Response(status=500, response="A valid token is missing.")
            return status_code

        try:
            data = jwt.decode(token, app.config["SECRET_KEY"], algorithms="HS256")
            current_user = User.query.filter_by(id=data['id']).first()
        except:
            status_code = Response(status=401, response="Token is invalid.")
            return status_code

        return f(current_user, *args, **kwargs)
    return decorator

def get_user():
    try:
        if 'x-access-tokens' in request.headers:
            token = request.headers['x-access-tokens']
        data = jwt.decode(token, app.config["SECRET_KEY"], algorithms="HS256")
        current_user = User.query.filter_by(id=data['id']).first()
        return current_user
    except:
        return None 

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    title = db.Column(db.String(20), nullable=False)
    category_image = db.Column(db.String(200))
    # Relations
    courses = db.relationship('Course', backref='category')

    def __init__(self, title, category_image):
        self.title = title
        self.category_image = category_image

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(200), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    is_active = db.Column(db.Boolean, nullable=False)
    avatar = db.Column(db.String(200))
    register_date = db.Column(db.DateTime, nullable=False)
    bio = db.Column(db.String(255))
    # Relations
    created_courses = db.relationship('Course', backref='creator')

    def __init__(self, username, name, email, password, is_active, avatar, register_date, bio):
        self.username = username
        self.name = name
        self.email = email
        self.password = password
        self.is_active = is_active
        self.avatar = avatar
        self.register_date = register_date
        self.bio = bio

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    participants_count = db.Column(db.Integer)
    likes = db.Column(db.Integer)
    image = db.Column(db.String(200), nullable=False, unique=True)
    # Relations
    category_id = db.Column(db.Integer, db.ForeignKey(Category.id))
    author_id = db.Column(db.Integer, db.ForeignKey(User.id))
    participants = db.relationship('User', secondary='participants', backref='courses')
    content = db.relationship('CourseContent', backref='course')

    def __init__(self, title, description, participants_count, likes, category_id, author_id, image):
        self.title = title
        self.description = description
        self.participants_count = participants_count
        self.likes = likes
        self.category_id = category_id
        self.author_id = author_id
        self.image = image

class CourseContent(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    title = db.Column(db.String(200))
    icon = db.Column(db.String(200))
    content = db.relationship('LessonContent', backref='course_content')
    #Relations
    course_id = db.Column(db.Integer, db.ForeignKey(Course.id))

    def _init_(self, title, icon, content):
        self.title = title
        self.icon = icon
        self.content = content

class LessonContent(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    title = db.Column(db.String(200))
    icon = db.Column(db.String(200))
    color = db.Column(db.String(200))
    #Relations
    course_content_id = db.Column(db.Integer, db.ForeignKey(CourseContent.id))

    def _init_(self, title, icon, color, course_content_id):
        self.title = title
        self.icon = icon
        self.color = color
        self.course_content_id = course_content_id

participants = db.Table('participants',
    db.Column('course_id', db.Integer, db.ForeignKey(Course.id), primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey(User.id), primary_key=True)
)

# Change the profile avatar
@app.route("/ChangeProfileAvatar", methods=["POST"])
@token_required
def change_profile_avatar(current_user):
    user_id = current_user.id
    avatar = request.files['avatar']
    if avatar == None:
        # Return error
        status_code = Response(status=400, response="")
        return status_code
    # Image extensions
    allowed_extensions = [".png", ".jpeg", ".jpg", ".webp", ".ico", ".svg"]
    file_extension = os.path.splitext(avatar.filename)[-1]
    # Check for image extension
    if allowed_extensions.__contains__(file_extension):
        # Get user row
        user = User.query.filter_by(id=user_id).first()
        # Get last avatar name
        last_avatar = user.avatar
        # File size limit
        size_limit = 20000000

        #  Get file size
        avatar.seek(0, os.SEEK_END)
        avatar_size = avatar.tell()

        # Check for file size
        if avatar_size > size_limit:
            status_code = Response(
                status=400, response="Uploaded File Was Too Big!")
            return status_code
        # Save avatar image
        # TODO: there is a problem with saving files.
        avatar.save(os.path.join("/static", "/avatars", str(
            user.id) + file_extension))
        if user == None:
            status_code = Response(status=400, response="User Was Not Found!")
            return status_code
        # Update avatar name in database
        user.avatar = str(user.id) + file_extension
        # Commit changes
        db.session.commit()
        # Delete the last avatar from images
        if last_avatar != "default.png":
            if last_avatar == None:
                # Return error
                status_code = Response(
                    status=400, response="Last User Avatar Was Not Found!")
                return status_code
            # else:
            # TODO : Check if avatar exists before deleting.
            #     os.remove(f"/static/avatars/{last_avatar}")

        # Return sucessfull
        status_code = Response(status=200, response="Avatar Image Uploaded!")
        return status_code

    else:
        # Return error
        status_code = Response(
            status=400, response="Uploaded File Must Be An Image!")
        return status_code

@app.route("/SearchCourses", methods=['POST'])
def search_course():
    search_value = request.json['search_value']
    category_id = request.json['category_id']
    search_result = []
    for i in Course.query.filter_by(category_id=category_id).all():
        if search_value in i.title.to_lower():
            search_result.append(i)

    return jsonify(search_result)

@app.route("/PopularCourses", methods=['GET'])
def popular_courses():
    all_courses = Course.query.filter_by().all()
    all_courses.sort(key=lambda x: x.participants_count, reverse=True)

    return jsonify(all_courses[0:6])

@app.route("/LatestCourses", methods=['GET'])
def latest_courses():
    all_courses = Course.query.filter_by().all()

    return jsonify(all_courses[-7:-1])

@app.route("/User/Register", methods=['POST'])
def signup():
    try:
        if request.is_json:
            user = User(
                username=request.json["username"],
                name=request.json["name"],
                email=request.json["email"],
                password=request.json["password"],
                avatar="default.png",
                is_active=False,
                register_date=datetime.datetime.now(),
                bio=""
                )
            db.session.add(user)
            db.session.commit()
            status_code = Response(status=200, response="Account Created!")
            return status_code
        status_code = Response(status=404)
        return status_code
    except:
        status_code = Response(status=500, response="There is a problem with your information.")
        return status_code

@app.route("/User/Login", methods=['POST'])
def login():
    try:
        if request.is_json:
            email = request.json["email"]
            password = request.json["password"]
            user = User.query.filter_by(email=email, password=password).first()
            if user == None:
                status_code = Response(status=404, response="A User with this information doesn't exists.")
                return status_code
            token = jwt.encode({'id': user.id, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(days=30)}, app.config['SECRET_KEY'])  
            return jsonify({'token' : token})
    except:
        status_code = Response(status=500, response="There is a problem with server.")
        return status_code

@app.route("/User/Details", methods=['POST'])
@token_required
def get_user_details(current_user):
    user = get_user()

    data = {
        'name': user.name, 
        'username': user.username,
        'email': user.username,
        'bio': user.bio,
        'avatar': user.avatar
    }
    
    return jsonify(data)

    
if __name__ == '__main__':
    db.create_all()
    app.run(debug=True, host="0.0.0.0")
