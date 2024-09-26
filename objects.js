// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// for (key in obj) {
//   console.log(key);
// }

// let nums = [1, 2, 3];

// for (k in nums) {
//   console.log(k);
// }

let obj = {};
let a = { a: 1 };
let b = { b: 1 };

obj[a] = 1; //dynamic key value so it is taking a object as a key
console.log(obj);
delete obj["[object Object]"];
obj.a = 1; // predefined key with a value
console.log(obj);
