// This now starts strict mode
'use strict'

let notes = getSavedNotes();

const filters = {
  searchText: '',
  sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
  const noteId = uuidv4();
  const timestamp = moment().valueOf();
  notes.push({
    id: noteId,
    title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp
  })
  saveNotes(notes);
  location.assign(`/edit.html#${noteId}`);
})

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    // notes = getSavedNotes(); // => Think this lines works but less efficient than one below
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters)
  }
})

