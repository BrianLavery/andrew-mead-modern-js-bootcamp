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

const ps = document.querySelectorAll("h2");

// 1. Create a new element
const newParagraph = document.createElement('p');
// 2. PUt some content in the element
newParagraph.textContent = 'This is a new element from JavaScript'
// 3. Put the new element somewhere
document.querySelector('body').appendChild(newParagraph);