var path = require('path');

//ROUTING

module.exports = function(app){
    //default GET route that leads to home.html - displays home page
    app.get('/survey', function(req, res){
        res.sendFile(path.join(_dirname + '/../public/survey.html'))
    });
    
    //aUSE route to home page
    app.use(function (req, res){
        res.sendFile(path.join(_dirname + '/../public/home.html'));
    });
};