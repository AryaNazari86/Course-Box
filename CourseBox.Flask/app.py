from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_user import UserManager, UserMixin

app = Flask(__name__)
db = SQLAlchemy(app)

# Define User data-model


class User(db.Model, UserMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)

    # User Authentication fields
    #email = db.Column(db.String(255), nullable=False, unique=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)

    # User fields
    active = db.Column(db.Boolean()),
    '''first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)'''

    def __init__(self, username, password):
        self.username = username
        self.password = password


# Setup Flask-User
user_manager = UserManager(app, db, User)


@app.route("/", method=['POST', 'GEST'])
def user():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User(username, password)
        db.session.add(user)
        db.session.commit()
        return 'Ilia'
    return render_template('index.html')


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
