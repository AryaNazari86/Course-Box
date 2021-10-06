from flask import Flask, request, Response, jsonify
from flask_sqlalchemy import SQLAlchemy
import os
import uuid



app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///coursebox.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    participants_count = db.Column(db.Integer)
    likes = db.Column(db.Integer)
    image = db.Column(db.String(200), nullable=False, unique=True)
    # Relations
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    participants = db.relationship('CourseParticipant', backref='course')
    content = db.relationship('CourseContent', backref='content')

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
    content = db.relationship('LessonContent', backref='content')

    def _init_(self, title, icon, content):
        self.title = title
        self.icon = icon
        self.content = content

class LessonContent(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    title = db.Column(db.String(200))
    icon = db.Column(db.String(200))
    color = db.Column(db.String(200))

    def _init_(self, title, icon, color):
        self.title = title
        self.icon = icon
        self.color = color

class CourseParticipant(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'))
    participant_id = db.Column(db.Integer, db.ForeignKey('user.id'))

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
    # register_date = db.Column(db.DateTime, nullable=False)
    # Relations
    teachedCourses = db.relationship('Course', backref='author')
    courses = db.relationship('CourseParticipant', backref='participant')

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
        # TODO: Get last avatar name
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
        # TODO: Delete the last avatar from images
        if last_avatar != "default.png":
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


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
