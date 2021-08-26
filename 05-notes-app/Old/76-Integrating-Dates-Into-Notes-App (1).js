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
  notes = sortNotes(notes, filters.sortBy);
  
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

// Generate last edited message
const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()}`
}