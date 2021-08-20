const myNotes = ['Note 1', 'Note 2', 'Note 3']

// indexOf
// Returns index if found and -1 if not found
console.log(myNotes.indexOf('Note 1'));


const oldNotes = [{}, {
  title: 'My next trip',
  body: 'I woud like to go to Spain'
}, {
  title: 'Habits to work on',
  body: 'Exercise'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

// This returns -1 because one empty object does not equal another
console.log(oldNotes.indexOf({}));
console.log({} === {});

// What makes two objects equal is if they are the exact same object in memory
let someObject = {}
let otherObject = someObject
console.log(someObject === otherObject) // => true


const notes = [{
  title: 'My next trip',
  body: 'I woud like to go to Spain'
}, {
  title: 'Habits to work on',
  body: 'Exercise'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

// Can use findIndex
// We seem to need a function to make it work
// You need to return in the callback function then index is found
console.log(notes.findIndex((note) => {
  return note.body === 'Get a new seat';
 }));

// findIndex takes an optional index argument
// findIndex returns true or false (kinda)
const findNote = (notes, noteTitle) => {
  const index = notes.findIndex((note) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  })
  return notes[index];
}

const note = findNote(notes, 'Office modification')
console.log(note)

// Can use find to get the object directly not the index
// This can throw an error if some objecst in the array do not have the title property
const myFind = (notes, noteTitle) => {
  return notes.find((note) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  })
}

console.log(myFind(notes, 'my next trip'));
console.log(myFind(notes, 'my next trip blah blah')); // => undefined
