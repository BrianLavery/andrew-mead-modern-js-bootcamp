const puzzleEl = document.querySelector('#puzzle');
const statusEl = document.querySelector('#status');
const resetButton = document.querySelector('#reset')
let game

const render = (game) => {
  puzzleEl.textContent = game.puzzle
  statusEl.textContent = game.statusMessage;
}

const startGame = async () => {
  let puzzle
  try {
    puzzle = await getPuzzle(2)
  } catch (error) {
    puzzle = 'Some temporary text for you to guess'
  }
  game = new Hangman(puzzle, 5)
  render(game)
}

window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game.makeGuess(guess);
  render(game)
})

// We call start game when we click the button - no () for function as not called immediately
resetButton.addEventListener('click', startGame)

// Start the game
startGame()


// getPuzzle(2).then((puzzle) => {
//   console.log(`Puzzle: ${puzzle}`)
// }).catch((error) => {
//   console.log(error)
// })

getCurrentCountry().then((countryName) => {
  console.log(countryName)
}).catch((error) => {
  console.log(error)
})

getLocation().then((location) => {
  return getCountry(location.country)
}).then((countryName) => {
  console.log(`Country: ${countryName}`)
}).catch((error) => {
  console.log(error)
})