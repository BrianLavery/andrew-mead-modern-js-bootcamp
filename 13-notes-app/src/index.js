import { createNote } from "./notes";
import { setFilters } from "./filters";
import { renderNotes } from './views'

// Render notes on the page
renderNotes()

document.querySelector('#create-note').addEventListener('click', (e) => {
  // Call create note function (it will return the note id we just created)
  const id = createNote()
  // Redirect to the edit page for this note
  location.assign(`/edit.html#${id}`);
})

document.querySelector('#search-text').addEventListener('input', (e) => {
  setFilters({
    searchText: e.target.value
  })
  renderNotes();
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
  setFilters({
    sortBy: e.target.value
  })
  renderNotes()
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    renderNotes()
  }
})

