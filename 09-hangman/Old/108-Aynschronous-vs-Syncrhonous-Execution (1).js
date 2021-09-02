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

// Our synchronous function
const getPuzzleSync = () => {
  const request = new XMLHttpRequest()

  // We pass in a third argument to the request setup
  // Third argument default is true (for asynchronous)
  // request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3', false)
  request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=3', false)
  request.send()

  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText)
    return data.puzzle
  } else if (request.readyState === 4) {
    throw new Error('Things did not go well')
  }
}