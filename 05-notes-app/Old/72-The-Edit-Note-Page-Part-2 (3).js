// Query selectors for DOM elements access repeatedly
const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');

// Get parameter from the url but exclude the # using substring
const noteId = location.hash.substring(1);

// We can get notes from local storage
const notes = getSavedNotes();

// Find the note with the id passed in
const note = notes.find((note) => {
  return note.id === noteId;
})

if (note === undefined) {
  // Redirect to home page if we have an issue
  location.assign('/index.html')
}

// Put stored value in the inputs when user accesses edit page
titleElement.value = note.title;
bodyElement.value = note.body;

// Event input for title
titleElement.addEventListener('input', (e) => {
  note.title = e.target.value;
  saveNotes(notes);
})

// Event input for body
bodyElement.addEventListener('input', (e) => {
  note.body = e.target.value;
  saveNotes(notes);
})

// Remove button - removes note, saves, redirect to home page
removeElement.addEventListener('click', () => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign('/index.html')
})