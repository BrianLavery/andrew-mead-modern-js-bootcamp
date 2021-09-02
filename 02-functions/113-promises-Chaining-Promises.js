// CALLBACK APPROACH - CHAINING CALLBACKS EXAMLE
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof(num) === 'number') {
      callback(undefined, num * 2)
    } else {
      callback('Number must be provided')
    }
  }, 2000)
}

// To chain callbacks it becomes spaghetti code with deep nesting
getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log(`Callback data: ${data}`)
      }
    })
  }
})

// PROMISE APPROACH
// Set up a function so we can pass in additional arguments
const getDataPromise = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof(num) === 'number' ? resolve(num * 2) : reject('Number must be provided')
  }, 2000)
})

// 2 ways to do with promise: NOT GOO WAY
getDataPromise(2).then((data) => {
  getDataPromise(data).then((data) => {
    console.log(`Promise data ${data}`)
  }, (err) => {
    console.log(err)
  })
}, (err) => {
  console.log(err)
})

// 2 ways to do with promise: NOT GOO WAY
// PROMISE CHAINING - we return promise so can do more with it
// We chain on catch for errors - single error handler for all promises
getDataPromise(3).then((data) => {
  return getDataPromise(data)
}).then((data) => {
  console.log(`Promise chained data ${data}`)
}).catch((err) => {
  console.log(err) // If there is an error this executes before the other functions in this file as no delay
})