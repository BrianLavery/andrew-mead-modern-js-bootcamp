// This now starts strict mode
'use strict'

const todos = getSavedTodos();

const filters = {
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

  // Because we set this variable up as text we don't need to name in the todos.push code below
  const text = e.target.elements.todoText.value.trim()

  // Update todos array with a new object
  if (text.length > 0) {
    todos.push({
      id: uuidv4(),
      text,
      completed: false
    });
    // Save updated todos in local storage again
    saveTodos(todos);
    // Re-render todos
    renderTodos(todos, filters);
    // Clear the input value on the input
    e.target.elements.todoText.value = '';
  }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  // Update the hideCompleted value on filters object
  filters.hideCompleted = e.target.checked;
  // Re-render the todos
  renderTodos(todos, filters);
})
