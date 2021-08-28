// TYPE COERCION
// 3 VALUES CAN CONVERT TO: String, Number, Boolean
// Boolean is ok with truthy / falsy. Others not


// The number is coerced into a string in this example
console.log('5' + 5); // '55'

// The '5' is now converted to a number
console.log('5' - 5); // 0

// Double equal sign checks for equality but does not take type into account
console.log('5' == 5); // true

// typeof operator
console.log(typeof(123));
console.log(typeof('5' + 5)); // string
console.log(typeof('5' - 5)); // number

console.log();

let value = true + 12 // 13
let type = typeof value // number
console.log(type)
console.log(value)

value = false + 12 // 12
type = typeof value // number
console.log(type)
console.log(value)