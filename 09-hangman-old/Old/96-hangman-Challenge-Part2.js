class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.guessedLetters = [];
    this.remainingGuesses = remainingGuesses;
  }
}

Hangman.prototype.getPuzzle = function () {
  const puzzleLetters = this.word.map((letter) => {
    return (letter === ' ' || this.guessedLetters.includes(letter)) ? letter : '*'
    // return letter === ' ' ? ' ' : (this.guessedLetters.includes(letter) ? letter : '*')
  })
  return puzzleLetters.join('');
}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess)
  const isIncorrect = !this.word.includes(guess)
  
  if (isUnique) {
    this.guessedLetters.push(guess);
  }

  if (isUnique && isIncorrect) {
    this.remainingGuesses -= 1;
  } 
}

game1 = new Hangman('Cat', 2);
// Guess c, t, z
game1.makeGuess('c')
game1.makeGuess('t')
game1.makeGuess('z')
console.log(game1.getPuzzle()); // c*t
// Print remaining guesses - should be 1
console.log(game1.remainingGuesses);

game2 = new Hangman('New Jersey', 4);
// Guess w
game2.makeGuess('w')
console.log(game2.getPuzzle()); // **w ******

game3 = new Hangman('Cat', 2)
console.log(game3.getPuzzle());
console.log(`You have ${game3.remainingGuesses} remaining guesses`)

// Keypress only works for keys that give a character
window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode);
  game3.makeGuess(guess);
  console.log(game3.getPuzzle());
  console.log(`You have ${game3.remainingGuesses} remaining guesses`)
})