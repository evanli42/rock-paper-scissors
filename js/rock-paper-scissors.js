// create div to wrap buttons
const div = document.createElement('div');
document.body.appendChild(div);

// create buttons for each option, give them names, and append to the div
const buttonRock = document.createElement('button');
buttonRock.textContent = 'Rock';
div.append(buttonRock);

const buttonPaper = document.createElement('button');
buttonPaper.textContent = 'Paper';
div.append(buttonPaper);

const buttonScissors = document.createElement('button');
buttonScissors.textContent = 'Scissors';
div.append(buttonScissors);

// create another div to display results + use DOM to display results
const divResults = document.createElement('div');
document.body.appendChild(divResults);
divResults.setAttribute('id', 'divResults')

// create a div to display player score
const playerScore = document.createElement('div');
document.body.appendChild(playerScore);
playerScore.setAttribute('id', 'playerScore');

// create a div to display computer score
const computerScore = document.createElement('div');
document.body.appendChild(computerScore);
computerScore.setAttribute('id', 'computerScore');

// create a div to store the winner text
const winner = document.createElement('div');
document.body.appendChild(winner);
winner.setAttribute('id', 'winner');

// create a button for refreshing page aka restart
// create a div for the restart button
const buttonDiv = document.createElement('div');
document.body.appendChild(buttonDiv);
//create the button and append to the div
const restartButton = document.createElement('button');
restartButton.textContent = 'Restart';
buttonDiv.append(restartButton);
// give the button the restart function which refreshes the page ; if restart had (), the function would be called without the click - constant refresh
restartButton.onclick = restart;
function restart(){
  window.location.reload();
};

// querySelectorAll buttons in the div container
const choice = div.querySelectorAll('button');

// create variables to store scores
let player = 0;
let computer = 0;

// loop through with forEach and add an eventlistener
choice.forEach((button) => {
  button.addEventListener('click', function () {
    // store player choice click with this.textContent
    const pChoice = this.textContent;
    // move getComputerChoice variables here
    const cChoices = ['Rock', 'Paper', 'Scissors'];
    const cChoice = cChoices[Math.floor(Math.random() * cChoices.length)];
    // call function
    playRound(pChoice, cChoice);
  }); 
});

// create a function comparing the player and computer choices
function playRound(pChoice, cChoice) {
  //select the element to name the results to 
  const result = document.getElementById('divResults');

  // select the element to display the winner
  const winner = document.getElementById('winner');  
  
  // *error stuck on: the scores used to be behind by 1 point (maybe) because I tried to use textContent of both variables before it even incremented a single value issue was the Node.textContent = ____ lines placed before if conditions

  // conditions for playing, displaying round result text, incrementing points of player and computer
  // stop the match when either the player or computer hits 5 points and restart the game using return

    if (player === 5 || computer === 5) {
      return;
    } else if (pChoice === 'Rock' && cChoice === 'Paper') {
      result.textContent = 'Round Result: You lost!';
      computer++;
    } else if (pChoice === 'Rock' && cChoice === 'Scissors') {
      result.textContent = 'Round Result: You win!';
      player++;
    } else if (pChoice  === 'Paper' && cChoice === 'Rock') {
      result.textContent = 'Round Result: You win!';
      player++;
    } else if (pChoice  === 'Paper' && cChoice === 'Scissors') {
      result.textContent = 'Round Result: You lose!';
      computer++;
    } else if (pChoice  === 'Scissors' && cChoice === 'Rock') {
      result.textContent = 'Round Result: You lose!';
      computer++;
    } else if (pChoice  === 'Scissors' && cChoice === 'Paper') {
      result.textContent = 'Round Result: You win!';
      player++;
    } else if (pChoice  === cChoice) {
      result.textContent = 'Round Result: It\'s a tie!';
    } 

  // show scores of both  // select the element to display scores 
  playerScore.textContent = `Player Score: ${player}`;
  computerScore.textContent = `Computer Score: ${computer}`;

  // declare the winner at 5 points
  if (player === 5) {
    winner.textContent = 'Player wins the match!';
  } else if (computer === 5) {
    winner.textContent = 'Computer wins the match!'
  } 
};
