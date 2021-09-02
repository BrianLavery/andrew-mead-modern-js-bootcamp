// We can run some code with a timeout/delay in milliseconds
setTimeout(() => {
  console.log('The time is up')
}, 1000)

// CALLBACK APPROACH

const getCallback = (callback) => {
  setTimeout(() => {
    callback('This is my callback error', undefined)
    callback('This is my callback error', undefined) // CALLBACK will repeat
  }, 2000)
}

getCallback((err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// PROMISE APPROACH
// Promise constructor expects a single argument (a function)
// The function passed in gets executed right away - so will be the long-running process (e.g. API call)
// Promise calls the function with 2 arguments - resolve (success) and reject (error)
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is the promise data')
    reject('This is my promise error')
    reject('This is my promise error') // PROMISE will not repeat
  }, 2000)
})

// When we have the information we can call a .then method
// We pass it a function
// Function is called 
// Second argument for then is only called if things go poorly and they get passed the error
myPromise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})


// CALLBACK vs PROMISE
// 1. Promise has different functions for success vs reject so clearer semantics. For callback you
// would need to look at the order of the arguments to work it out
// 2. You can call the callback twice - it's more flexible but could cause weird things to happen.
// With promises can only run of your functions (reject OR resolve) and you can only call it once.
// You can call the promise with the .then method multiple times
// 3. For promise you don't need to define the function to do something with the code before you initiate
// the request. For callback you need to define the callback as you pass it in to your function to call it.
// So for promise even if the .then code doesn't exist the promise will still execute just we don't
// do anything with the result