// This is a constructor function
// It's not required that you need a P vs. a p
// You don't need to define classes
const person = function (firstName) {
  this.firstName = firstName;  
  console.log(this);
}

const him = new person('Andrew')
console.log(him)

// Classes are still better though
// Capitalisation by convention
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

// This is all we need to do to create an instance
// New operator generates a new emtpy object, then gives it access
const andrew = new Person('A', 'Mead', 27);

console.log(andrew)
console.log(andrew.age)
andrew.firstName = 'Andrew'
console.log(andrew)

const clancy = new Person('Clancy', 'Summers', 51);
console.log(clancy);  