import { getFilters } from "./filters";
import { getTodos, toggleTodo, removeTodo } from "./todos";


// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
  // Get todos and filters variables
  const todos = getTodos()
  const filters = getFilters()

  // Select only todos that match search text and where either it isn't completed (or if hideCompleted flag is off then also accept)
  const filteredTodos = todos.filter((todo) => {
    return (todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !filters.hideCompleted) || (todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed);
  })
  
  // Set todos container as a variable and clear the text
  const todoEl = document.querySelector('#todos-container')
  todoEl.innerHTML = '';

  // Filter for incomplete todos
  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  // Generate summary and push into todos container
  const summary = generateSummaryDOM(incompleteTodos);
  todoEl.appendChild(summary);

  // For each filtered todo iterate over, generate DOM element and push into container
  if (filteredTodos.length > 0) {
    filteredTodos.forEach((todo, index) => {
      todoEl.appendChild(generateTodoDOM(todo, index));
    })
  } else {
    const messageEl = document.createElement('p')
    messageEl.classList.add('empty-message')
    messageEl.textContent = 'There are no to-dos to show'
    todoEl.appendChild(messageEl)
  }
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (todo, index) => {
  // Create all my elements
  const todoEl = document.createElement('label');
  const containerEl = document.createElement('div');
  const checkbox = document.createElement('input');
  const todoText = document.createElement('span');
  const button = document.createElement('button');

  // Setup checkbox element and push into note element
  checkbox.setAttribute('type', 'checkbox');
  // Mark it as checked if it is completed
  checkbox.checked = todo.completed;
  containerEl.appendChild(checkbox);
  // Updated completed if receive input
  checkbox.addEventListener('change', (e) => {
    toggleTodo(todo.id)
    renderTodos();
  })
  
  // Setup todoText element with todo info
  todoText.textContent = `${index + 1}. ${todo.text}`;
  containerEl.appendChild(todoText);

  // Setup container
  todoEl.classList.add('list-item')
  containerEl.classList.add('list-item__container')
  todoEl.appendChild((containerEl))

  // Setup delete button
  button.textContent = 'remove';
  button.classList.add('button', 'button--text')
  todoEl.appendChild(button);
  button.addEventListener('click', () => {
    removeTodo(todo.id);
    renderTodos();
  })
  
  // Return the todo element
  return todoEl
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2');
  summary.classList.add('list-title')
  const numTodos = incompleteTodos.length
  const todoText = numTodos === 1 ? 'todo' : 'todos'
  summary.textContent = `You have ${numTodos} ${todoText} remaining`;
  return summary;
}

// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM }