from flask import Blueprint,render_template,request,flash,redirect,url_for
from flask_login import login_required, current_user
from . import db, UPLOAD_FOLDER
from .models import *
from werkzeug.utils import secure_filename
from werkzeug.security import generate_password_hash
import os

views = Blueprint('views',__name__)

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

@views.context_processor        # To ensure that the organizations is available on the
def inject_organizations():
    organizations = Organization.query.all()
    return dict(organizations=organizations)

# Function to check valid file extension
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@views.route('/')
#@login_required  #        Use this for pages you dont want unlogged in users to see
def home():
    return render_template("homePage.html", user=current_user)

@views.route('/about')
def about():
    return render_template("AboutPage.html", user=current_user)

@views.route('/contact')
@login_required
def contact():
    return render_template("Contact.html",user=current_user)

@views.route('/articles')
def article():
    articles = Article.query.filter_by(org_id=4002).all()
    return render_template("articlespage.html", user=current_user, articles=articles)

@views.route('/article/<int:article_id>')
@login_required
def articledetails(article_id): 
    article = Article.query.get(article_id)
    return render_template("articleopener.html", user=current_user, article=article)

### direct input
@views.route('/articles/sumatran')
@login_required
def sumatranarticle():
    return render_template("sumatran-tiger.html", user=current_user)

@views.route('/articles/komodo')
@login_required
def komodoarticle():
    return render_template("komodo-dragon.html", user=current_user)

@views.route('/articles/javan-rhino')
@login_required
def rhinoarticle():
    return render_template("javan-rhino.html", user=current_user)

@views.route('/articles/javan-eagle')
@login_required
def eaglearticle():
    return render_template("javan-eagle.html", user=current_user)

@views.route('/articles/macaque')
@login_required
def macaquearticle():
    return render_template("celebes-macaque.html", user=current_user)

@views.route('/articles/tarsius')
@login_required
def tarsiusarticle():
    return render_template("tarsius.html", user=current_user)

#COMMUNITY
@views.route('/communityinfo',methods=['POST','GET'])
@login_required
def communityinfo():
    if request.method == 'POST':
        content = request.form.get('content')
        owner = 'Not'
        if len(content) < 20:
            flash("The information to be passed can't be this small",category="error")
            return redirect(url_for('views.communityinfo'))
        new_information = Information(content=content, owner=owner, org_id = current_user.organ_id,user_id=current_user.id)         
        db.session.add(new_information)
        db.session.commit()
        flash("Information sucessfully sent", "success")
        return redirect(url_for('views.communityinfo'))
    
    information = Information.query.filter_by(org_id=current_user.organ_id).order_by(Information.date.desc()).all() ### IMPORTANT
    return render_template("information.html",user=current_user,information=information)

@views.route('/communitycont/<int:organization_id>')
def communitycont(organization_id): # If statement to avoid error when there's no content for an organization
    articles = Article.query.filter_by(org_id=organization_id).all()
    organization = Organization.query.get(organization_id)
    return render_template("content.html", user=current_user, articles=articles, organization=organization)

@views.route('/communityaddcon')    # JUST TAKES US TO THE ADD CONTENT FORM
@login_required
def communityaddcon():
    return render_template("addcontent.html", user=current_user)

@views.route('/communitycontopen/<int:article_id>')
@login_required
def communitycontopen(article_id):
    article = Article.query.get(article_id)
    comments = Comment.query.filter_by(art_id=article_id).all()
    organization = Organization.query.filter_by(id=current_user.organ_id).first()
    return render_template("contentopener.html", user=current_user, article=article, comments=comments, organization=organization)
    

@views.route('/content/<int:article_id>',methods=['GET','POST'])
@login_required
def comments(article_id):
    if request.method == 'POST':
        content = request.form.get('content')
    print(content)    
    new_comment = Comment(content=content,user_id=current_user.id,art_id=article_id)
    db.session.add(new_comment)
    db.session.commit()
    flash("Comment successfully added", "success")
    return redirect(url_for('views.communitycontopen', article_id=article_id))

####### Games
@views.route('/games')
@login_required
def games():
    return render_template("game.html",user=current_user)

@views.route('/games/cardMatch')
@login_required
def cardmatch():
    return render_template("cardMatch.html",user=current_user)

@views.route('/games/quiz')
@login_required
def quiz():
    return render_template("quiz.html",user=current_user)

@views.route('/games/wordScrabble')
@login_required
def scramble():
    return render_template("wordScrabble.html",user=current_user)

############### Community




############### Add article dealing with additions from communities, komodo hub 
@views.route('/articles/addarticle',methods=['GET','POST'])
@login_required
def form():
    if request.method == 'POST':
        title = request.form.get('title')
        image = request.files.get('image')
        description = request.form.get('description')
        content = request.form.get('content')

        if len(description) > 70:
            flash("Reduce the amount of words in the descritption",category="error")
        elif len(description) == 0:
            description = "None"
        if image and allowed_file(image.filename):
            filename = secure_filename(image.filename)  # Secure filename
            image_path = os.path.join(UPLOAD_FOLDER, filename)

            os.makedirs(os.path.dirname(image_path), exist_ok=True)
            image.save(image_path)  # Save image to folder

            new_article = Article(title=title, image=filename, description=description, details=content, user_id = current_user.id, org_id = current_user.organ_id)
            db.session.add(new_article)
            db.session.commit()
            organization = Organization.query.filter_by(id=current_user.organ_id).first()
            if description == "None":
                if organization.category == 'School':
                    flash("Content successfully added!", "success")
                    return redirect(url_for('views.schoolcont'))
                else:
                    flash("Content successfully added!", "success")
                    return redirect(url_for('views.communitycont',organization_id=current_user.organ_id))
            else:
                flash("Article successfully! added", "success")
                return redirect(url_for('views.article'))
    return render_template("addarticle.html", user=current_user)


## Add organization
@views.route('/addorgan',methods=['GET','POST'])
@login_required
def addorgan():
    if request.method == 'POST':
        org_name = request.form.get('org_name')
        category = request.form.get('category')

        existing_org = Organization.query.filter_by(name=org_name).first()
        if existing_org:
            flash("Organization already exists!", "danger")
            return redirect(url_for('views.addorgan'))
        
        new_org = Organization(name=org_name, category=category)
        db.session.add(new_org)
        db.session.commit() 
        
        org_id = new_org.id

        firstname = request.form.get('firstname')
        lastname = request.form.get('lastname')
        email = request.form.get('email')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')

        user = User.query.filter_by(email=email).first()
        if user:
            flash('Email already exists.', category='error')
        elif len(email) < 12:
            flash('Enter a valid email address', category='error')
        elif len(password) < 7:
            flash("Password must be more than 6 characters",category="error")
        elif password != confirm_password:
            flash("Passwords do not match!", "danger")
        else:
            hash = generate_password_hash(password, method='pbkdf2:sha256')        
            new_user = User(
                firstname=firstname,lastname=lastname,
                email=email,password=hash,
                role_id=2, organ_id=org_id 
            )
            db.session.add(new_user)
            db.session.commit() 

            flash("Organization and admin successfully registered!", "success")
            return redirect(url_for('views.home'))
    return render_template("addorganization.html", user=current_user)


@views.route('/adduser',methods=['GET','POST'])
@login_required
def orgadduser():
    if request.method == 'POST':
        firstname = request.form.get('firstname')
        lastname = request.form.get('lastname')
        email = request.form.get('email')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')
        role = request.form.get('role')

        user = User.query.filter_by(email=email).first()
        if user:
            flash('Email already exists.', category='error')
        elif len(email) < 12:
            flash('Enter a valid email address', category='error')
        elif not password:
            flash('Password is required', category='error')
        elif len(password) < 7:
            flash("Password must be more than 6 characters",category="error")
        elif password != confirm_password:
            flash("Passwords do not match!", "danger")
        else:
            if role == "Member":
                roleid = 4
            elif role == "Admin":
                roleid = 2
            elif role == "Student":
                roleid = 1
            else:
                roleid = 3
            orgid = current_user.organ_id
            new_user = User(firstname=firstname, lastname=lastname, email=email, password=generate_password_hash(password, method='pbkdf2:sha256'),role_id=roleid, organ_id=orgid)
            db.session.add(new_user)
            db.session.commit()
            flash("User successfully registered!", "success")
            return redirect(url_for('views.home'))
    return render_template("adduser.html", user=current_user)

## SCHOOL PAGE
@views.route('/schoolinfo/<int:organization_id>')  
@login_required
def zoolainfo(organization_id):
    information = Information.query.filter_by(org_id=organization_id, owner='Not').order_by(Information.date.desc()).all()
    organization = Organization.query.filter_by(id=organization_id).first()   
    return render_template("schoolinformation.html", user=current_user, information=information, organization=organization)

@views.route('/schooladdinfo',methods=['GET','POST'])
@login_required
def schooladdinfo():
    if request.method == 'POST':
        content = request.form.get('content')
        owner = 'Not'
        if len(content) < 20:
            flash("The information to be passed can't be this small",category="error")

        new_information = Information(content=content,owner=owner,org_id = current_user.organ_id,user_id=current_user.id)         
        db.session.add(new_information)
        db.session.commit()
        flash("Information sucessfully sent", "success")
        return redirect(url_for('views.schooladdinfo'))
    information = Information.query.filter_by(org_id=current_user.organ_id, owner='Not').order_by(Information.date.desc()).all()
    organization = Organization.query.filter_by(id=current_user.organ_id).first()   
    return render_template("schoolinformation.html", user=current_user, information=information, organization=organization)

@views.route('/schoollobby',methods=['GET','POST'])
@login_required
def schoollobbyinfo():
    if request.method == 'POST':
        content = request.form.get('content')
        owner = 'Lobby'
        if len(content) < 20:
            flash("The information to be passed can't be this small",category="error")

        new_information = Information(content=content,owner=owner,org_id = current_user.organ_id,user_id=current_user.id)         
        db.session.add(new_information)
        db.session.commit()
        flash("Information sucessfully sent", "success")
        return redirect(url_for('views.schoollobbyinfo'))
    information = Information.query.filter_by(org_id=current_user.organ_id, owner='Lobby').order_by(Information.date.desc()).all()
    organization = Organization.query.filter_by(id=current_user.organ_id).first()   
    return render_template("schoollobby.html", user=current_user, information=information, organization=organization)


@views.route('/program')
@login_required
def schoolprogram():
    organization = Organization.query.filter_by(id=current_user.organ_id).first() 
    return render_template("program.html",user=current_user, organization=organization)

@views.route('/schoolcontent')
@login_required
def schoolcont():
    organization = Organization.query.filter_by(id=current_user.organ_id).first()
    articles = Article.query.filter_by(org_id=current_user.organ_id).all()
    return render_template("schoolcontent.html",user=current_user, organization=organization, articles=articles)



@views.route('/delete_info/<int:info_id>', methods=['POST'])
@login_required
def delete_info(info_id):
    info = Information.query.get_or_404(info_id)

    db.session.delete(info)
    db.session.commit()
    flash('Information deleted successfully.', 'success')
    return redirect(request.referrer)


@views.route('/delete_art/<int:art_id>', methods=['POST'])
@login_required
def delete_art(art_id):
    art = Information.query.get_or_404(art_id)

    db.session.delete(art)
    db.session.commit()
    flash('Article deleted successfully.', 'success')
    return redirect(request.referrer)