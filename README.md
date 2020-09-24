# Introduction
The StopGap Ramp Management System is a full-stack website to assist the StopGap Foundation team deal with their ramp orders more efficiently.
Built using React, Django, and PostGreSQL.

## Description
The StopGap Foundation is a non-profit organization/charity which aims to make every space barrier-free. They do this by providing businesses and organizations with temporary ramps for their entrances/exits. StopGap has big goals for their future. As they begin to ramp up production nationwide, the team is finding it increasingly difficult to deal with the large number of requests on a daily basis. The previous system in use consisted of a Google form connected to a spreadsheet. This has resulted in a backlog of orders yet to be fulfilled. This is where my team and I worked hand-in-hand with StopGap leaders to develop a tailor made ramp management system that would speed up their ability to handle requests.

### Features
In our ramp management system, we focused on key features that were important for the team and clients as they ordered. On the client side we've allowed clients to login to create, view and update requests, and upload new photos. As a StopGap Administrator, in our admin dashboard, admins can view total orders, update existing order, notify clients of additional documents needed and leave notes on orders.


## Local Setup Guidelines

### Starting/Updating the Application

1) Run:

        export NODE_ENV=local

	
	On Windows (powershell) instead run:
	
		$env:NODE_ENV="local"
		
                
2) Change directory into the app folder
3) Run:
        
        yarn add package.json

4) Execute:

        yarn build
	
5) Apply any database changes:

        python manage.py makemigrations
        python manage.py migrate
		python manage.py migrate --run-syncdb

6) Run:

        python manage.py collectstatic

7) Run:

        python manage.py runserver
		
Also if you change anything on the model, do:

	Delete db.sqlite3
	
and then step 5, to ensure those
changes are detected by the server.


## Deployment instructions
1) Run:

        heroku login

2) Login to heroku

3) Change directory into app and run:

        yarn add package.json
        
to make sure there is a yarn.lock file

4) Change directory back into the root dir

5) Run:

        sudo deploy_app.sh
