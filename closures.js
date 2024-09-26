// for (var i = 0; i < 3; i++) {
//   // var is function-scoped: In JavaScript, var declarations are not block-scoped (unlike let or const). The variable i in the for loop is shared across all iterations of the loop.

//   // Asynchronous behavior of setTimeout: The setTimeout function doesn't execute its callback immediately. It schedules the callback to run after the specified delay (in this case, 1000 milliseconds). By the time the setTimeout callback runs, the for loop has already finished executing and i has become 3.

//Closure and reference to i: All the setTimeout callbacks refer to the same i, which has already been incremented to 3 after the loop finishes. So, when the timeout callbacks are executed, they log the value of i, which is 3 by that time.
//   setTimeout(() => {
//     console.log(i); // output: 3 3 3
//   }, 1000);
// }

// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(() => {
//       console.log(i); // output: 0 1 2
//     }, 1000);
//   }
//   inner(i);
// }

function counter() {
  var counter = 0;
  function add(n) {
    counter += n;
  }
  function result() {
    return "count is " + counter;
  }
  return { add, result };
}

// const c = counter();
// c.add(10);
// c.add(15);
// console.log(c.result());

//---------------------------------------------------------------------------------------------------------------------------->
//Module Pattern

var module = (() => {
  function privateSumMethod(nums) {
    let sum = 0;
    for (var i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }

  return {
    publicSumMethod: (...args) => {
      return privateSumMethod(args);
    },
  };
})();

// const nums = [1, 2, 3, 4];
// console.log(module.publicSumMethod(...nums));

//---------------------------------------------------------------------------------------------------------------------------->

// make it run only once polyfill

function once(func, context) {
  let run;
  return function () {
    if (func) {
      run = func.apply(context || this, arguments);
      func = null;
    }
    return run;
  };
}

const res = once(
  function () {
    console.log("It run's only once's");
    console.log(this.name);
  },
  { name: "Pikachu !" }
);
// res();
// res();
// res();
// res();

//---------------------------------------------------------------------------------------------------------------------------->

//CACHING

function cache(func, context) {
  let memo = {};

  return function (...args) {
    let arg = JSON.stringify(args);

    if (!memo[arg]) {
      let res = func.apply(context || this, args);
      memo[arg] = res;
    }
    return memo[arg];
  };
}

// function expensive() {
//   console.log(this);
//   for (let i = 0; i < 1000000; i++) {}
//   return arguments;
// }
// let nums = [1, 2, 3, 4];

// console.time("t");
// const cachedResult = cache(expensive, { name: "Music" });
// const res = cachedResult(nums);
// console.log(res);
// console.timeEnd("t");

// console.time("t");
// const res2 = cachedResult(nums);
// console.log(res2);
// console.timeEnd("t");

//---------------------------------------------------------------------------------------------------------------------------->
