
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

function checkValidSelection (playerSelection) {
    let checkResult;
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors"){
        checkResult = true;
    } else {
        checkResult = false;
    }
    return checkResult;
}

function compareChoices (playerSelection, computerSelection) {
    let compareResult;
    let result;
    if (playerSelection === computerSelection) {
        compareResult = `It's a tie! You've both selected ${playerSelection}!`
        result = 0;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        compareResult = `You won! ${playerSelection} beats ${computerSelection}!`
        result = 1;
    } else {
        compareResult = `You lost! ${computerSelection} beats ${playerSelection}!`
        result = 2;
    }

    console.log(compareResult);
    return result;
}

function playRound(playerSelection, computerSelection) {
    let roundResult;
    playerSelection = playerSelection.toLowerCase();
    if(checkValidSelection(playerSelection)) {
        roundResult = compareChoices (playerSelection, computerSelection);
    } else {
        roundResult = "Invalid entry, please inser a valid option";
    }
    return roundResult;
}

function game () {
    let playerSelection;
    let wins = 0;
    let tie = 0;
    let looses = 0;
    let computerSelection;
    let matchResult;

    for(let i = 0; i < 5; i++) {
        playerSelection = window.prompt();
        computerSelection = computerPlay();
        matchResult = playRound(playerSelection, computerSelection);
        if (matchResult == 0){
            tie++;
        } else if (matchResult == 1) {
            wins++;
        } else {
            looses++;
        }
    }
    console.log(`${wins} wins. ${tie} ties. ${looses} loses.`)

}

game();