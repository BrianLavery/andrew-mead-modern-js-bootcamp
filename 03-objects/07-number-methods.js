let num = 3.141592654;

// Customise how many decimal points we have
console.log(num.toFixed(2));
console.log(num.toFixed(4));

// Math modules
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

// Random
let randomNum = Math.random();
console.log(randomNum);

// Random integer between two numbers (inclusive)
let min = 10
let max = 20
randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum);