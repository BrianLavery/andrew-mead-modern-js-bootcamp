let notes = getSavedNotes();

const filters = {
  searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
  const noteId = uuidv4();
  notes.push({
    id: noteId,
    title: '',
    body: ''
  })
  saveNotes(notes);
  location.assign(`/edit.html#${noteId}`);
})

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
  console.log(e.target.value);
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    // notes = getSavedNotes(); // => Think this lines works but less efficient than one below
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters)
  }
})

// Date methods
const now = new Date();
console.log(now)
console.log(now.toString());

console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()}`); // Month indexed to 0 for Jan
console.log(`Day of month: ${now.getDate()}`); // Day of month
console.log(`Hours: ${now.getHours()}`);
console.log(`Minutes: ${now.getMinutes()}`);
console.log(`Seconds: ${now.getSeconds()}`);

// Could pass in a date as a string - uncommon
const then = new Date('January 21 2001 6:25:01');
console.log(then.toString());

// Unix Epoch - January 1st 1970 00:00:00
// Positive numebrs for dates after and negative before
// 1000 means 1000 milliseconds after Unix Epoch (or one second)

console.log(then.getTime()); // Returns the timestamp

const timeDiffMins = (980076301000 - 980029501000) / 1000 / 60; // Difference between his timestamp and mine
console.log(timeDiffMins); // Works out to 780 mins or 13 hours

// Get timestamp for now (e.g. to store) - to get year need to convert back
const timestamp = now.getTime();
const myDate = new Date(timestamp)
console.log(`Year of myDate variable: ${myDate.getFullYear()}`);

// Challenge
const moonLanding = new Date('July 20 1969 20:17:00');
const martinLkAssassination = new Date('April 4 1968 18:01:00');

const mlTimestamp = moonLanding.getTime();
const mlkaTimestamp = martinLkAssassination.getTime();

const earlierTime = new Date(Math.min(mlTimestamp, mlkaTimestamp));
console.log(earlierTime.toString());
