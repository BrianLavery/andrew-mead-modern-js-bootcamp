// 1. Undefined for a variable
let name;

// This will print out undefined
console.log(name);

// Undefined is useful as can check if something never defined
if (name === undefined) {
  console.log("please provide a name");
}


// 2. Undefined for a FUNCTION

let square = function (num) {
  console.log(num);
}

// Will print out undefined
square();

// Also prints out undefined
let result = square();
console.log(result);


// We can set a variable to null when we want to assign emptiness
let age = 27;
console.log(age);

// We could assign undefined but don't want to use it as undefined should be reserved for when not yet assigned
age = null;
console.log(age);
