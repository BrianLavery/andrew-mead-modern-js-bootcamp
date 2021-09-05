// Below example we don't need the new keyword
// JS does it behind the scenes
// This is literal syntax below
const product = {
  name: 'Influence'
}

// hasOwnProperty - can check if object has a property
// RESULT IS BOOLEAN

console.log(product.hasOwnProperty('name')); // true
console.log(product.hasOwnProperty('price')); // false

// Has own property below returns false even though it works on it
// Coming from a lower level class (Object.prototype)
// hasOwnProperty checks if property is on the instance (not in its ancestor chain)
console.log(product.hasOwnProperty('hasOwnProperty')); // false

// Can view prototype chain in brower
console.log(product)

// Can view in broswer by calling __proto__
// So would be "product.__proto__.__proto__" would give null
// product --> Object.prototype --> null

// We can override methods

Object.prototype.hasOwnProperty = () => 'This is the new function'

console.log(product.hasOwnProperty('name')); // 'This is the new function'
console.log(product.hasOwnProperty('price')); // 'This is the new function'

Object.prototype.someNewMethod = () => 'Some new method'
console.log(product.someNewMethod()); // 'Some new method'

// Can create a new Object without literal syntax
const product2 = new Object();

product2.name = 'Rest'
console.log(product2)
console.log(product2.hasOwnProperty('name')); // 'This is the new function'
console.log(product2.someNewMethod()); // 'Some new method'

// We can initialise another way
const product3 = new Object({
  name: 'The Art of War'
})
console.log(product3)
console.log(product3.hasOwnProperty('name')); // 'This is the new function'
console.log(product3.someNewMethod()); // 'Some new method'