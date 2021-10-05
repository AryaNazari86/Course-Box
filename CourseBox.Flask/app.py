from flask import Flask, send_from_directory, request
from flask_sqlalchemy import SQLAlchemy
import os
import uuid

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///coursebox.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(20))
    category = db.Column(db.String(20))
    author = db.Column(db.String(20))
    participants = db.Column(db.Integer)
    likes = db.Column(db.Integer)
    description = db.Column(db.Text)


class User(db.Model):
    _id = db.Column("id", db.Integer, primary_key=True, unique=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(200), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    password_salt = db.Column(db.String, nullable=False)
    active_code = db.Column(db.String(10), nullable=False)
    is_active = db.Column(db.Boolean, nullable=False)
    avatar = db.Column(db.String(200))
    register_date = db.Column(db.DateTime, nullable=False)

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


APP_ROOT = os.path.dirname(os.path.abspath(__file__))


# * Change the profile avatar
@app.route("/ChangeProfileAvatar", methods=["POST"])
def Change_Profile_Avatar():
    target = os.path.join()
    print(target)
    if not os.path.isdir(target):
        os.mkdir(target)
    else:
        print("Couldn't create upload directory: {}".format(target))
    print(request.files.getlist("file"))
    for upload in request.files.getlist("file"):
        print(upload)
        print("{} is the file name".format(upload.filename))
        filename = upload.filename
        destination = "/".join([target, str(uuid.uuid4())])
        print("Accept incoming file:", filename)
        print("Save it to:", destination)
        upload.save(destination)


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
