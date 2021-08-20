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

// Sort does not require a function but can take one
// Sort will try to do it alphabetically for simple arrays

// Convention in sort functions to call a and b then work out what comes first
// If a comes first we return -1, if b should come first it's 1; if both are identical in order then 0
const sortNotes = (notes) => {
  notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  })
}

console.log(notes);
sortNotes(notes);
console.log(notes);
