// FUNCTIONS CREATE LOCAL SCOPE AND ARGUMENTS/ PARAMETERS ARE CONFINED TO THAT SCOPE

// GLOBAL SCOPE: convertFahrenheitToCelcius, tempOne, tempTwo
  // LOCAL SCOPE: fahrenheit, celsius
    // LOCAL SCOPE: isFreezing

const convertFahrenheitToCelcius = (fahrenheit) => {
  let celsius = (fahrenheit - 32) / 1.8;

  if (celsius <= 0) {
    let isFreezing = true;
  }

  return celsius;
}

let tempOne = console.log(convertFahrenheitToCelcius(212));
let tempTwo = console.log(convertFahrenheitToCelcius(0));

console.log(tempOne);
console.log(tempTwo);
