const gameContainer = document.querySelector('#game-container');
const status = document.querySelector('#status');

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

game = new Hangman('new jersey', 2);
gameUpdate(game);
statusUpdate(game);

window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game.makeGuess(guess);
  gameUpdate(game);
  statusUpdate(game);
})

getPuzzle(2, (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
});

let countryCode = 'MX'

getCountry(countryCode, (error, country) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(`Country name: ${country}`)
  }
})