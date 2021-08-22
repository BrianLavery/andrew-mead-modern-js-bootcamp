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

document.querySelector('#add-todo-button').addEventListener('click', () => {
  console.log("I'm adding a new todo")
})

document.querySelector('#todo-input').addEventListener('input', (e) => {
  console.log(e.target.value);
})