// This now starts strict mode
'use strict'

const todos = getSavedTodos();

filters = {
  hideCompleted: false,
  searchText: ""
}

renderTodos(todos, filters);

document.querySelector('#todo-search-filter').addEventListener('input', (e) => {
  // Set filters search text equal to filter text value
  filters.searchText = e.target.value;
  // Re-render todos
  renderTodos(todos, filters);
})

document.querySelector('#new-todo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Update todos array with a new object
  todos.push({
    id: uuidv4(),
    text: e.target.elements.todoText.value,
    completed: false
  });
  // Save updated todos in local storage again
  saveTodos(todos);
  // Re-render todos
  renderTodos(todos, filters);
  // Clear the input value on the input
  e.target.elements.todoText.value = '';
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  // Update the hideCompleted value on filters object
  filters.hideCompleted = e.target.checked;
  // Re-render the todos
  renderTodos(todos, filters);
})
