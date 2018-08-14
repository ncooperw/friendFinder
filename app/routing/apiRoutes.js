//Load Data
var friendList = require('../data/friends.js');


module.exports = function(app){
    //a GET route that displays JSON of all possivle friends
    app.get('/api/friends', function(req, res){
        res.json(friendList)
    });
    
    //a POST route that handles incoming survey results. 

    app.post('/api/friends', function (req, res){
        //grabs the users scores to compare with firends in friendList array
        var newFriendScores = req.body.scores;
        var socoresArray =[];
        var friendCount = 0;
        var bestMatch = 0;

        //runs through all current friends in list 
        
    });
};