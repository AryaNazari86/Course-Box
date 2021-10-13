from flask import Flask, request, Response, jsonify
from flask_sqlalchemy import SQLAlchemy
import os
import uuid
import datetime

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///coursebox.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)



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
    email = db.Column(db.String(200), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    password_salt = db.Column(db.String, nullable=False)
    active_code = db.Column(db.String(10), nullable=False)
    is_active = db.Column(db.Boolean, nullable=False)
    avatar = db.Column(db.String(200), unique=True)
    register_date = db.Column(db.DateTime, nullable=False)
    # Relations
    created_courses = db.relationship('Course', backref='creator')

    def __init__(self, username, email, password, password_salt, active_code, is_active, avatar, register_date):
        self.username = username
        self.email = email
        self.email = email
        self.password = password
        self.password_salt = password_salt
        self.active_code = active_code
        self.is_active = is_active
        self.avatar = avatar
        self.register_date = register_date

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
@app.route("/ChangeProfileAvatar/<user_id>", methods=["POST"])
def change_profile_avatar(user_id):
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
        # Generate a random if for the image
        avatar_uid = uuid.uuid4()
        # Get last avatar name
        last_avatar = user.avatar
        # Save avatar image
        avatar.save(os.path.join("avatars", str(
            avatar_uid) + file_extension))
        if user == None:
            status_code = Response(status=400, response="User Was Not Found!")
            return status_code
        # Update avatar name in database
        user.avatar = str(avatar_uid) + file_extension
        # Commit changes
        db.session.commit()
        # Delete the last avatar from images
        if last_avatar != "default.png":
            if last_avatar == None:
                # Return error
                status_code = Response(
                    status=400, response="Last User Avatar Was Not Found!")
                return status_code
            else:
                os.remove(f"avatars/{last_avatar}")

        # Return sucessfull
        status_code = Response(status=200, response="Avatar Image Uploaded!")
        return status_code

    else:
        # Return error
        status_code = Response(
            status=400, response="Uploaded File Must Be An Image!")
        return status_code


@app.route("/SearchCourses/<search_value>/<category_id>", methods=['GET'])
def search_course(search_value, category_id):
    search_result = []
    for i in Course.query.filter_by(category_id=category_id).all():
        if search_value in i.title.to_lower():
            search_result.append(i)

    return jsonify(search_result)

@app.route("/LatestCourses", methods=['GET'])
def latest_courses():
    all_courses = Course.query.filter_by().all()
    all_courses.sort(key=lambda x: x.participants_count, reverse=True)

    return jsonify(all_courses[0:6])

@app.route("/User/Register", methods=['POST'])
def signup():
    # try:
    #     if request.is_json:
    #         user = User(
    #             username=request.json["username"],
    #             email=request.json["email"],
    #             password=request.json["password"],
    #             password_salt=request.json["password_salt"],
    #             active_code=str(uuid.uuid4()),
    #             avatar="default.png",
    #             is_active=False,
    #             register_date=datetime.datetime.now()
    #             )
    #         db.session.add(user)
    #         db.session.commit()
    #         status_code = Response(status=200, response="Account Created!")
    #         return status_code
    #     status_code = Response(status=404, response="")
    #     return status_code
    # except:
    #     status_code = Response(status=400, response="There is a problem with creating your account.")
    #     return status_code
    if request.is_json:
            user = User(
                username=request.json["username"],
                email=request.json["email"],
                password=request.json["password"],
                password_salt=request.json["password_salt"],
                active_code=str(uuid.uuid4()),
                avatar="default.png",
                is_active=False,
                register_date=datetime.datetime.now()
                )
            db.session.add(user)
            db.session.commit()
            status_code = Response(status=200, response="Account Created!")
            return status_code
if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
