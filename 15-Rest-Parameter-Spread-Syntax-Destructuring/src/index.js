// Challenge with this function is not flexible - only takes 2 arguments
const calculateAverageOld = (numOne, numTwo) => (numOne + numTwo) / 2
console.log(calculateAverageOld(0,100))

// We can use rest parameter - converts into an array
// Define it as beginning with 3 dots
// Gives a dynamic formula
const calculateAverageBasic = (...numbers) => {
  let sum = 0
  numbers.forEach(num => sum += num)
  return sum / numbers.length
}

console.log(calculateAverageBasic(0,100,200,500))

// Can also pass in other arguments outside of rest
const calculateAverage = (thing, ...numbers) => {
  let sum = 0
  numbers.forEach(num => sum += num)
  const average = sum / numbers.length
  return `The average ${thing} is ${average}`
}

console.log(calculateAverage('grade', 90, 80, 70, 60))

// CHALLENGE
const printTeam = (teamName, coach, ...players) => {
  console.log(`Team: ${teamName}`)
  console.log(`Coach: ${coach}`)
  console.log(`Players: ${players.join(', ')}`)
}

printTeam('Libery', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')