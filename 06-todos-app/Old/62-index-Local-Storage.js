// Challenge
// 1. Delete dummy data
// 2/ Read and parse data when app starts up
// 3. Stringify data and write data when new data is added

const renderTodos = (todos, filters) => {
  // ALTERNATIVES AT BOTTOM
  filteredTodos = todos.filter((todo) => {
    // 'One liner' for the longer approach below
    return (todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !filters.hideCompleted) || (todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed);
  })
  document.querySelector('#todos-container').innerHTML = '';
  
  const todosCount = document.createElement('h3');
  todosCount.textContent = `${filteredTodos.length} todos in total`;
  document.querySelector('#todos-container').appendChild(todosCount);

  const incompleteTodos = filteredTodos.filter((todo) => {
    return !todo.completed;
  })

  const incompleteTodosCount = document.createElement('h3');
  incompleteTodosCount.textContent = `Of these, ${incompleteTodos.length} todos are incomplete`;
  document.querySelector('#todos-container').appendChild(incompleteTodosCount);

  filteredTodos.forEach((todo, index) => {
    const p = document.createElement('p');
    p.textContent = `${index + 1}. ${todo.text}`;
    document.querySelector('#todos-container').appendChild(p);
  })
}

renderTodos(JSON.parse(localStorage.getItem('todos')), JSON.parse(localStorage.getItem('filters')));

document.querySelector('#todo-search-filter').addEventListener('input', (e) => {
  // Get filters from local storage
  const filters = JSON.parse(localStorage.getItem('filters'));
  // Set filters search text equal to filter text value
  filters.searchText = e.target.value;
  // Save updated filters in local storage again
  localStorage.setItem('filters', JSON.stringify(filters));
  // Re-render todos
  renderTodos(JSON.parse(localStorage.getItem('todos')), filters);
})

document.querySelector('#new-todo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Get todos from local storage
  const todos = JSON.parse(localStorage.getItem('todos'));
  // Update todos array with a new object
  todos.push({
    text: e.target.elements.todoText.value,
    completed: false
  });
  // Save updated todos in local storage again
  localStorage.setItem('todos', JSON.stringify(todos));
  // Re-render todos
  renderTodos(todos, JSON.parse(localStorage.getItem('filters')));
  // Clear the input value on the input
  e.target.elements.todoText.value = '';
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
  // Get filters from local storage
  const filters = JSON.parse(localStorage.getItem('filters'));
  // Update the hideCompleted value on filters object
  filters.hideCompleted = e.target.checked;
  // Save the filters object in local storage again
  localStorage.setItem('filters', JSON.stringify(filters));
  // Re-render the todos
  renderTodos(todos, filters);
})
