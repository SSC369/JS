//Map polyfill
// let nums = [1, 2, 3, 4];

// const res = nums.map((num, index, arr) => {
//   return num + 1;
// });

// Array.prototype.myMap = function (cb) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     res.push(cb(this[i], i, this));
//   }
//   return res;
// };

// let result = nums.myMap((n, i, arr) => {
//   return n * 3;
// });

// Array.prototype.myMap = function (cb) {
//   //     In JavaScript, arrow functions do not have their own this context; they inherit this from the surrounding scope,
//   return (() => {
//     console.log(this);
//     let res = [];
//     for (let i = 0; i < this.length; i++) {
//       res.push(cb(this[i], i, this));
//     }
//     return res;
//   })();
// };
// const result = nums.myMap((n, i, arr) => {
//   return n * 3;
// });
//---------------------------------------------------------------------------------------------------------------------------->

//Filter polyfill
// Array.prototype.myFilter = function (cb) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       res.push();
//     }
//   }
//   return res;
// };
// const myFilterResult = nums.myFilter((n, i, arr) => {
//   return n > 2;
// });

//ForEach polyfill
// Array.prototype.myForEach = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     this[i] = cb(this[i], i, this);
//   }
// };

// nums.myForEach((n, i) => {
//   return n * 2;
// });
//console.log(nums); [ 2, 4, 6, 8 ]

//---------------------------------------------------------------------------------------------------------------------------->
//REDUCE
//nums.reduce((acc, cur, i, arr) => {}, initialValue);

// nums = [1, 2, 3, 4];
// Array.prototype.myReduce = function (cb, initialValue) {
//   let acc = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     acc = initialValue ? cb(acc, this[i], i, this) : this[i];
//   }
//   return acc;
// };

// console.log(nums.myReduce((acc, cur) => acc + cur, 3)); // 13
//---------------------------------------------------------------------------------------------------------------------------->

//APPLY
// Function.prototype.myCall = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(this + "Not callable");
//   }

//   context.fn = this;
//   context.fn(...args);
// };

// function add(...args) {
//   console.log([...this.nums, ...args]);
// }

// let obj = {
//   nums: [1, 2, 3, 4],
// };

// add.myCall(obj, 5, 6, 7);
//---------------------------------------------------------------------------------------------------------------------------->

// Function Apply
// Function.prototype.myApply = function (context = {}, args = []) {
//   if (typeof this !== "function") {
//     throw new Error(this + "Not callable");
//   }

//   if (!Array.isArray(args)) {
//     throw new TypeError("Args must and should be an array for apply");
//   }

//   context.fn = this;
//   context.fn(...args);
// };

// function add(...args) {
//   console.log([...this.nums, ...args]);
// }

// let obj = {
//   nums: [1, 2, 3, 4],
// };

// add.myApply(obj, [5, 6, 7]);
//---------------------------------------------------------------------------------------------------------------------------->

// Function Bind
// Function.prototype.myBind = function (context = {}, args = []) {
//   if (typeof this !== "function") {
//     throw new Error(this + "Not callable");
//   }

//   if (!Array.isArray(args)) {
//     throw new TypeError("Args must and should be an array for apply");
//   }

//   context.fn = this;
//   return function () {
//     return context.fn(...args);
//   };
// };

// function add(...args) {
//   console.log(this);
//   console.log([...this.nums, ...args]);
// }

// let obj = {
//   nums: [1, 2, 3, 4],
// };

// const bindFunction = add.myBind(obj, [5, 6, 7]);
// bindFunction();
//output: [
//     1, 2, 3, 4,
//     5, 6, 7
//   ]

//---------------------------------------------------------------------------------------------------------------------------->

//Promise

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 1000);
});

myPromise.then((data) => {
  console.log(data);
});

//---------------------------------------------------------------------------------------------------------------------------->
