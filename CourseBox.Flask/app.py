from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///coursebox.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

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



if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
