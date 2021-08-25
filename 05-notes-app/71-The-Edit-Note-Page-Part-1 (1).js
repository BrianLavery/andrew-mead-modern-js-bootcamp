// Read existing notes from local storage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return []
  }
}

// Save notes to local storage
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Remove a note from the list
const removeNote = (id) => {
  // Find index of note for which we have the id
  const noteIndex = notes.findIndex((note) => {
    return note.id === id;
  })

  // If found then we delete it from the array
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('div');
  const text = document.createElement('a'); // Use span as p starts new line
  const button = document.createElement('button');

  // Setup the remove note button including event listener here
  button.textContent = 'x';
  noteEl.appendChild(button);
  button.addEventListener('click', () => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  })

  // Setup the note title text
  if (note.title.length > 0) {
    text.textContent = note.title;
  } else {
    text.textContent = 'Unnamed note';
  }
  text.setAttribute('href', `/edit.html#${note.id}`);
  noteEl.appendChild(text);

  // Return the note element
  return noteEl;
}

// Render application notes
const renderNotes = (notes, filters) => {
  // Filter for only notes with right search text
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  })
  
  // Wipe the notes container
  document.querySelector('#notes').innerHTML = '';

  // Generate DOM for each note and push it into the notes container
  filteredNotes.forEach((note) => {
    const noteElement = generateNoteDOM(note);
    document.querySelector('#notes').appendChild(noteElement);
  })
}