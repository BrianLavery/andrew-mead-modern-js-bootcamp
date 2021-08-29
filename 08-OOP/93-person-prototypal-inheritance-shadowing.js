// Prototypal inheritance in JS
class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
}

Person.prototype.getBio = function() {
  let bio = `${this.firstName} is ${this.age}.`;

  this.likes.forEach((like) => {
    bio += ` ${this.firstName} likes ${like}.`
  })

  return bio;
}

Person.prototype.setName = function (fullName) {
  const names = fullName.split(" ")
  this.firstName = names[0];
  this.lastName = names[1]
}

const me = new Person('Andrew', 'Mead', 27, ['teaching', 'biking']);

// This function set on the instance will take precedence over the prototype version
me.getBio = function () {
  return 'This is fake';
}

me.setName("Alexander Great")
console.log(me.getBio())


const person2 = new Person('Clancy', 'Summers', 51);

Person.prototype.getBio = function() {
  return 'testing testing'
}

// We get the second method definition
// Any change to prototype flows through to every instance
// This differs from JAVA and C++
console.log(person2.getBio()); 
console.log(me.getBio());