let greetUser = function () {
  console.log('Welcome user!');
}

greetUser();

let square = function (num) {
  return num * num;
}

console.log(square(2));

let greetUser2 = () => {
  console.log('Welcome user! 2');
}

greetUser2();

let square2 = (num) => {
  return num * num
}

console.log(square2(3));

let square3 = num => {
  return num * num
}

console.log(square3(4));


// Challenge: F to C temp conversion

const convertFahrenheitToCelcius = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8;
}

console.log(convertFahrenheitToCelcius(212));
console.log(convertFahrenheitToCelcius(0));
