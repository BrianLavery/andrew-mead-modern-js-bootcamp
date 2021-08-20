// DOM: Document Object Model

// Query and remove - first one
const p = document.querySelector('p');
p.remove();

// Query all and remove
const ps = document.querySelectorAll("h2");
ps.forEach((h2) => {
  h2.textContent = '***Censored header***'
  // h2.remove();
})