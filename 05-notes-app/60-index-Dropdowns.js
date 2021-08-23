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

const filters = {
  searchText: ''
}

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  })
  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach((note) => {
    const noteElement = document.createElement('p')
    noteElement.textContent = note.title;
    document.querySelector('#notes').appendChild(noteElement);
  })
}

renderNotes(notes, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
  console.log(e.target.value);
})