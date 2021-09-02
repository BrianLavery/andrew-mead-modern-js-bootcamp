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

// getPuzzle((error, puzzle) => {
//   if (error) {
//     console.log(`Error: ${error}`)
//   } else {
//     console.log(puzzle)
//   }
// });

const puzzle = getPuzzleSync()
console.log(puzzle)

// Aim is to have getPuzzle execute at same time as this console.log statement
// This code line below won't execute until the puzzle code has totally completed - creates dependencies and delays
console.log('Do something else')

// Sometimes people refer to Syncrhonous code as BLOCKING and Asyncrhonous is NON-BLOCKING