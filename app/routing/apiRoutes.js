var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        
    });

    app.post("/api/friends", function(req,res){
        //find friend
        let name = req.body.name;
        let img = req.body.img;
        let answers = req.body.answers;
        
        let friend = friends.findFriendScore(name, img, answers);
        friends.AddFriend(name, img, answers);
        res.json(friend);
    });

    app.get("/api/questions",function(req,res){
        //return question
        res.json(friends.questions);
    });

}