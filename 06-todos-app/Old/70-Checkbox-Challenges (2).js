// Get saved todos from local storage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
}

// Save todos to storage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Remove todo from the list
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => {
    return todo.id === id;
  })
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
}

// Get DOM elements for an individual note
const generateTodoDOM = (todo, index) => {
  // Create all my elements
  const todoEl = document.createElement('div');
  const checkbox = document.createElement('input');
  const text = document.createElement('span');
  const button = document.createElement('button');

  // Setup checkbox element and push into note element
  checkbox.setAttribute('type', 'checkbox');
  // Mark it as checked if it is completed
  checkbox.checked = todo.completed;
  todoEl.appendChild(checkbox);
  // Updated completed if receive input
  checkbox.addEventListener('change', (e) => {
    todo.completed = e.target.checked;
    saveTodos(todos);
    renderTodos(todos, filters);
  })
  
  // Setup text element with todo info
  text.textContent = `${index + 1}. ${todo.text}`;
  todoEl.appendChild(text);

  // Setup delete button
  button.textContent = 'x';
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
  const summary = document.createElement('h3');
  summary.textContent = `${incompleteTodos.length} todos are incomplete`;
  return summary;
}


// Render application todos based on filters
const renderTodos = (todos, filters) => {
  // ALTERNATIVES AT BOTTOM
  filteredTodos = todos.filter((todo) => {
    // Select only todos that match search text and where either it isn't completed (or if hideCompleted flag is off then also accept)
    return (todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !filters.hideCompleted) || (todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed);
  })
  
  // Clear the todos container
  document.querySelector('#todos-container').innerHTML = '';

  // Filter for incomplete todos
  const incompleteTodos = filteredTodos.filter((todo) => {
    return !todo.completed;
  })

  // Generate summary and push into todos container
  const summary = generateSummaryDOM(incompleteTodos);
  document.querySelector('#todos-container').appendChild(summary);

  // For each filtered todo iterate over, generate DOM element and push into container
  filteredTodos.forEach((todo, index) => {
    const todoElement = generateTodoDOM(todo, index)
    document.querySelector('#todos-container').appendChild(todoElement);
  })
}
  