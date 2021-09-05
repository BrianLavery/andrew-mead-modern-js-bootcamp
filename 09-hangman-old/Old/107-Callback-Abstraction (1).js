// Below is an example of a callback function setup
// We call this function from app.js and we pass in a function to this function
// Then we call the function passed in below
const getPuzzle = (callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      callback(undefined, data.puzzle)
    } else if (e.target.readyState === 4) {
      callback('An error has taken place', undefined)
    }
  })

  request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
  request.send()
}