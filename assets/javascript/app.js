////////////////////////////////////////////////////////
//start game btn
//hiding main game
$(".main-game").css("display", "none");
$(".end-game").css("display", "none");
//start btn onclick
$(".start-button").on("click", function() {
  console.log("start btn clicked")
//   var timeLeft = 90;
// var elem = document.getElementById("some_div");
// var timerId = setInterval(countdown, 1000);
  countdown();
  //displaying main game
  $(".main-game").css("display", "block");
  //hiding start button and background
  $(".start-button").css("display", "none");
  $(".start-game").css("display", "none");
});

$(".submitBtn").on("click", function(event) {
  event.preventDefault();
  $(".main-game").css("display", "none");
  $(".end-game").css("display", "block");
});

//end-game onclick
$(".end-button").on("click", function() {
//   //displaying main game
//   //hiding start button and background
  $(".end-game").css("display", "none");
  $(".start-game").css("display", "block");
  $(".start-button").css("display", "block");


});
// ".end-button".on("click", function() {
//   console.log(correct);
// });

//end game onlick

//question variables
function check() {
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
  if (question10 == "yes") {
    correct++;
  }
  //na
  // var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
  // var messages = [
  //   "Great job!",
  //   "That's just okay",
  //   "You really need to do better"
  // ];
  //fix
  var score;

  if (correct == 0) {
    score = 2;
  }

  if (correct > 0 && correct < 3) {
    score = 1;
  }

  if (correct == 3) {
    score = 0;
  }
  //na/fix
  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[score];
  document.getElementById("number_correct").innerHTML =
    "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[score];
  // returning user score
  // document.getElementById("message").innerHTML = messages[correct];
}
//90 sec countdown
 var timeLeft = 90;
 var elem = document.getElementById("some_div");
 var timerId = setInterval(countdown, 1000);

function countdown() {
//var timerId = setInterval(countdown, 1000);

  if (timeLeft == -1) {
    clearTimeout(timerId);
    timesUp();
  } else {
    elem.innerHTML = timeLeft + " seconds remaining";

    timeLeft--;
  }
}

function timesUp() {
  // alert("Times Up");
}


//timer function
//restart funtion btn
//fix score

//end game function
//if timeleft == -1

//start game function...starts on start game btn
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////////////test///////////////////////////////
///////////////////////////////////////////////////
// var right;
// var wrong;
// var test;
// var score = 0;
// var questions = [];

// console.log("gyhjh");
/////////////////////////////////////////////////////////////
// var questions = [
//   {
//     prompt: "What color are apples?\n(a) Red/Green\n (b) Purple\n(c) Orange",
//     answer: "a"
//   },
//   {
//     prompt: "What color are Bananas?\n(a) Teal\n (b) Magenta\n(c) Yellow",
//     answer: "c"
//   },
//   {
//     prompt: "What color are strawberries?\n(a) Yellow\n (b) Red\n(c) Blue",
//     answer: "a"
//   }
// ];
// var score = 0;

// for (var i = 0; i < questions.length; i++) {
//   var response = window.prompt(questions[i].prompt);
//   if (response == questions[i].answer) {
//     score++;
//     alert("Correct!");
//   } else {
//     alert("WRONG!");
//   }
// }
// alert("you got " + score + "/" + questions.length);
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//start game btn
// $(".main-game").css("display", "none");
// $(".start-button").on("click", function() {
//   $(".main-game").css("display", "block");
//   $(".start-button").css("display", "none");
// });

// //question variables
// function check() {
//   var question1 = document.quiz.question1.value;
//   var question2 = document.quiz.question2.value;
//   var question3 = document.quiz.question3.value;
//   var question4 = document.quiz.question4.value;
//   var question5 = document.quiz.question5.value;
//   var question6 = document.quiz.question6.value;
//   var question7 = document.quiz.question7.value;
//   var question8 = document.quiz.question8.value;
//   var question9 = document.quiz.question9.value;
//   var question10 = document.quiz.question10.value;
//   var correct = 0;
//   //logic for each question
//   if (question1 == "Providence") {
//     correct++;
//   }
//   if (question2 == "Hartford") {
//     correct++;
//   }
//   if (question3 == "Albany") {
//     correct++;
//   }
//   if (question4 == "Albany") {
//     correct++;
//   }
//   if (question5 == "Albany") {
//     correct++;
//   }
//   if (question6 == "Albany") {
//     correct++;
//   }
//   if (question7 == "Albany") {
//     correct++;
//   }
//   if (question8 == "Albany") {
//     correct++;
//   }
//   if (question9 == "Albany") {
//     correct++;
//   }
//   if (question10 == "Albany") {
//     correct++;
//   }
//   //na
//   var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
//   var messages = [
//     "Great job!",
//     "That's just okay",
//     "You really need to do better"
//   ];
//   //fix
//   var score;

//   if (correct == 0) {
//     score = 2;
//   }

//   if (correct > 0 && correct < 3) {
//     score = 1;
//   }

//   if (correct == 3) {
//     score = 0;
//   }
//   //na/fix
//   document.getElementById("after_submit").style.visibility = "visible";

//   document.getElementById("message").innerHTML = messages[score];
//   document.getElementById("number_correct").innerHTML =
//     "You got " + correct + " correct.";
//   document.getElementById("picture").src = pictures[score];
// }

// var timeLeft = 60;
// var elem = document.getElementById("some_div");
// var timerId = setInterval(countdown, 1000);

// function countdown() {
//   if (timeLeft == -1) {
//     clearTimeout(timerId);
//     timesUp();
//   } else {
//     elem.innerHTML = timeLeft + " seconds remaining";
//     console.log(timeLeft)
//     timeLeft--;
//   }
// }

// function timesUp() {
//   alert("Times Up");
// }
// countdown();
// //timer function
// //restart funtion btn
// //fix score
// //end game function
// //hide at start
