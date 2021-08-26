let notes = [{
  title: 'My next trip',
  body: 'I woud like to go to Spain'
}, {
  title: 'Habits to work on',
  body: 'Exercise'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

const filters = {
  searchText: ''
}

// Can save data locally with local Storage
// Local storage will only support string storage


// CREATE - pass in a key and a value
// localStorage.setItem('location', 'Philadephia');

// // READ - pass in key and get value returned
// console.log(localStorage.getItem('location'));

// // DELETE - takes key as argument
// localStorage.removeItem('location');

// // DELETE - we can clear local storage. Deletes all keys and values
// localStorage.clear();


// Storing objects in local storage
// const user = {
//   name: 'Andrew',
//   age: 27
// }

// // Stringify takes object and passes to string
// const userJSON = JSON.stringify(user);
// console.log(userJSON); // Outputs as string - double quotes used everywhere
// localStorage.setItem('user', userJSON);

// const userJSON = localStorage.getItem('user');
// const user = JSON.parse(userJSON);
// console.log(`${user.name} is ${user.age}'s years old`);


// Checking for existing saved data
const notesJSON = localStorage.getItem('notes');
if (notesJSON !== null) {
  notes = JSON.parse(notesJSON)
}

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  })
  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach((note) => {
    const noteElement = document.createElement('p')

    if (note.title.length > 0) {
      noteElement.textContent = note.title;
    } else {
      noteElement.textContent = 'Unnamed note';
    }

    document.querySelector('#notes').appendChild(noteElement);
  })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
  notes.push({
    title: '',
    body: ''
  })
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
  console.log(e.target.value);
})