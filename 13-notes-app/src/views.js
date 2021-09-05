import moment from "moment";
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('a');
  const textEl = document.createElement('p'); // Use span as p starts new line
  const statusEl = document.createElement('p')
  
  // Setup the note title textEl
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'Unnamed note';
  }
  textEl.classList.add('list-item__title')
  noteEl.appendChild(textEl);
  
  // Setup the link
  noteEl.setAttribute('href', `/edit.html#${note.id}`);
  noteEl.classList.add('list-item')
  
  // Setup the statusEl message
  statusEl.textContent = generateLastEdited(note.updatedAt)
  statusEl.classList.add('list-item__subtitle')
  noteEl.appendChild(statusEl)
  
  // Return the note element
  return noteEl;
}

// Render application notes
const renderNotes = () => {
  const notesEl = document.querySelector('#notes')
  
  // Get latest notes and filters
  const filters = getFilters()
  const notes = sortNotes(filters.sortBy);
  
  // Filter for only notes with right search text
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));
  
  // Wipe the notes container
  notesEl.innerHTML = '';
  
  if (filteredNotes.length > 0) {
    // Generate DOM for each note and push it into the notes container
    filteredNotes.forEach((note) => {
      const noteElement = generateNoteDOM(note);
      notesEl.appendChild(noteElement);
    })
  } else {
    const emptyMessage = document.createElement('p')
    emptyMessage.textContent = 'No notes to show'
    emptyMessage.classList.add('empty-message')
    notesEl.appendChild(emptyMessage)
  }
}

const initializeEditPage = (noteId) => {
  // Query selectors for DOM elements access repeatedly
  const titleElement = document.querySelector('#note-title');
  const dateElement = document.querySelector('#last-edited');
  const bodyElement = document.querySelector('#note-body');
  
  // Get the note from the id passed in
  const notes = getNotes();
  const note = notes.find(note => note.id === noteId);
  
  if (!note) {
    // Redirect to home page if we have an issue
    location.assign('/index.html')
  }
  
  // Put stored value in the inputs when user accesses edit page
  titleElement.value = note.title;
  dateElement.textContent = generateLastEdited(note.updatedAt);
  bodyElement.value = note.body;
}

// Generate last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`;

export { generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage }