const notes = [{
  title: 'My next trip',
  body: 'I woud like to go to Spain'
}, {
  title: 'Habits to work on',
  body: 'Exercise'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

document.querySelector('#create-note').addEventListener('click', (e) => {
  e.target.textContent = 'The button was clicked';
})

document.querySelector('#remove-all').addEventListener('click', (e) => {
  document.querySelectorAll('.note').forEach((note) => {
    note.remove();
  })
})