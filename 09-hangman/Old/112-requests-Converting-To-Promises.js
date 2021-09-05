const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      resolve(data.puzzle)
    } else if (e.target.readyState === 4) {
      reject('Unable to fetch data')
    }
  })
  
  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()

})

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
