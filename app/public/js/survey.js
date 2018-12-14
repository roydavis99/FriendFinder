
// need to create a question builder

// call API for questions
$(document).ready(function(){

  function CreateQuestion(interval, question) {
    //let quest = $("<div>").append($("<h3>").text(`Question ${interval}`));

    $("#questions").append("<div> <h3>Question</h3></div>");
  }

  CreateQuestion(2, "I am here");
});