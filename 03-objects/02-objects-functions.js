let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

// Passing objects into functions
let getSummary = function (book) {
  console.log(`${book.title} by ${book.author}`)
}

getSummary(myBook);
getSummary(otherBook);

// Gettings objects back from functions
let otherSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
}

let bookSummary = otherSummary(myBook)
let otherBookSummary = otherSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge - object for temp conversion

let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celsius: (fahrenheit - 32) / 1.8,
    kelvin: (fahrenheit - 32) / 1.8 + 273.15,
  }
}

let kelvin = convertFahrenheit(212).kelvin;
console.log(kelvin)
