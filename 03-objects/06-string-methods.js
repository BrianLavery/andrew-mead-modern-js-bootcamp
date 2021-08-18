let name = 'Brian Lavery'

// Length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes
let password = 'abc123password098';
console.log(password.includes('password'));

// Trim whitespaces
let nameSpace = '    Brian Lavery    '
console.log(nameSpace.trim());

// Create isValidPassword
// Return true if length > 8 and doesn't include word password

let isValidPassword = (password) => {
  return (password.length > 8 && !password.includes('password'));
}

console.log(isValidPassword('asdfg'));
console.log(isValidPassword('asdfg24350as34o'));
console.log(isValidPassword('asdfgpasswords34o'));
