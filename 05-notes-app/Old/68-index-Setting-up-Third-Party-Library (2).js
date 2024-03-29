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


// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement('div');
  const textEl = document.createElement('span'); // Use span as p starts new line
  const button = document.createElement('button');

  // Setup the remove note button
  button.textContent = 'x';
  noteEl.appendChild(button);

  // Setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'Unnamed note';
  }
  noteEl.appendChild(textEl);

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