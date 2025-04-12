from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func
#The description doesnt exist in community content, so there should be an if statement that if the description field is empty; none should be sent to the database. For content. 
# the user here is in small letters bcs that's how it is by default

from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from sqlalchemy.sql import func

#db = SQLAlchemy()

class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    image = db.Column(db.String(255))
    description = db.Column(db.String(255)) 
    details = db.Column(db.String(100000))
    date = db.Column(db.DateTime(timezone=True), default=func.now())
    #status approved or pending

    # Foreign Keys
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))   
    org_id = db.Column(db.Integer, db.ForeignKey('organization.id'))

    # Relationships
    comments = db.relationship('Comment', backref='article', lazy=True)  


class Information(db.Model):    
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(20000))
    date = db.Column(db.DateTime(timezone=True), default=func.now())
    owner = db.Column(db.String(20))

    # Foreign Keys
    org_id = db.Column(db.Integer, db.ForeignKey('organization.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(70))
    lastname = db.Column(db.String(70))
    email = db.Column(db.String(70), unique=True)
    password = db.Column(db.String(70))

    # Foreign Keys
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'))
    organ_id = db.Column(db.Integer, db.ForeignKey('organization.id'))

    # Relationships
    articles = db.relationship('Article', backref='user', lazy=True)
    comments = db.relationship('Comment', backref='user', lazy=True)
    informations = db.relationship('Information', backref='user', lazy=True)


class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(5000))
    date = db.Column(db.DateTime(timezone=True), default=func.now())

    # Foreign Keys
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    art_id = db.Column(db.Integer, db.ForeignKey('article.id'))  


class Organization(db.Model):   
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(70), unique=True, nullable=False)
    category = db.Column(db.String(30), nullable=False)

    # Relationships
    articles = db.relationship('Article', backref='organization', lazy=True)
    info = db.relationship('Information', backref='organization', lazy=True)
    users = db.relationship('User', backref='organization', lazy=True)

class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    role_name = db.Column(db.String(50), unique=True, nullable=False) # change to name

    # Relationships
    users = db.relationship('User', backref='role', lazy=True)  # Insert only if the role doesn't exist

def insert_roles():
    predefined_roles = [
        (1, "Student"),
        (2, "Admin"),
        (3, "Teacher"),
        (4, "Member")
    ]
    
    for role_id, role_name in predefined_roles:
        role = Role.query.get(role_id)
        if not role: 
            new_role = Role(id=role_id, role_name=role_name)
            db.session.add(new_role)
    db.session.commit()

def insert_organ():
    organ = Organization.query.filter_by(name="Komodo Hub").first()
    if not organ:
        new_org = Organization(id=4002,name="Komodo Hub", category="Community")
        db.session.add(new_org)
    db.session.commit()




# use date = db.Column(db.DateTime(timezone=True), default=func.now()) alongside importing func to let the database automatically add the date and time a new field was created

# pip install flask-migrate
# flask db init
# flask db migrate -m "Added title column to articles"
# flask db upgrade
