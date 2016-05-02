## Install essential package ##
`sudo npm install -g gulp bower nodemon;`

## Create project directory ##
`mkdir 002_React_ToolChain`

### Initialize npm and bower ###
`sudo npm init`

`sudo bower init`

### Install essential project js package ###
`sudo npm install --save browserify reactify vinyl-source-stream gulp react react-dom express guid`

### Setup a clean working directory structure ###
- app -  client application
- app/actions - react actions and handlers
- app/components - react components
- app/lib - automatically installed libraries and dependencies
- app/public - static contents like html, images and css
- stores - location of client model and store
- server - server side code and runnable

### Import bootstrap css ### 
`bower install --save bootstrap-css`

## Create Files ##
### Create content of server.js ###
see server/server.js

### Create content of home page ###
see index.html and index.jsx

### Create react root component and mount it on home page ###
see HelloWorld.jsx

## Setup build ##
see gulpfile.js
run `gulp` from root to build project

## Run ##
run `nodemon server.js` from server directory
