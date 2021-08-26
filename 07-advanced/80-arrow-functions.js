const square = (num) => {
  return num ** 2;
  // return num * num
}

console.log(square(5));

// Shorthand syntax for arrow functions
// We don't have the {} and don't need explicit return (it would cause an error)
const squareLong = (num) => num ** 2;
console.log(squareLong(7));

const people = [{
  name: 'Andrew',
  age: 27
}, {
  name: 'Vikram',
  age: 31
}, {
  name: 'Jess',
  age: 22
}]

// Set up function to filter for those under 30
const under30 = people.filter((person) => {
  return person.age < 30;
})

console.log(under30);

// Arrow function for it
// Brackets on the parameter are optional
const under30Long = people.filter(person => person.age < 30);
console.log(under30Long);

// Challenge - find the person with age 22. Print their name
const find22 = people.filter(person => person.age === 22); // I did this. Returns array
const person = people.find(person => person.age === 22); // Andrew did this
console.log(find22);
console.log(person);