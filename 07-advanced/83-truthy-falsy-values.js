const products = []
const product = products[0]

// Exact way
if (product !== undefined) {
  console.log("Product found");
} else {
  console.log('Product not found');
}

// Truthy-Falsy
// Truthy - values resolving to true in boolean context
// Falsy - values resolving to false in boolean context
// FALSY: false, 0, empty string, null, undefined, NaN

// Text strings are truthy
if ('String') {
  console.log("String found");
} else {
  console.log('String not found');
}

// Undefined is falsy
if (undefined) {
  console.log("undefined found");
} else {
  console.log('undefined not found');
}

// Zero is falsy
if (0) {
  console.log("zero found");
} else {
  console.log('zero not found');
}

// Empty strings is falsy
if ('') {
  console.log("empty string found");
} else {
  console.log('empty string not found');
}

if (product) {
  console.log("product - as undefined -  found");
} else {
  console.log('product - as undefined - not found');
}

if (products) {
  console.log("Empty array found");
} else {
  console.log('Empty array not found');
}

// NaN is when have a math operation that isn't valid, e.g. 1/0
console.log(1/0);