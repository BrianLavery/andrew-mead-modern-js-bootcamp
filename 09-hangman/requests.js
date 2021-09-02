const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch puzzle')
    }
  }).then(data => data.puzzle)
}


const getCountry = (countryCode) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      const country = data.find(ctry => ctry.alpha2Code === countryCode)
      resolve(country.name)
    } else if (e.target.readyState === 4) {
      reject('Unable to fetch country information')
    }
  })
  
  request.open('GET', `http://restcountries.eu/rest/v2/all`)
  request.send()
})