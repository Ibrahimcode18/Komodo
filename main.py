from website import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True) #remove debug = true, what it does is that for any change we make it automatically restarts the server which is only good during bbuild up of the website






















# website folder stores all the code
## main.py file is what we run when we want to run the website
# __init__.py makes the 'website' folder work like a package or makes it a package which means we can import 
### the website folder and when it is imported, whatever is in the init file runs automatically

#auth.py for login authentications
# models.py for our database related stuffs
# views.py stores the main views

#templates folder is where the html files will be
# if you want to use your own javascript or css or images, you will put them in the static folder. Use the below code to load in your js 
# <script
#     type= "text/javascript"
#     src="{{ url_for('static', filename='index.js') }}" index represents the file name
# ></script>

#The above will go to the base.html page at the bottom of the body tag
# render_template is used to
# request is used to get information from a form