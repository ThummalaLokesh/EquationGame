var headlineEle = document.getElementById('headline');
var startButtonEle = document.getElementById('startButton');
var subButtonEle = document.getElementById('subButton');
var resetButton = document.getElementById('resetButton');
var skipButton = document.getElementById('skipButton');
var socreEle = document.getElementById('score');
var questionEle = document.getElementById('question');
var input = document.getElementById('userInput');
var socreEle = document.getElementById('score');
let message = document.getElementById('scoreMessage');

var num1;
var num2;
var equation;
let sign = ["+","-","/","*"];
var correctAns;
score = 0;

//get a random equation
function randomEquation(newSign){
    equation = `${num1} ${newSign} ${num2}`;
    return equation;
}

//get a random number
function randomNumber(maxNumber) {
  return Math.floor(Math.random() * Math.floor(maxNumber));
}

function getCorrectAns(newSign){
    switch (newSign) {
      case "+":
        correctAns = num1 + num2;
        return correctAns;
        break;

      case "-":
        correctAns = num1 - num2;
        return correctAns;

        break;

      case "/":
        correctAns = num1 / num2;
        return correctAns;

        break;
      case "*":
        correctAns = num1 * num2;
        return correctAns;

        break;
      default:
        correctAns = null;
    }
    return correctAns;
}

function evaluateAns(){
  if(correctAns == Number(input.value)){
    return true;
  }else {
    return false;
  }
}

startButtonEle.onclick = function(){
  //assin ranumber value to num1 num2 and sign
  var newSign = sign[randomNumber(4)];
  num1 = randomNumber(10);
  num2 = randomNumber(10);

  //get the correct answer
  getCorrectAns(newSign);

 //change the headline
  headlineEle.innerHTML = "Please answer the following question";

  //display the equation
  questionEle.innerHTML = `${randomEquation(newSign)}`;
  startButtonEle.style.display = 'none';
  subButton.style.display = 'block';
  skipButton.style.display = 'block';
  resetButton.style.display = 'block';
  input.style.display = 'block';
  
}

//when the subButton is clic
subButton.onclick = function(){

  if(input.value == "" || input.value == null){
    doChange = false;
    message.textContent = "Please enter a answer";
  }else {
    doChange = true;
  }

if (doChange == true) {

  if (evaluateAns() == true){
    score = score + 5;
    message.textContent = "Correct!";
  }else {
    score = score - 1;
    message.textContent = "Wrong!";
  }

    socreEle.textContent = score;

  //assin ranumber value to num1 num2 and sign
  var newSign = sign[randomNumber(4)];
  num1 = randomNumber(10);
  num2 = randomNumber(10);
  //get the correct answer
  getCorrectAns(newSign);

  //if the input is empty, will not change the equation

  questionEle.innerHTML = `${randomEquation(newSign)}`;


  input.value = "";

  localStorage.setItem("score", score);
  localStorage.setItem("equation", equation);
  localStorage.setItem("answer", correctAns);
}
}


skipButton.onclick = function(){
  var newSign = sign[randomNumber(4)];
  num1 = randomNumber(10);
  num2 = randomNumber(10);

  //get the correct answer
  getCorrectAns(newSign);
    questionEle.innerHTML = `${randomEquation(newSign)}`;
}

resetButton.onclick = function(){
  startButtonEle.style.display = 'block';
  subButton.style.display = 'none';
  skipButton.style.display = 'none';
  resetButton.style.display = 'none';
  input.style.display = 'none';
  headlineEle.innerHTML = "Are You Ready to Start? ";
  questionEle.innerHTML = "";
  scoreMessage.innerHTML = "";
  socreEle.textContent = 0;
  score = 0;

  localStorage.removeItem("score");
localStorage.removeItem("equation");
localStorage.removeItem("answer");

}
