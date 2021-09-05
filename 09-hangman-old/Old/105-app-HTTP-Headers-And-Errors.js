const gameContainer = document.querySelector('#game-container');
const status = document.querySelector('#status');

// Function for game updates
const gameUpdate = (game) => {
  gameContainer.textContent = '';
  
  const summary = document.createElement('p')
  summary.textContent = game.puzzle;
  gameContainer.appendChild(summary);
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
  // Want to check we are complete (state 4) but also that successful (status === 200)
  // https://httpstatuses.com/ is a useful resource
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    console.log(data.puzzle)
  } else if (e.target.readyState === 4) {
    console.log('An error has taken place')
  }
})

// Open set up URL and HTTP method
request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
// Send actually sends the request to the server
request.send()