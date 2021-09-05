// Can name our default function by any name - we're grabbing by default
import otherSquare, { add, myName } from './utilities'
import notScream from './scream'

console.log('index.js')
console.log(add(32, 1))
console.log(notScream(myName))
console.log(otherSquare(10))

// Guiding rules
// If a file has one major export, e.g. a class then could use default
// But there is no real rule