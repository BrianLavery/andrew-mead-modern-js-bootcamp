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

game1 = new Hangman('band', 2);
game2 = new Hangman('new jersey', 4);

console.log(game1.getPuzzle());
console.log(game2.getPuzzle());