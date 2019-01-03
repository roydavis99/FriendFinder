
// need to create a question builder

// call API for questions
$(document).ready(function(){

  function createRadio(message, id, value, size){
    const radio = $(`<div class='col-sm-${size}'>`);
    const label = $("<label class='radio'>").append($(`<input type='radio' name='optradio${id}' value='${value}' required>`));
    label.append(` ${message}`);
    radio.append(label);

    return radio;

  }

  function CreateQuestion(interval, question) {
    const quest = $("<div class='my-2'>").append($("<h3>").text(`Question ${interval}`));
    quest.append($("<h4>").text(question));

    const row = $("<div class='row'>");
    row.append(createRadio("1 strongly Disagree", interval, 1, 3));
    for(let i = 2; i <5; i++){
      row.append(createRadio(`${i}`, interval, i, 2));
    }
    row.append(createRadio("5 strongly Agree", interval, 5, 3));
    quest.append(row);
    quest.append($("<hr>"));

    
    $("#questions").append(quest);
  }

  $.get("/api/questions", (data) =>{
    data.forEach((question, i) => {
      
      CreateQuestion(i+1, question);
    });
  });

/*   $.post("./api/friends", userData, function (data) {
    // Grab the result from the AJAX post so that the best match's name and photo are displayed.
    $("#match-name").text(data.name);
    $("#match-img").attr("src", data.photo);

    // Show the modal with the best match
    $("#results-modal").modal("toggle");

}); */

});