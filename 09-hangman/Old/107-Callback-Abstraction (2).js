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

// Use a callback function here when we have APIs given time delay
// Commonly pass in error action plus correct action
getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
});

// // Making a HTTP request - we can use this function for more than XML (it's a legacy name)


// // CHALLENGE - API call to rest countries API
// const countryRequest = new XMLHttpRequest()
// const countryCode = 'IE'

// countryRequest.addEventListener('readystatechange', (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText)
//     const country = data.find(ctry => ctry.alpha2Code === countryCode)
//     console.log(country.name)
//   } else if (e.target.readyState === 4) {
//     console.log('Unable to fetch data')
//   }
// })

// countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
// countryRequest.send()