// Instance --> Person.prototype --> Object.prototype --> null
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

// Subclass for person
class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }

  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}`
  }

  getYearsLeft() {
    return 65 - this.age
  }
}

// CHALLENGE: Student class
class Student extends Person {
  constructor(firstName, lastName, age, likes, grade) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }

  getBio() {
    const status = this.grade >= 70? 'passing' : 'failing'
    return `${this.firstName} is ${status} the class`
  }

  updateGrade(amount) {
    this.grade += amount;
  }
}

mannie = new Student('Mannie', 'Grebsalaisse', 25, ['shisha'], 75)
console.log(mannie.getBio());
mannie.updateGrade(-10);
console.log(mannie.getBio());