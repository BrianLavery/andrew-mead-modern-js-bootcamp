// Query selectors for DOM elements access repeatedly
const titleElement = document.querySelector('#note-title');
const dateElement = document.querySelector('#last-edited');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');

// Get parameter from the url but exclude the # using substring
const noteId = location.hash.substring(1);

// We can get notes from local storage
let notes = getSavedNotes();

// Find the note with the id passed in
let note = notes.find((note) => {
  return note.id === noteId;
})

if (note === undefined) {
  // Redirect to home page if we have an issue
  location.assign('/index.html')
}

// Put stored value in the inputs when user accesses edit page
titleElement.value = note.title;
dateElement.textContent = generateLastEdited(note.updatedAt);
bodyElement.value = note.body;


// Event input for title
titleElement.addEventListener('input', (e) => {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  saveNotes(notes);
  dateElement.textContent = generateLastEdited(note.updatedAt);
})

// Event input for body
bodyElement.addEventListener('input', (e) => {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  saveNotes(notes);
  dateElement.textContent = generateLastEdited(note.updatedAt);
})

// Remove button - removes note, saves, redirect to home page
removeElement.addEventListener('click', () => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign('/index.html')
})

// Attach event listener to Window so that we can update other pages without refresh
// Below would fire when anything on the edit.html page is clicked
// window.addEventListener('click', (e) => {
//   console.log('clicked')
// })

// Now fire on storage event - fires when any data changes; only fires for the other
// pages i.e. not the tab I'm currently on but other versions of that tab
window.addEventListener('storage', (e) => {
  // Check it's for the notes key
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    
    // Find the note with the id passed in
    note = notes.find((note) => {
      return note.id === noteId;
    })
    
    if (note === undefined) {
      // Redirect to home page if we have an issue
      location.assign('/index.html')
    }
    
    // Put stored value in the inputs when user accesses edit page
    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt)
  }
})