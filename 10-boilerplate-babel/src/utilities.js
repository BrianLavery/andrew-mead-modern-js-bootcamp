// 2 styles of export
// 1. Named exports - can have as many as need
// 2. Default export - each file can choose to have at most one

// FIRST APPROACH TO EXPORTING
export const firstAdd = (a, b) => a + b
export const firstMyName = 'Andrew'

const firstSquare = (x) => x * x
// export default firstSquare

// SECOND APPROACH TO EXPORTING
const add = (a, b) => a + b
const myName = 'Tra'
const square = (x) => x * x

export { add, myName, square as default }