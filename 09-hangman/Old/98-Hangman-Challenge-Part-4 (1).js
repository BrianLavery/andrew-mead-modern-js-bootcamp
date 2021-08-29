const gameContainer = document.querySelector('#game-container');
const status = document.querySelector('#status');

// Function for game updates
const gameUpdate = (game) => {
  gameContainer.textContent = '';
  
  const summary = document.createElement('p')
  summary.textContent = game.getPuzzle();
  gameContainer.appendChild(summary)

  // const remainingGuesses = document.createElement('p');
  // remainingGuesses.textContent = `You have ${game.remainingGuesses} remaining guesses`;
  // gameContainer.appendChild(remainingGuesses)
}

const statusUpdate = (game) => {
  status.textContent = '';

  const statusMsg = document.createElement('h3');
  statusMsg.textContent = game.getStatusMessage();
  status.appendChild(statusMsg);
}

// Start new game and print to screen
game = new Hangman('Cat', 2);
gameUpdate(game);
statusUpdate(game);

// Keypress only works for keys that give a characterc
window.addEventListener('keypress', (e) => {
  // const guess = String.fromCharCode(e.charCode);
  const guess = e.key;
  game.makeGuess(guess);
  gameUpdate(game);
  statusUpdate(game);
})