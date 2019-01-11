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
    return this.list.find(x => {return x.name === name});
  },
  AddFriend: function (name, photo, scores) {
    this.list.push({ name, photo, scores });
  },
  questions: [
    "I like dogs",
    "The government is out to get me",
    "Walks through the park when birds are singing is annoying",
    "Highschool was the best time of our lives",
    "I would rather be outside then inside",
    "I like Big Bang Theory",
    "question 7",
    "question 8",
    "question 9",
    "question 10",

  ],
  list: [{
    "name": "Ahmed",
    "photo": "https://i.kym-cdn.com/entries/icons/facebook/000/011/127/original.jpg",
    "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  }]
}

module.exports = friends;