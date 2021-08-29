const gameContainer = document.querySelector('#game-container');
const status = document.querySelector('#status');

// Function for game updates
const gameUpdate = (game) => {
  gameContainer.textContent = '';
  
  const summary = document.createElement('p')
  summary.textContent = game.puzzle;
  gameContainer.appendChild(summary);

  // const remainingGuesses = document.createElement('p');
  // remainingGuesses.textContent = `You have ${game.remainingGuesses} remaining guesses`;
  // gameContainer.appendChild(remainingGuesses)
}

const statusUpdate = (game) => {
  status.textContent = '';

  const statusMsg = document.createElement('h3');
  statusMsg.textContent = game.statusMessage;
  status.appendChild(statusMsg);
}

// Start new game and print to screen
game = new Hangman('new jersey', 2);
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

// Making a HTTP request - we can use this function for more than XML (it's a legacy name)
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
  // We check for when we have the final response from the server. 4 corresponds to this (see documentation on MDN)
  if (e.target.readyState === 4) {
    const data = JSON.parse(e.target.responseText)
    console.log(data['puzzle'])
    console.log(data.puzzle)
  }
})

// Open set up URL and HTTP method
request.open('GET', 'http://puzzle.mead.io/puzzle')
// Send actually sends the request to the server
request.send()