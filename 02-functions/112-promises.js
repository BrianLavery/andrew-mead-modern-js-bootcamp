// CALLBACK APPROACH
const getDataCallback = (callback) => {
  setTimeout(() => {
    if (typeof(num) === 'number') {
      callback(undefined, num * 2)
    } else {
      callback('Number must be provided')
    }
  }, 2000)
}

getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// PROMISE APPROACH
// Set up a function so we can pass in additional arguments
const getDataPromise = (data) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`This is my success data ${data}`)
  }, 2000)
})

const myPromise = getDataPromise(123)

myPromise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})
