// We create an async function by adding the async keyword
// Async functions return a promise
// Promise gets resolved with value we return
const processDataOld = async () => {
  return 12
  throw new Error('Something went wrong')
}

processDataOld().then((data) => {
  console.log('Data', data)
}).catch((error) => {
  console.log('Error', error)
})

// Some dummy code to show why async functons are useful
const getDataPromise = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof(num) === 'number' ? resolve(num * 2) : reject('Number must be provided')
  }, 2000)
})

const processData = async () => {
  // Old way (no await)
  // getDataPromise(2).then(data => console.log(data))
  // const data = await getDataPromise(2)
  // return data
  // console.log(data)
  // return await getDataPromise(2)
  // CHAINING
  let data = await getDataPromise(2)
  data = await getDataPromise(data)
  data = await getDataPromise(data)
  return data
  // SAME EXAMPLE WITH ERROR - await throws error for us
  // let data = await getDataPromise('2')
  // data = await getDataPromise(data)
  // return data
}

processData().then((data) => {
  console.log('Data', data)
}).catch((error) => {
  console.log('Error', error)
})

// ASYNC FUNCTIONS GOOD FOR COMPLEX PROMISES