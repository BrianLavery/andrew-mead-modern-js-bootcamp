// Callback function is a function passed to another function
const notes = ['Note 1', 'Note 2', 'Note 3']

notes.forEach(function () {
  console.log("testing 123");
})

// We get index by default when we call it
notes.forEach(function (item, index) {
  console.log(item);
  console.log(index);
})

// Doing with ES6 formula methods
notes.forEach((item, index) => {
  console.log(`This is the item: ${item}`)
  console.log(`This is the index: ${index}`)
})
