class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word;
    this.remainingGuesses = remainingGuesses;
  }
}

game1 = new Hangman('band', 2);
game2 = new Hangman('diplodocus', 4);

console.log(game1);
console.log(game2);