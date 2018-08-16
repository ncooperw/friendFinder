//Dependencies
var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');

var app = express();
const PORT = process.env.PORT || 3000;

//Sets up the Express app to handle data parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//ROUTER

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//Starts the server
app.listen(PORT, function(){
    console.log('App listening on PORT:' + PORT);
});