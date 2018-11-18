let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if(letter ==="r") return "Rock";
  if(letter ==="p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} besiegt ${convertToWord(computerChoice)}${smallCompWord} Du gewinnst.🔥`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);  //ES6
}

//Diese Funltion wurde auch selber gemacht in anderem Land 😆
function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(computerChoice)}${smallUserWord} verliert gegen ${convertToWord(userChoice)}${smallCompWord} Du verlierst... 🚩`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 300); //ES6
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `🔥Unentschieden.🔥`;
  userChoice_div.classList.add("grey-glow");
  setTimeout(() => userChoice_div.classList.remove("grey-glow"), 300); //ES6
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "ps":
    case "rp":
      lose(userChoice, computerChoice);
      break;
    case "ss":
    case "pp":
    case "rr":
      draw(userChoice, computerChoice);
      break;
  }
}
//Habe game restartet diese Funktion wurde in slowenien gemacht 😄
function restartGame() {
  userScore_span.innerHTML = 0;
  computerScore_span.innerHTML = 0;
}
  function main() {
    rock_div.addEventListener("click", () => game("r"));  //Das ist ES6 Style
    paper_div.addEventListener("click", () => game("p"));   //Das ist ES6 Style
    scissors_div.addEventListener("click", function() {   //Das ist oldschool style
      game("s");
    })
  }
  main();
