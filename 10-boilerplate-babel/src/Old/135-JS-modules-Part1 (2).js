// Webpack starts with this file (entry)
// If index does not require any other files, then webpack only executes it

// Path here can be a relative path
import { add, myName } from './utilities'
import { scream } from './scream'


console.log('index.js')

// Can't just access add function from utilities file
console.log(add(32, 1)) // => This causes an error unless we export the function

console.log(myName)


console.log(scream('hello'))
console.log(scream(myName))