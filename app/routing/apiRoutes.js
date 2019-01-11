var friends = require("../data/friends");

module.exports = function(app){
    app.post("/api/friends", function(req,res){
        //find friend
        let name = req.body.name;
        let img = req.body.img;
        let answers = req.body.answers;
        
        let friend = friends.findFriendScore(answers);
        friends.AddFriend(name, img, answers);
        res.json(friend);
    });

    app.get("/api/questions",function(req,res){
        //return question
        res.json(friends.questions);
    });

}