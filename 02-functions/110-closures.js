// Basic example of a closure
const firstFunction = () => {
  const message = 'This is my first message'
  const printMessage = () => {
    console.log(message)
  }
  printMessage()
}

firstFunction()

// Clearer example of closure
const myFunction = () => {
  const message = 'This is my function message'
  // We don't call this function until assigned to global variable
  const printMessage = () => {
    console.log(message)
  }
  return printMessage
}

const myPrintMessage = myFunction()
// Function below still has access to the local message variable from the myFunction definition
myPrintMessage()

// It is because of closure that a callback funciton inside a big function can fire later and
//  still access the variables defined in the function scope

// We can use closure to create private variables
// Can only access the variable via specific methods
const createCounter = () => {
  let count = 0

  return {
    increment() {
      count++
    },
    decrement() {
      count--
    },
    get() {
      return count
    }
  }
}

// We can only access the count variable via these methods, e.g. only up or down by 1 at a time
const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// This below creates a new variable on the object
counter.count = 88
console.log(counter.count) // returns 88 - the new variable
console.log(counter.get()) // still returns -1 - the original variable

console.log()

// ADDER EXAMPLE
const createAdder = (a) => {
  return (b) => {
    return a + b
  }
}

// This generates a function where a is set to 10
// So we can call that new function again with any number and it returns the number + 10
const add10 = createAdder(10) 
console.log(add10(-2))
console.log(add10(21))

// These are based on closure
// They are also based on currying: process of transforming single function with a lot of arguments
// To a single function with a subset of those arguments
const add100 = createAdder(100)
console.log(add100(-81))

// Uncurried function would be
const add = (a, b) => a + b

console.log()

// TIPPER CHALLENGE
const createTipper = (baseTip) => {
  return (amount) => {
    return amount * baseTip
  }
}

const tip10 = createTipper(0.1);
const tip15 = createTipper(0.15);
const tip20 = createTipper(0.2);

console.log(tip20(100));