
// need to create a question builder
// call API for questions
$(document).ready(function () {
  var questionCount = 0;

  function createRadio(message, id, value, size) {
    const radio = $(`<div id='optradio${id}' class='col-sm-${size}'>`);
    const label = $("<label class='radio'>").append($(`<input type='radio' name='optradio${id}' value='${value}' required>`));
    label.append(` ${message}`);
    radio.append(label);

    return radio;

  }

  function CreateQuestion(interval, question) {
    const quest = $("<div class='my-2 bg-lg'>").append($("<h3 class='mx-5'>").text(`Question ${interval}`));
    quest.append($("<h4 class='mx-5'>").text(question));

    const row = $("<div class='row container mx-5'>");
    row.append(createRadio("1 strongly Disagree", interval, 1, 3));
    for (let i = 2; i < 5; i++) {
      row.append(createRadio(`${i}`, interval, i, 2));
    }
    row.append(createRadio("5 strongly Agree", interval, 5, 3));
    quest.append(row);
    quest.append($("<hr>"));


    $("#questions").append(quest);
  }

  $.get("/api/questions", (data) => {


    data.forEach((question, i) => {
      questionCount++;
      CreateQuestion(i + 1, question);
    });
  });

  $('#modal-close').on("click", x =>{
    window.location.replace("/");
  })

  function CreateModel(data) {
    console.log(data);
    $("#friend-name").text(data.name)
    $("#friend-img").attr("src", data.photo);
    $("#myModal").modal();
  }

  function findCheckedValue(radios) {
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        return radios[i].value;
      }
    }
    return 0;
  };

  function GetFormInfo() {
    let form = {
      name: document.getElementById("name").value,
      img: document.getElementById("photo").value,
      answers: []
    };

    for (let i = 1; i <= questionCount; i++) {
      var radios = document.getElementsByName(`optradio${i}`);
      //console.log(findCheckedValue(radios));
      //console.log(radios);
      form.answers.push(findCheckedValue(radios));
    }

    return form; //JSON.stringify(form);
  }

  function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    console.log(GetFormInfo());

    $.post("/api/friends", GetFormInfo(), (data) => {
      CreateModel(data);
    });
    return false;
  }

  var form = document.getElementById('survey');
  if (form.attachEvent) {
    form.attachEvent("submit", processForm);
  } else {
    form.addEventListener("submit", processForm);
  }
});