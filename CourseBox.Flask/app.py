from flask import Flask, abort, request, Response
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
    # Relations
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    participants = db.relationship('CourseParticipant', backref='course')

    def __init__(self, title, description, participants_count, likes, category_id, author_id):
        self.title = title
        self.description = description
        self.participants_count = participants_count
        self.likes = likes
        self.category_id = category_id
        self.author_id = author_id


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
    avatar = db.Column(db.String(200))
    register_date = db.Column(db.DateTime, nullable=False)
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
def Change_Profile_Avatar(user_id):
    avatar = request.files['avatar']
    if avatar == None:
        status_code = Response(status=400, response="")
        return status_code
    allowed_extensions = [".png", ".jpeg", ".jpg", ".webp", ".ico", ".svg"]
    file_extension = os.path.splitext(avatar.filename)[-1]
    if allowed_extensions.__contains__(file_extension):
        avatar_uid = uuid.uuid4()
        avatar.save(os.path.join("avatars", str(
            avatar_uid) + file_extension))

        user_id = User.query.filter_by(id=user_id).first()
        user_id.avatar = str(avatar_uid) + file_extension
        db.session.commit()

        status_code = Response(status=200, response="")
        return status_code

    else:
        status_code = Response(status=400, response="")
        return status_code


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
