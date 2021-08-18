const notes = ['Note 1', 'Note 2', 'Note 3'];

// Push -> adds a new item to the end
notes.push('My new note');
console.log(notes);

// Pop -> removes last item
notes.pop();
console.log(notes);

// Shift removes first item
notes.shift();
console.log(notes);

// Unshift adds to beginnings
notes.unshift('The new beginning');
console.log(notes);

// Splice allows where to add or remove
// FIrst is position, then how many items to remove
notes.splice(1, 1);
console.log(notes);

// Can also use splice to add another item - hence might make second argument zero
notes.splice(1, 0, 'Somewhere in the middle');
console.log(notes);

// CRUD using bracket notations
notes[2] = "This is now the new note 3"
console.log(notes);