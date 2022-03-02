from crypt import methods
from flask import Flask, render_template, request, Response, jsonify
from flask_sqlalchemy import SQLAlchemy
import os
import uuid
import datetime
import jwt
from functools import wraps
from flask_marshmallow import Marshmallow
from email.utils import parseaddr
import hashlib


app = Flask(__name__)
app.config["SECRET_KEY"] = "C83D98E8-B23B-4325-A8F0-5C58106B9145"
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///coursebox.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)


def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):
        print(1)
        token = None
        if 'x-access-tokens' in request.headers:
            token = request.headers['x-access-tokens']

        if not token:
            status_code = Response(
                status=500, response="A valid token is missing.")
            return status_code

        try:
            data = jwt.decode(
                token, app.config["SECRET_KEY"], algorithms="HS256")
            current_user = User.query.filter_by(id=data['id']).first()
        except:
            status_code = Response(status=401, response="Token is invalid.")
            return status_code

        print(current_user.id)
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


class CategoryListSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'category_image')


category_list_schema = CategoryListSchema(many=True)


class CategorySchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'category_image')


category_schema = CategorySchema(many=False)


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
    image = db.Column(db.String(200), nullable=True)
    # Relations
    category_id = db.Column(db.Integer, db.ForeignKey(Category.id))
    author_id = db.Column(db.Integer, db.ForeignKey(User.id))
    participants = db.relationship(
        'User', secondary='participants', backref='courses')
    content = db.relationship('Subject', backref='course')

    def __init__(self, title, description, participants_count, likes, category_id, author_id, image):
        self.title = title
        self.description = description
        self.participants_count = participants_count
        self.likes = likes
        self.category_id = category_id
        self.author_id = author_id
        self.image = image


class CourseListSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'description', 'participants_count',
                  'likes', 'image', 'category_id', 'author_id')


course_list_schema = CourseListSchema(many=True)


class CourseSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'description', 'participants_count',
                  'likes', 'image', 'category_id', 'author_id')


course_schema = CourseSchema(many=False)


class Subject(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    title = db.Column(db.String(200))
    icon = db.Column(db.String(200))
    content = db.relationship('Lesson', backref='course_content')
    # Relations
    course_id = db.Column(db.Integer, db.ForeignKey(Course.id))

    def _init_(self, title, icon, content):
        self.title = title
        self.icon = icon
        self.content = content


class SubjectListSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'icon', 'course_id')


class LessonBlockSchema(ma.Schema):
    class Meta:
        fields = ('id', 'content', 'type')


lesson_block_list_schema = LessonBlockSchema(many=True)

subject_list_schema = SubjectListSchema(many=True)


class Lesson(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    title = db.Column(db.String(200))
    icon = db.Column(db.String(200))
    color = db.Column(db.String(200))
    content = db.relationship('LessonBlock', backref='lesson_content')
    # Relations
    subject_id = db.Column(db.Integer, db.ForeignKey(Subject.id))

    def _init_(self, title, icon, color, course_content_id):
        self.title = title
        self.icon = icon
        self.color = color
        self.course_content_id = course_content_id


class LessonListSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'icon', 'color', 'subject_id')


lesson_list_schema = LessonListSchema(many=True)


class LessonBlock(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    type = db.Column(db.String(30))
    content = db.Column(db.String(500))
    lesson_id = db.Column(db.Integer, db.ForeignKey(Lesson.id))

    def __init__(self, type, content):
        self.type = type
        self.content = content


participants = db.Table('participants',
                        db.Column('course_id', db.Integer, db.ForeignKey(
                            Course.id), primary_key=True),
                        db.Column('user_id', db.Integer, db.ForeignKey(
                            User.id), primary_key=True)
                        )

# Change the profile avatar


@ app.route("/ChangeProfileAvatar", methods=["POST"])
@ token_required
def change_profile_avatar(current_user):
    user_id = current_user.id
    avatar = request.files['avatar']
    if avatar == None:
        # Return error
        return jsonify({'status': 'error'}), 400
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
            return jsonify({'status': 'error'}), 404
        # Save avatar image
        # TODO: there is a problem with saving files.
        avatar.save('static/avatars/' + str(
            user.id) + file_extension)
        if user == None:
            return jsonify({'status': 'error'}), 404
        # Update avatar name in database
        user.avatar = str(user.id) + file_extension
        # Commit changes
        db.session.commit()
        # Delete the last avatar from images
        if last_avatar != "default.png":
            if last_avatar == None:
                # Return error
                return jsonify({'status': 'error'}), 400
            else:
                # Check if avatar exists before deleting.
                if os.path.isfile(f"/static/avatars/{last_avatar}"):
                    os.remove(f"/static/avatars/{last_avatar}")

        # Return sucessfull
        return jsonify({'status': 'success'}), 200

    else:
        # Return error
        return jsonify({'status': 'error'}), 400


@ app.route("/SearchCourses", methods=['POST'])
def search_course():
    search_value = request.json['search_value']
    category_id = request.json['category_id']
    search_result = []
    for i in Course.query.filter_by(category_id=category_id).all():
        if search_value in i.title.lower():
            search_result.append(i)

    result = course_list_schema.dump(search_result)
    return jsonify(result)


@ app.route("/PopularCourses", methods=['GET'])
def popular_courses():
    all_courses = Course.query.filter_by().all()
    all_courses.sort(key=lambda x: x.participants_count, reverse=True)
    result = course_list_schema.dump(all_courses[0:6])
    return jsonify(result)


@ app.route("/LatestCourses", methods=['GET'])
def latest_courses():
    all_courses = Course.query.all()
    result = course_list_schema.dump(all_courses)
    return jsonify(result)


@ app.route("/User/Register", methods=['POST'])
def signup():
    try:
        if request.is_json:
            # Cheking if the email is valid
            email = request.json["email"]
            if parseaddr(email) != ('', ''):
                # Hashing the password
                # salt = os.urandom(32)
                salt = b'12345678912345678912345678999999'
                password = request.json['password']

                key = hashlib.pbkdf2_hmac(
                    'sha256',  # The hash digest algorithm for HMAC
                    password.encode('utf-8'),  # Convert the password to bytes
                    salt,  # Provide the salt
                    100000,  # It is recommended to use at least 100,000 iterations of SHA-256
                    dklen=128  # Get a 128 byte key
                )

                user = User(
                    username=request.json["username"],
                    name=request.json["name"],
                    email=email,
                    password=salt + key,
                    avatar="default.png",
                    is_active=False,
                    register_date=datetime.datetime.now(),
                    bio=""
                )
                db.session.add(user)
                db.session.commit()
                return jsonify({'status': 'success'}), 200
            else:
                return jsonify({'status': 'error'}), 404
        return jsonify({'status': 'error'}), 404
    except:
        return jsonify({'status': 'error'}), 500


@app.route("/User/Login", methods=['POST'])
def login():
    try:
        if request.is_json:
            email = request.json["email"]

            # Hashing the input password
            password = request.json["password"]
            salt = b'12345678912345678912345678999999'
            password = salt + hashlib.pbkdf2_hmac(
                'sha256',
                password.encode('utf-8'),
                salt,
                100000
            )

            # user = User.query.filter_by(email=email, password=password).first()
            user = User.query.filter_by(email=email).first()
            if user == None:
                status_code = Response(
                    status=404, response="A User with this information doesn't exists.")
                return status_code
            token = jwt.encode({'id': user.id, 'exp': datetime.datetime.utcnow(
            ) + datetime.timedelta(days=30)}, app.config['SECRET_KEY'])
            return jsonify({'token': token})
    except:
        return jsonify({'status': 'error'}), 500


@app.route("/CreateCourse", methods=['POST'])
@token_required
def create_course(current_user):
    user_id = current_user.id
    # print(user_id)

    # Category ID
    category_request = request.json["Category"]
    if category_request == "Sport":
        category_request = 1
    elif category_request == "Math":
        category_request = 2
    elif category_request == "Code":
        category_request = 3
    elif category_request == "Paint":
        category_request = 4
    elif category_request == "Science":
        category_request = 5
    else:
        return jsonify({'status': 'error'}), 404

    try:
        newCourse = Course(
            title=request.json["Title"],
            description=request.json["Description"],
            participants_count=0,
            likes=0,
            category_id=category_request,
            author_id=user_id,
            image=request.json["Image"],
        )
        db.session.add(newCourse)
        db.session.commit()
        return jsonify({'status': 'success'}), 200
    except:
        return jsonify({'success': 'error'}), 500


@token_required
@app.route("/GetCourse", methods=["POST"])
def get_course(current_user):
    course_id = request.json["course_id"]
    course = Course.query.filter_by(id=course_id).first()
    result = course_schema.dump(course)
    return jsonify(result)


@token_required
@app.route("/GetCoursesByAuthorId", methods=["POST"])
def get_courses_by_author_id(current_user):
    author_id = request.json["author_id"]
    courses = Course.query.filter_by(author_id=author_id).all()
    result = course_list_schema.dump(courses)
    return jsonify(result)


@token_required
@app.route("/GetSubjects", methods=["POST"])
def get_subjects_by_course_id(current_user):
    course_id = request.json["course_id"]
    subjects = Subject.query.filter_by(course_id=course_id).all()
    result = subject_list_schema.dump(subjects)
    return jsonify(result)


@token_required
@app.route("/UpdateSubject", methods=["POST"])
def update_subject(current_user):
    subject_id = request.json["subject_id"]
    subject = Subject.query.filter_by(id=subject_id).first()
    if(subject.author_id == current_user.id):
        subject.title = request.json["subject_title"]
        subject.icon = request.json["subject_icon"]
        db.session.commit()
    return jsonify({'status': 'success'}), 200


@token_required
@app.route("/GetLessons", methods=["POST"])
def get_lessons_by_subject_id(current_user):
    subject_id = request.json["subject_id"]
    lessons = Lesson.query.filter_by(subject_id=subject_id).all()
    result = lesson_list_schema.dump(lessons)
    return jsonify(result)


@app.route("/GetCategory", methods=["POST"])
def get_category():
    category_id = request.json["category_id"]
    category = Category.query.filter_by(id=category_id).first()
    result = category_schema.dump(category)
    return jsonify(result)


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

# Lesson Block adding


@app.route("/Course/LessonBlock", methods=['POST'])
def add_lesson_block():
    try:
        if request.is_json:
            lesson_block = LessonBlock(
                type=request.json["type"],
                content=request.json["content"],
                lesson_id=request.json["lesson_id"],
            )
            db.session.add(lesson_block)
            db.session.commit()
            return jsonify({'status': 'success'}), 200
        return jsonify({'status': 'error'}), 400
    except:
        return jsonify({'status': 'error'}), 500


@app.route("/Categories", methods=['GET'])
def get_all_categories():
    all_categories = Category.query.all()
    result = category_list_schema.dump(all_categories)
    return jsonify(result)


@app.route("/GetParticipantCourses", methods=['POST'])
def get_participant_courses():
    user_id = request.json["user_id"]
    user = User.query.filter_by(id=user_id).first()
    result = course_list_schema.dump(user.courses)
    return jsonify(result)


@app.route('/CreateLessonBlock', methods=['POST'])
# Creates A LessonBlock
def create_lesson_block():
    try:
        if request.is_json:
            lesson_block = LessonBlock(
                type=request.json["type"],
                content=request.json["content"],
                lesson_id=request.json["lesson_id"],
            )
            db.session.add(lesson_block)
            db.session.commit()
            return jsonify({'status': 'success'}), 200
        return jsonify({'status': 'error'}), 400
    except:
        return jsonify({'status': 'error'}), 500


@app.route('/GetLessonBlocks', methods=['POST'])
def get_lesson_blocks():
    try:
        if request.is_json:
            lesson_id = request.json["lesson_id"]
            lesson_blocks = LessonBlock.query.filter_by(
                lesson_id=lesson_id).all()
            result = lesson_block_list_schema.dump(lesson_blocks)
            return jsonify(result)
        return jsonify({'status': 'error'}), 400
    except:
        return jsonify({'status': 'error'}), 500


@app.route('/UploadFile', methods=['POST'])
def upload_file():
    image = request.files['image']
    id = request.json["id"]
    if image == None:
        # Return error
        return jsonify({'status': 'error'}), 400
    # Image extensions
    allowed_extensions = [".png", ".jpeg", ".jpg", ".webp", ".ico", ".svg"]
    file_extension = os.path.splitext(image.filename)[-1]
    image.save('statics/ImageBlocks/' + str(id) + file_extension)
    return jsonify({'status': 'success', 'url': 'statics/ImageBlocks/' + str(id) + file_extension}), 200


@app.route('/GetLessonBlockID', methods=['GET'])
def get_lesson_block_id():
    lesson_blocks = LessonBlock.query.all()
    return jsonify({'id': str(len(lesson_blocks))})

@token_required
@app.route('/ChangeUserDetails', methods=['POST'])
def change_user_details(current_user):
    return render_template("changeuserdetails.html", token = request.headers['x-access-tokens'], user = current_user)

@app.route('/ChangeUserDetailsForm', method=['POST'])
def change_user_details_form(current_user):
    token = None
    if 'token' in request.form:
        token = request.form['token']

    if not token:
        status_code = Response(
            status=500, response="A valid token is missing.")
        return status_code

    try:
        data = jwt.decode(
            token, app.config["SECRET_KEY"], algorithms="HS256")
        current_user = User.query.filter_by(id=data['id']).first()
        current_user.name = request.form['name']
        current_user.email = request.form['email']
        current_user.bio = request.form['bio']
        db.session.commit()
    except:
        status_code = Response(status=401, response="Token is invalid.")
        return status_code

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True, host="0.0.0.0")
