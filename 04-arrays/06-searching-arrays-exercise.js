const stringsTodos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

// 1. convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

const todos = []

stringsTodos.forEach((todo, index) => {
  todos.push({
    text: todo,
    completed: false
  })
})

console.log(todos);

const deleteTodo = (list, textInput) => {
  const index = list.findIndex((todo) => {
    return todo.text.toLowerCase() === textInput.toLowerCase();
  })
  // Need this otherwise a -1 return value will delete the last item in the array
  if (index > -1) {
    list.splice(index, 1);
  }
}


deleteTodo(todos, 'buy food');
console.log(todos);

deleteTodo(todos, 'buy food!!');
console.log(todos);
