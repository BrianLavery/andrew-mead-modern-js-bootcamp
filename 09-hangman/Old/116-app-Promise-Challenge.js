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

getPuzzle(2).then((puzzle) => {
  console.log(`Fetch API - final: ${puzzle}`)
}).catch((error) => {
  console.log(error)
})

getLocation().then((location) => {
  return getCountry(location.country)
}).then((countryName) => {
  console.log(`Combined fetch: ${countryName}`)
}).catch((error) => {
  console.log(error)
})