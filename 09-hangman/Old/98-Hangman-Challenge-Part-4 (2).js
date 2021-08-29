class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.guessedLetters = [];
    this.remainingGuesses = remainingGuesses;
    this.status = "playing";
    this.currentWord = "*";
  }
}

Hangman.prototype.getPuzzle = function () {
  const puzzleLetters = this.word.map((letter) => {
    return (letter === ' ' || this.guessedLetters.includes(letter)) ? letter : '*'
    // return letter === ' ' ? ' ' : (this.guessedLetters.includes(letter) ? letter : '*')
  })
  this.currentWord = puzzleLetters.join('')
  return this.currentWord;
}

Hangman.prototype.calculateStatus = function () {  
  // Define some booleans to use in my conditional logic
  const guessesLeft = this.remainingGuesses > 0;
  // const wordComplete = !(this.currentWord.includes('*'));
  // EVERY APPROACH
  const wordComplete = this.word.every((letter) => {
    return this.guessedLetters.includes(letter);
  })

  let message

  if (wordComplete) {
    this.status = 'finished'
  } else if (!guessesLeft) {
    this.status = 'failed'
  } else {
    this.status = 'playing'
  }
}

Hangman.prototype.getStatusMessage = function () {
  if (this.status === 'playing') {
    return message = `Guesses left: ${this.remainingGuesses}`
  } else if (this.status === 'finished') {
    return message = 'Great work! You guessed the word.'
  } else if (this.status === 'failed') {
    return message = `Nice try! The word was "${this.word.join('')}"`
  }
}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess)
  const isIncorrect = !this.word.includes(guess)
  
  if (game.status !== 'playing') {
    return
  }

  if (isUnique) {
    this.guessedLetters.push(guess);
  }

  if (isUnique && isIncorrect) {
    this.remainingGuesses -= 1;
  } 

  this.calculateStatus();
}