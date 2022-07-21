// return at random rock, paper, or scissors
function getComputerChoice() {
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];
  return choices[Math.floor(Math.random() * choices.length)];
}

let choice = prompt('Please enter either rock, paper, or scissors.');

function playRound(playerSelection, computerSelection) {
  //return 'You Lose! Paper beats Rock'
}

function game(playRound) {
  for (let i = 0; i < 5; i++) {
    const playerSelection = choice.toUpperCase();
    const computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
      console.log('You Lose! Paper beats Rock');
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
      console.log('You Win! Rock beats Scissors');
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
      console.log('You Win! Paper beats Rock');
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
      console.log('You lose! Scissors beats Paper');
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
      console.log('You lose! Rock beats Scissors');
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
      console.log('You win! Scissors beats Paper');
    } else if (playerSelection === computerSelection) {
      console.log('Tie!');
    } else {
      console.log('You have entered an invalid choice.');
    }
  }
};

game(playRound);