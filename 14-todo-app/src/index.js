// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary  

// --

// Add necessary imports
import { setFilters } from "./filters";
import { loadTodos, createTodo } from "./todos";
import { renderTodos } from "./views";

// Render initial todos
renderTodos()

// Set up search text handler
document.querySelector('#todo-search-filter').addEventListener('input', (e) => {
  // Set filters search text equal to filter text value
  setFilters({
    searchText: e.target.value
  })
  
  // Re-render todos
  renderTodos();
})

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) => {
  // Update the hideCompleted value on filters object
  setFilters({
    hideCompleted: e.target.checked
  })
  
  // Re-render the todos
  renderTodos();
})


// Set up form submission handler
document.querySelector('#new-todo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Because we set this variable up as text we don't need to name in the todos.push code below
  const text = e.target.elements.todoText.value.trim()
  
  // Update todos array with a new object and re-render page + clear input text
  if (text.length > 1) {
    createTodo(text)
    renderTodos()
    e.target.elements.todoText.value = '';
  }
})

// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) => {
  if (e.key === 'todos') {
    loadTodos()
    renderTodos()
  }
})
