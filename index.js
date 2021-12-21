//NEOG Camp Point One 

console.log("Point One - Neog camp") 

var readlineSync = require("readline-sync");

var score = 0;


var questions = [{
  question: "Where does Chintan Ruparel Live? ",
  answer: "Mumbai"
}, 
{
  question: "what is my fav movie?  ",
  answer: "The wolf of wall street"
},
{
  question: "Where do I work? ",
  answer: "Emreach Solutions"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " Let's Start");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 

    console.log("YEP! That's right");
    score = score + 1;
    
  } else {
    console.log("NEH! That's Wrong ");
    score = score - 1;
   
  }

  console.log("Your Score : ", score);
  console.log("______________")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
function showScores() {
  console.log("Score :", score);}

welcome()
game()
showScores()

console.log("End of Quiz: ")