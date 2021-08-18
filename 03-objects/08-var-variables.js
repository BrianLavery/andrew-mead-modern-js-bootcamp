var firstName = 'Andrew';
firstName = 'Mike';

// Can do this with var but not let or const
// Problem for huge code
var firstName = 'Jen'

// var is function scoped not blocked scope
// If we don't define a function then var is essentially global in scope
if (true) {
  var firstName = 'Jay'
}

console.log(firstName)

console.log();


// If do the same thing without var/ let/ const it works
const aName = ()  => {
  thisName = "Bob";
}

aName();
console.log(thisName); // Prints Bob
console.log(aName()); // Prints undefined

console.log();

// Declaring variables

let age1
console.log(age1); // Will be undefined

var age2
console.log(age2); // Will also be undefined

console.log();
// console.log(age3);
// let age3 // Causes an error

console.log(age4) // Results in undefined
var age4; // Declaration of variable goes to top of the code so available before it appears

console.log(age5) // Still results in undefined
var age5 = 10; // Declaration gets brought to top of page but number does not

// If we do it like this it works
age6 = 15;
console.log(age6);
var age6;


console.log();

// If create a function then var scope is limited and we get an error
const setName = ()  => {
  var newName = "Tim";
}

setName();
console.log(newName)

