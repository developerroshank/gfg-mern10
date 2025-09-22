// Promises methods

const p1 = Promise.resolve('Sussess')
const p2 = Promise.reject('404 Not Found')
const p3 = Promise.resolve('Sussess')

// p1.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })

/**
 * ## Promise.allSettled(): Waits for all promises to settle (fulfilled or rejected) Method and returns an array of their outcomes. 
 * or Works when you need to process all results, even if some promises fail.
 */

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

/**
 * Promise.race() Method resolves or rejects as soon as the first promise settles.
 */

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

/**
 * Promise.any() Method resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError.
 */

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
  