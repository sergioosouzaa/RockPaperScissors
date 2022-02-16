//random choosses rock paper or scissors, return a string
computerPlay = function (){
    let computerChoice;
    let randomNum = Math.round(Math.random()*2);
    if (randomNum == 0) {
        computerChoice = "rock";
    } else if (randomNum == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
};

//check if the player inputed a valid word
function checkValidSelection (playerSelection) {
    let checkResult;
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors"){
        checkResult = true;
    } else {
        checkResult = false;
    }
    return checkResult;
}

//create a selection of the div, to show round result
const roundResult = document.querySelector('.roundResult');

//check if is a tie, win or lose. print the result with console.log, return a number correponding with the result
function compareChoices (playerSelection, computerSelection) {
    let compareResult;
    let result;
    if (playerSelection === computerSelection) {
        compareResult = `Round Result: It's a tie! You've both selected ${playerSelection}!`
        result = 0;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        compareResult = `Round Result: You won! ${playerSelection} beats ${computerSelection}!`
        result = 1;
    } else {
        compareResult = `Round Result: You lost! ${computerSelection} beats ${playerSelection}!`
        result = -1;
    }
    roundResult.textContent = compareResult;
    return result;
}

//run a round of tthe game
function playRound(playerSelection, computerSelection) {
    let roundResult;
    playerSelection = playerSelection.toLowerCase();
    if(checkValidSelection(playerSelection)) {
        roundResult = compareChoices (playerSelection, computerSelection);
    } else {
        roundResult = -1;
        console.log("Invalid entry, please inser a valid option");
    }
    return roundResult;
}

const gameResult = document.querySelector('.gameResult');
let wins = 0;
let tie = 0;
let looses = 0;
let points = 0;

// run 5 rounds of the game, record the result. If the user input is invalid run the game again
function game (matchResult) {

  
    if (matchResult == 0){
        tie++;
    } else if (matchResult == 1) {
        wins++;
        points++;
    } else if (matchResult == -1) {
        looses++;
    }

    if(points === 5)
    {
        gameResult.textContent = `Match results: ${wins} wins. ${tie} ties. ${looses} loses.`;
        roundResult.textContent ='';
    } else {
        gameResult.textContent = `${wins} wins. ${tie} ties. ${looses} loses.  ${points} points.`;
    }
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', function () {
    game(playRound("rock", computerPlay()));
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function () {
    game(playRound("paper", computerPlay()));
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function () {
    game(playRound("scissors", computerPlay()));
});


// const rock = document.querySelector('#rock');
// rock.addEventListener('click', function () {
//     playRound("rock", computerPlay());
// });

// const paper = document.querySelector('#paper');
// paper.addEventListener('click', function () {
//     playRound("paper", computerPlay());
// });

// const scissors = document.querySelector('#scissors');
// scissors.addEventListener('click', function () {
//     playRound("scissors", computerPlay());
// });


