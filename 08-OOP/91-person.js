// Prototypal inheritance in JS
class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
}

// Set up a method that impacts all instances
// Could do it on properties - but would be unusual to give all same data
Person.prototype.getBio = function() {
  let bio = `${this.firstName} is ${this.age}.`;

  // Arrow functions don't bind a this
  // So this in the loop refers to the parent
  // If we change to a regular function we get undefined
  this.likes.forEach((like) => {
    bio += ` ${this.firstName} likes ${like}.`
  })

  return bio;
}

Person.prototype.location = 'Thailand'

Person.prototype.setName = function (fullName) {
  const names = fullName.split(" ")
  this.firstName = names[0];
  this.lastName = names[1]
}

const andrew = new Person('Andrew', 'Mead', 27, ['teaching', 'biking']);
console.log(andrew.getBio());
console.log(andrew.location);
andrew.setName("Alexander Great")
console.log(andrew.getBio())


const clancy = new Person('Clancy', 'Summers', 51);
console.log(clancy.getBio());