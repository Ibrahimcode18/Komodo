from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# from website.models import insert_roles
import os
from flask_login import LoginManager

db = SQLAlchemy()
DB_NAME = "database.db"
BASE_DIR = os.path.abspath(os.path.dirname(__file__))  
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'static/images/upload')

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = ' it does some encryption related to the website, whatever we type here will be the secret key for the app'
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    db.init_app(app)


    from .views import views
    from .auth import auth

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/') # / = no prefix in the route

    from .models import User, Article

    create_database(app)
    
    create_imgpath(app)

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))
    return app

def create_database(app):
    from .models import insert_roles, insert_organ
    if not os.path.exists('website/' + DB_NAME):
        with app.app_context():
            db.create_all()
            insert_roles()
            insert_organ()
        print('created database!')

def create_imgpath(app):
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)