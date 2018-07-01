////////////////////////////////////////////////////////
//start game btn
//hiding main game
var elem = document.getElementById("some_div");
var timeLeft = 90;
var timerid;
$(".main-game").css("display", "none");
$(".end-game").css("display", "none");
//start btn onclick
$(".start-button").on("click", function() {
   timerId = setInterval(countdown, 1000);
   $("#some_div").text("90 seconds remaining");
  // countdown();
  //displaying main game
  $(".main-game").css("display", "block");
  //hiding start button and background
  $(".start-button").css("display", "none");
  $(".start-game").css("display", "none");
});

$(".submitBtn").on("click", function(event) {
  //prevent defualt will return back to end game
  event.preventDefault();
  $(".main-game").css("display", "none");
  $(".end-game").css("display", "block");
  check();
});

//end-game onclick
$(".end-button").on("click", function() {
  //   //displaying main game
  //   //hiding start button and background
  clearInterval(timerId);
  timeLeft = 90;
  $(".end-game").css("display", "none");
  $(".start-game").css("display", "block");
  $(".start-button").css("display", "block");
});

//question variables
function check() {
  // var ques1 = $("input[name=question1]:checked").val()
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var correct = 0;
  //logic for each question
  if (question1 == "yes") {
    correct++;
  }
  if (question2 == "yes") {
    correct++;
  }
  if (question3 == "yes") {
    correct++;
  }
  if (question4 == "yes") {
    correct++;
  }
  if (question5 == "yes") {
    correct++;
  }
  if (question6 == "yes") {
    correct++;
  }
  if (question7 == "yes") {
    correct++;
  }
  if (question8 == "yes") {
    correct++;
  }
  if (question9 == "yes") {
    correct++;
  }
  if (question10 == "Backstreet Boys") {
    correct++;
  }
  document.getElementById("number_correct").innerHTML =
    "You got " + correct + " out of 10 correct";
  console.log("correct =" + correct);
}



function countdown() {
  if (timeLeft == -1) {
    clearInterval(timerId);
    $(".main-game").css("display", "none");
  $(".end-game").css("display", "block");
  check();
  } else {
    elem.innerHTML = timeLeft + " seconds remaining";

    timeLeft--;
  }
}

function timesUp() {
  // alert("Times Up");
  if (timeLeft == -1) {
  }
}

function reset() {
  correct = 0;
  timeLeft = 90;
}

//game end when timeLeft = -1
//hide main
//show end-game

//stop clock when game is over reset back to 90 secs