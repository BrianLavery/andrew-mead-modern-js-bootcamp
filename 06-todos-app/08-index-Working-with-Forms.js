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

const filters = {
  searchText: ''
}

const renderTodos = (todos, filters) => {
  filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  })
  document.querySelector('#todos-container').innerHTML = '';
  
  const todosCount = document.createElement('h3');
  todosCount.textContent = `${filteredTodos.length} todos match your search`;
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

renderTodos(todos, filters);

document.querySelector('#todo-search-filter').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
})

document.querySelector('#new-todo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  todos.push({
    text: e.target.elements.todoText.value,
    completed: false
  });
  renderTodos(todos, filters);
  e.target.elements.todoText.value = '';
})