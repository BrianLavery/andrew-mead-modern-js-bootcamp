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

// MOMENT
const now = moment();
console.log(now.toString());

// Can see the minute (or hours etc)
now.minute(1);
console.log(now.toString());

// Add and subtract take 2 arguments - amount and unit
now.add(1, 'year');
console.log(now.toString());

// Can chain methods on add and subtract
now.add(1.5, 'year').subtract(20, 'days');
console.log(now.toString());

// Format to print months in certain way
// 26th August 2021
console.log(now.format('Do MMMM YYYY'))

// Display - Time from now
// This chooses the format that you come back with
console.log(now.fromNow());

// Unix Timestamp
const nowTimestamp = now.valueOf();
console.log(nowTimestamp);

// Can call moment and pass in the timestamp
console.log(moment(nowTimestamp).format('Do MMMM YYYY'));

// Challenge
// 1. Create a new moment
// 2 Set month, day and year to birthday
// 3. Then print in format "9 Apr 1986"

const bday = moment();
bday.date(9).month('April').year(1986);
console.log(bday.format('D MMM YYYY'))