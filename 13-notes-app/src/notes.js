import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

let notes = []

// Read existing notes from local storage
const loadNotes = () => {
  const notesJSON = localStorage.getItem('notes')
  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (e) {
    return [];
  }
}

// Save notes to local storage
const saveNotes = () => {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Expose notes from module to other parts of application
const getNotes = () => notes

// Function to create a note
const createNote = () => {
  // Create variables for unique ID and timestamp
  const id = uuidv4();
  const timestamp = moment().valueOf();
  
  // Push into our array in local memory
  notes.push({
    id: id,
    title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp
  })
  
  // Persist in local storage
  saveNotes();

  // Return id to program for usage for actions (e.g. redirection)
  return id
}

// Remove a note from the list
const removeNote = (id) => {
  // Find index of note for which we have the id
  const noteIndex = notes.findIndex((note) => note.id === id);

  // If found then we delete it from the array
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
    saveNotes();
  }
}

// Sort notes by multiple approaches user can select
const sortNotes = (sortBy) => {
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

// Function to update notes
const updateNote = (id, updates) => {
  const note = notes.find(note => note.id === id)

  if (!note) {
    return
  }

  if (typeof(updates.title) === 'string') {
    note.title = updates.title
    note.updatedAt = moment().valueOf()
  }

  if (typeof(updates.body === 'string')) {
    note.body = updates.body
    note.updatedAt = moment().valueOf()
  }

  saveNotes()
  return note
}

notes = loadNotes()

export { getNotes, createNote, removeNote, sortNotes, updateNote }