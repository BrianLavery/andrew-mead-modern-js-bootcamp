const getTip = (amount) => amount * 0.25

let result = getTip(true); // 0.25
console.log(result)

const checkTip = (amount) => {
  if (typeof amount === 'number') {
    return amount * 0.25;
  } else {
    // Use this to return an error
    // Can use a string
    // throw 'Argument must be a number'
    // Can also use an error - gives more info
    throw Error('Argument must be a number')
  }
}

// result = checkTip(true);
// console.log(result)

// SOMETIMES AN ERROR MEANS DON'T CUT OUT BUT CAN RECOVER
// TRY-CATCH

// We try to run code - if doesn't work we run the catch
try {
  result = checkTip(true);
  console.log(result);
} catch (e) {
  console.log('catch block is running');
}

// In this case the try block runs
try {
  result = checkTip(10);
  console.log(result);
} catch (e) {
  console.log('catch block is running');
}