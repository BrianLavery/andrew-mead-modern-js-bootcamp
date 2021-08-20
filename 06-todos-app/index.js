todos = [{
  text: 'Order cat food',
  completed: true
}, {
  text: 'Clean kitchen',
  completed: false
}, {
  text: 'Buy food',
  completed: true,
}, {
  text: 'Do work',
  completed: false
}, {
  text: 'Exercise',
  completed: true
}]

// Print a summary message - how many todos are left (p element)
// Add a p for each to do above (use text value from object)

// Valid code but not what the challenge wanted in the end
// let remainingTodosCount = 0;
// todos.forEach((todo) => {
//   if (!todo.completed) {
//     remainingTodosCount += 1;
//   }
// })

const incompleteTodos = todos.filter((todo) => {
  return !todo.completed;
})

const countHeader = document.createElement('h3');
countHeader.textContent = `You have ${incompleteTodos.length} to dos remaining`;
document.querySelector('body').appendChild(countHeader);

incompleteTodos.forEach((todo, index) => {
  const p = document.createElement('p');
  p.textContent = `${index + 1}. ${todo.text}`;
  document.querySelector('body').appendChild(p);
})