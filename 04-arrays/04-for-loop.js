// Specify 3 things separated by semicolon
// 1 - initialiser
// 2 - condition
// 3 - expression

for (let count = 0; count <= 2; count++) {
  console.log(count);
}

// STEPS
// 0) Check initialiser once
// 1) Check does it meet the condition
// 2) Execute block
// 3) Iterate with expression
// => Back to step 1)



// FOR LOOP FOR ARRAYS

const notes = ['Note 1', 'Note 2', 'Note 3']

// Variables defined in for loop have local scope
for (let i = 0; i < notes.length; i++) {
  console.log(notes[i]);
}

// For loop allows more easily to reverse order
