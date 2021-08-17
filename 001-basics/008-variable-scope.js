// JavaScript uses Lexical/ Static Scope

// 2 types of scope
// Global Scope - define outside of code blocks (i.e. varOne)
// Local Scope - defined inside code block (i.e. varTwo)

// SCOPE HIERARCHY
// Global Scope (varOne)
  // Local Scope (varTwo)
    // Local Scope (varFour)
  // Local Scope (varThree)

// In a scope you can access defined in that scope or any parent/ ancestor scope


let varOne = 'varOne';

if (true) {
  console.log(varOne);
  let varTwo = 'varTwo';
  // We can access varTwo here
  console.log(varTwo);

  if (true) {
    let varFour = 'varFour';
  }
}


if (true) {
  let varThree = 'varThree';
}


// This line below cannot be executed as varTwo does not exist outside the function
console.log(varTwo);
