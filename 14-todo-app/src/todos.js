import { v4 as uuidv4 } from 'uuid';

// Setup the empty todos array
let todos = []

// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  try {
    todos = todosJSON ? JSON.parse(todosJSON): [];
  } catch (error) {
    todos = [];
  }
}

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (text) => {
  // Update todos array with a new object
  if (text.length > 0) {
    todos.push({
      id: uuidv4(),
      text,
      completed: false
    });
    // Save updated todos in local storage again
    saveTodos();
  }
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
  const todoIndex = todos.findIndex(todo => todo.id === id)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
    saveTodos()
  }
}

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
  const todo = todos.find(todo => todo.id === id)

  if (todo) {
    todo.completed = !todo.completed
    saveTodos()
  }
}

// Make sure to call loadTodos and setup the exports
loadTodos()

export { getTodos, loadTodos, createTodo, toggleTodo, removeTodo }