// This now starts strict mode
'use strict'

// Get saved todos from local storage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  try {
    return todosJSON ? JSON.parse(todosJSON): [];
  } catch (error) {
    return [];
  }
}

// Save todos to storage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Remove todo from the list
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
}

// Get DOM elements for an individual note
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
    todo.completed = e.target.checked;
    saveTodos(todos);
    renderTodos(todos, filters);
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
    saveTodos(todos);
    renderTodos(todos, filters);
  })
  
  // Return the todo element
  return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2');
  summary.classList.add('list-title')
  const numTodos = incompleteTodos.length
  const todoText = numTodos === 1 ? 'todo' : 'todos'
  summary.textContent = `You have ${numTodos} ${todoText} remaining`;
  return summary;
}


// Render application todos based on filters
const renderTodos = (todos, filters) => {
  const todoEl = document.querySelector('#todos-container')
  
  // ALTERNATIVES AT BOTTOM
  const filteredTodos = todos.filter((todo) => {
    // Select only todos that match search text and where either it isn't completed (or if hideCompleted flag is off then also accept)
    return (todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !filters.hideCompleted) || (todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed);
  })
  
  // Clear the todos container
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
    messageEl.textContent = 'No to-dos to show'
    todoEl.appendChild(messageEl)
  }
}
  