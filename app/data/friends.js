var friends = {
  findFriendScore: function (scores) {
    let top = {name:"", score:100 }
    this.list.forEach(x => {
      let dif = 0;
      for (let i = 0; i < scores.length; i++) {
        dif += Math.abs(x.scores[i] - scores[i]);
      }
      if(dif < top.score){
        top.name = x.name;
        top.score = dif;
      }
    });
    return this.FindFriend(top.name);
  },
  FindFriend: function(name){
    return this.list.find(x => {x.name = name});
  },
  AddFriend: function (name, photo, scores) {
    this.list.push({ name, photo, scores });
  },
  questions: [
    "question 1",
    "question 2",
    "question 3",
    "question 4",
    "question 5",
    "question 6",
    "question 7",
    "question 8",
    "question 9",
    "question 10",

  ],
  list: [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  }]
}

module.exports = friends;