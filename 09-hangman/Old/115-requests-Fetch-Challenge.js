const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch puzzle')
    }
  }).then(data => data.puzzle)
}


const getCountry = (countryCode) => {
  return fetch('http://restcountries.eu/rest/v2/all', {}).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch country information')
    }
  }).then(data => data.find(ctry => ctry.alpha2Code === countryCode).name)
}
