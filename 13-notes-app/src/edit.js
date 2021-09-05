import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes';

// Query selectors for DOM elements access repeatedly
const titleElement = document.querySelector('#note-title');
const dateElement = document.querySelector('#last-edited');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');

// Get parameter from the url but exclude the # using substring
const noteId = location.hash.substring(1);

// Render initial edit page
initializeEditPage(noteId)

// Event input for title
titleElement.addEventListener('input', (e) => {
  const note = updateNote(noteId, {
    title: e.target.value
  })
  dateElement.textContent = generateLastEdited(note.updatedAt);
})

// Event input for body
bodyElement.addEventListener('input', (e) => {
  const note = updateNote(noteId, {
    body: e.target.value
  })
  dateElement.textContent = generateLastEdited(note.updatedAt);
})

// Remove button - removes note, saves, redirect to home page
removeElement.addEventListener('click', () => {
  removeNote(noteId);
  location.assign('/index.html')
})


// Now fire on storage event - fires when any data changes; only fires for the other
// pages i.e. not the tab I'm currently on but other versions of that tab
window.addEventListener('storage', (e) => {
  // Check it's for the notes key
  if (e.key === 'notes') {
    initializeEditPage(noteId)
  }
})