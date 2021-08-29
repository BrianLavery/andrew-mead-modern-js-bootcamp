// Can use custom getters/ setters, e.g. to sanitise/ validate data

const data = {
  // We can use the custom getter/ setter to track all locations we have been to
  locations: [],
  
  // This is how we do a custom getter for location
  get location() {
    return this._location
  },
  set location(value) {
    // Cannot store as location as that redirects to our getters and setters
    this._location = value.trim()
    this.locations.push(this._location)
  }
}

data.location = '    Philadelphia    '
data.location = '    New York   '
data.location = ' New Jersey '
console.log(data)
console.log(data.location)

