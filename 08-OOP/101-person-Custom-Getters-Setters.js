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

  // Can set a customer setter for full name
  set fullName(fullName) {
    const names = fullName.split(" ")
    this.firstName = names[0];
    this.lastName = names[1]
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

// Subclass for person
class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }

  getBio() {
    return `${this.fullName} is a ${this.position}`
  }

  getYearsLeft() {
    return 65 - this.age
  }
}

// CHALLENGE: Student class
class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
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

me = new Employee('me', 'Grebsalaisse', 25, 'Teacher', ['shisha'])
me.fullName = 'Clancey Turner'
console.log(me.fullName);
console.log(me.getBio());