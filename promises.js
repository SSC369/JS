// var addTwoPromises = async function (promise1, promise2) {
//   return new Promise((res) => {
//     let total;
//     Promise.all([promise1, promise2]).then((values) => {
//       console.log(values);
//     });
//   });
// };

// const resultPromise = addTwoPromises(
//   new Promise((resolve) => setTimeout(() => resolve(2), 20)),
//   new Promise((resolve) => setTimeout(() => resolve(5), 60))
// );
// resultPromise.then((res) => console.log(res));
