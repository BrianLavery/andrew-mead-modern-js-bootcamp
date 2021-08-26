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

// Get DOM elements for an individual note
const generateTodoDOM = (todo, index) => {
  const p = document.createElement('p');
  p.textContent = `${index + 1}. ${todo.text}`;
  return p
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
  document.querySelector('#todos-container').innerHTML = '';

  const incompleteTodos = filteredTodos.filter((todo) => {
    return !todo.completed;
  })

  const summary = generateSummaryDOM(incompleteTodos);
  document.querySelector('#todos-container').appendChild(summary);

  filteredTodos.forEach((todo, index) => {
    const p = generateTodoDOM(todo, index)
    document.querySelector('#todos-container').appendChild(p);
  })
}
  