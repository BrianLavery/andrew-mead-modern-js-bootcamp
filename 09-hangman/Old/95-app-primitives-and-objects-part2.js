// Primitive value: string, number, boolean, bull, undefined

// Object: Object Instance --> Object.prototype --> null

// ARRAY
// Array: Array Instance --> Array.prototype --> Object.prototype --> null

const team = ['Luke', 'Maddison']
console.log(team) // In console can see inheritance tree

// Array properties
console.log(team.hasOwnProperty('length')) // True as part of the Array itself
console.log(team.hasOwnProperty('filter')) // False as function inherited

// More detailed syntax
const tm = new Array('Luke', 'Maddison')
console.log(tm);

// FUNCTION
// Function: Instance --> Function.prototype --> Object.prototype --> null
const getScore = () => 1
console.log(getScore); // Do this to see inheritance tree


// STRING
// STRING: Instance --> String.prototype --> Object.prototype --> null
const product = 'Computer'
console.log(product) // Can't look at it like an object in the browser console
console.log(product.split('')) // However this method stil works. Strings and other primitives have an object wrapper

const otherProduct = new String('Phone')
console.log(otherProduct) // This will now print out like an object. JS does coversion to object

// NUMBER
// NUMBER: Instance --> Number.prototype --> Object.prototype --> null

// BOOLEAN
// BOOLEAN: Instance --> Boolean.prototype --> Object.prototype --> null