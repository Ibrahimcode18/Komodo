from flask import Blueprint, render_template, request, flash, redirect, url_for
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
from . import db
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint('auth',__name__)

@auth.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        user = User.query.filter_by(email=email).first()
        print(user)
        if user:
            if check_password_hash(user.password, password):
                flash('Logged in successfully!', category='success')
                login_user(user, remember=True)
                return redirect(url_for('views.home'))
            else:
                flash('Incorrect password, try again', category='error')
        else:
            flash('Email does not exist', category='error')
    return render_template('login.html', user=current_user)

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('views.home'))

@auth.route('/signup', methods=['GET','POST'])
def signup():
    if request.method == 'POST':
        firstname = request.form.get('firstname')
        lastname = request.form.get('lastname')
        email = request.form.get('email')
        password1 = request.form.get('password1')
        password2 =request.form.get('password2')

        
        user = User.query.filter_by(email=email).first()
        if user:
            flash('Email already exists.', category='error')
        elif len(email) < 12:
            flash('Enter a valid email address', category='error')
        elif len(firstname) < 2:
            flash('Enter a valid firstname', category='error')
        elif len(lastname) < 2:
            flash('Enter a valid lastname', category='error')
        elif len(password1) < 7:
            flash('Set a more secure password')
        elif password1 != password2:
            flash('Passwords don\'t match', category='error')
        else:
            user_id = User.query.get(5003)
            if not user_id:
                new_user = User(id=5003,firstname=firstname, lastname=lastname, email=email, password=generate_password_hash(password1, method='pbkdf2:sha256'), role_id=2, organ_id=4002)
            else:
                new_user = User(firstname=firstname, lastname=lastname, email=email, password=generate_password_hash(password1, method='pbkdf2:sha256'),role_id=5, organ_id=4002)
            db.session.add(new_user)
            db.session.commit()
            login_user(new_user, remember=True)
            flash('Account Created!', category='success')
            return redirect(url_for('views.home'))          #views is the name of the blueprint(i.e python file handling views), home is the name of the function 
            
    return render_template('signup.html',user=current_user)

@auth.route('/resetpass', methods=['GET','POST'])
def resetpassword():
    if request.method == 'POST':
        email = request.form.get('email')
        password1 = request.form.get('password1')
        password2 =request.form.get('password2')
        code = request.form.get('code')
        
        user = User.query.filter_by(email=email).first()
        if not user:
            flash('Email does not exist', category='error')
        elif code != '7756':
            flash('Code incorrect')
        elif len(password1) < 7:
            flash('Set a more secure password',category='error')
        elif password1 != password2:
            flash('Passwords don\'t match', category='error')
        else:
            user.password = generate_password_hash(password1, method='pbkdf2:sha256')
            db.session.commit()
            login_user(user, remember=True)
            flash('Password Successfully Changed', category='success')
            return redirect(url_for('views.home'))          #views is the name of the blueprint(i.e python file handling views), home is the name of the function 
            
    return render_template('resetpassword.html',user=current_user)
