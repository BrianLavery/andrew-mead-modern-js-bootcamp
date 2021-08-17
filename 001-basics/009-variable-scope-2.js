// Global
  // Local
    // Local
  // Local


// You can define variables with same names at different scopes
// Called variable shadowing

let name = 'Brian';

if (true) {
  let name = 'Mike';

  if (true) {
    console.log(name);
    name = 'Jen'
    console.log(name);
  }
}

if (true) {
  console.log(name);
}


// In example below JS creates a global variable for word becuase it keeps going higher and not finding it
// This is called a leaked global
// It's why we always define with a let/ const

if (true) {

  if (true) {
    word = 'Jenny'
    console.log(word);
  }
}

if (true) {
  console.log(word);
}
