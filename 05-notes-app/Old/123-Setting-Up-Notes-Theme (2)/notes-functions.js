// This now starts strict mode
'use strict'

// Read existing notes from local storage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')
  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (e) {
    return [];
  }
}

// Save notes to local storage
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Remove a note from the list
const removeNote = (id) => {
  // Find index of note for which we have the id
  const noteIndex = notes.findIndex((note) => note.id === id);

  // If found then we delete it from the array
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
}

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

// Sort notes by multiple approaches user can select
const sortNotes = (notes, sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    })
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    })
  } else if (sortBy === 'alphabetical') {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    })
  } else {
    return notes;
  }
}

// Render application notes
const renderNotes = (notes, filters) => {
  const notesEl = document.querySelector('#notes')
  notes = sortNotes(notes, filters.sortBy);
  
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

// Generate last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`;