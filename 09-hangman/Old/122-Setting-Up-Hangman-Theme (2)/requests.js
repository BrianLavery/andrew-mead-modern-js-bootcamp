const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to fetch puzzle')
  }
}

const getCountry = async (countryCode) => {
  const response = await fetch('http://restcountries.eu/rest/v2/all', {})
  
  if (response.status === 200) {
    const data = await response.json()
    return data.find(ctry => ctry.alpha2Code === countryCode).name
  } else {
    throw new Error('Unable to fetch country information')
  }
}

const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=27a661ecb69d53', {})

  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('Unable to fetch IP information')
  }
}

// MY APPROACH - empirical way not relying on other functions
getCurrentCountryBrian = async () => {
  const locationResponse = await fetch('http://ipinfo.io/json?token=27a661ecb69d53', {})

  if (locationResponse.status === 200) {
    const location = await locationResponse.json()
    const countryCode = location.country

    const countryResponse = await fetch('http://restcountries.eu/rest/v2/all', {})

    if (countryResponse.status === 200) {
      const data = await countryResponse.json()
      return data.find(ctry => ctry.alpha2Code === countryCode).name
    } else {
      throw new Error('Unable to fetch country information')
    }

  } else {
    throw new Error('Unable to fetch IP information')
  }
}

// HIS APPROACH
const getCurrentCountry = async () => {
  const location = await getLocation()
  return getCountry(location.country)
}