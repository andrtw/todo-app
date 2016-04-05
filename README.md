# Todo App

Web application built using a straight MEAN stack: AngularJS on the front-end, Node/Express server, MongoDB as data storage.

### Install MongoDB

Download the latest version of MongoDB if you do not already have it installed on your machine.

https://www.mongodb.org/downloads#production

### Install Node.js and npm

Download the latest version of Node.js if you do not already have it installed on your machine. This download will also include the latest version of npm.

https://nodejs.org/en/download/

### Install Bower

`npm install -g bower`

### Install Grunt

`npm install -g grunt-cli`

### Download this Repository

Clone this repo into a new project folder. You may also download it as a ZIP file.

https://github.com/andrtw/todo-app.git

### Install Libraries and Dependencies

Once you have the files downloaded, you need to install all libraries and dependencies.

Navigate into the root project directory, then into the server directory and run the following command.

`npm install`

Navigate into the client directory and run the following commands.

`npm install`

`bower install`

### Run the Project

Start the MongoDB server.

`mongod`

Now start the server by navingating into the server directory and running this command.

`node index`

Then you can launch the application by navingating into the client directory and running this command.

`grunt serve`
