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

// Want to have a flexible search
// We use filter which takes a function as an argument

// Filter is a bit like select in ruby. Always returns an array
// Here we are just testing filter
const filteredNotes = notes.filter((note, index) => {
  const isTitleMatch = note.title.toLowerCase().includes('ne');
  const isBodyMatch = note.body.toLowerCase().includes('ne');
  return isTitleMatch || isBodyMatch;
})

console.log(filteredNotes);

// Here we are now passing in an argument to filter to make it more like a real world example - it returns the filtered array of objects
const findNotes = (notes, query) => {
  return notes.filter((note, index) => {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  })
}

console.log(findNotes(notes, "office"));
console.log(findNotes(notes, "spain"));

// Challenge
// Print out To Dos that are still incomplete
todos = [{
  text: 'Order cat food',
  completed: true
}, {
  text: 'Clean kitchen',
  completed: false
}, {
  text: 'Buy food',
  completed: true,
}, {
  text: 'Do work',
  completed: false
}, {
  text: 'Exercise',
  completed: true
}]

// My work
const getThingsToDo = (list) => {
  return list.filter((todo) => {
    return !todo.completed
  })
}

// Test function
console.log(getThingsToDo(todos))

// His approach -> first way, he then did my way
const hisThingsToDo = (todos) => {
  return todos.filter((todo) => {
    return todo.completed === false
  })
}
