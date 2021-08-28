// We can access the arguments local variable inside a regular function

const add = function (a, b) {
  // console.log(arguments); // [Arguments] { '0': 11, '1': 22, '2': 33, '3': 44 }
  return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44));

// We cannot access these in an arrow function
const add_one_line = () => arguments[0] + arguments[1];

console.log(add_one_line(11, 22, 33, 44)); // This returns a node error

// Arrow functions don't bind their this value so bad candidates for methods (in a class?)
const car = {
  color: 'Red',
  getSummary: function() {
    return `The car is ${this.color}`;
  }
}

console.log(car.getSummary());

// Below is not a regular function but simpler syntax for setting up method
const bus = {
  color: 'blue',
  getSummary() {
    return `The bus is ${this.color}`;
  }
}

console.log(bus.getSummary());