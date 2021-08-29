// Classes are syntactical sugar in JS
class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  // We can't use the traditional function definition in the class
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;
  
    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`
    })
  
    return bio;
  }

  setName(fullName) {
    const names = fullName.split(" ")
    this.firstName = names[0];
    this.lastName = names[1]
  }

  // Don't need comment in here between properties/ functions
  sayHello() {
    console.log('Hello')
  }
}


const me = new Person('Andrew', 'Mead', 27, ['teaching', 'biking']);
me.setName("Alexander Great")
console.log(me.getBio())

const person2 = new Person('Clancy', 'Summers', 51);
console.log(person2.getBio()); 