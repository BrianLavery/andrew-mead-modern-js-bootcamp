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


let countryCode = 'IE'

getCountry(countryCode).then((countryName) => {
  console.log(countryName)
}, (error) => {
  console.log(`Error: ${error}`)
})

// FETCH API
// FETCH returns a promise
// Promise only resolves if everything went well
fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
  if (response.status === 200) {
    // This returns a promise
    return response.json()
  } else {
    // This will cause the catch to get fired
    throw new Error('Unable to fetch the puzzle')
  }
}).then((data) => {
  console.log(`Fetch API: ${data.puzzle}`)
}).catch((error) => {
  console.log(error)
})