//function declaration
// function func() {}

//function expression
// const func = function () {};

//first class function in JS is a function where it is treated as a variable. One function can be passed as an argument to another function

// const a = function (fn) {
//   fn();
// };

// function fn() {
//   console.log("Function argument");
// }

// a(fn);

//---------------------------------------------------------------------------------------------------------------------------->

//IIFE - immedietly invoked function expressions
//In JavaScript, an IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately after its creation.

//in general
// function square(a) {
//   return a * a;
// }

// console.log(square(5));

// console.log(
//   (function square(a) {
//     return a * a;
//   })(5) // IIFE
// );

// console.log(
//   (function func(a) {
//     return a * a;
//   })(5) // IIFE for declared func
// );

// console.log(
//   (function (a) {
//     return a * a;
//   })(5) // IIFE for anonymous
// );

// console.log(
//   ((a) => {
//     return a * a;
//   })(5) // IIFE for arrow func
// );

//---------------------------------------------------------------------------------------------------------------------------->

// func(); // Hoisted
// var a = 10;
// let b = 5;

// function func() {
//   //function has its own scope or context
//   console.log(a); //undefined
//   console.log("Hoisted");
// }

// {
//   console.log(a); //10
//   console.log(b); //5
// }

//---------------------------------------------------------------------------------------------------------------------------->

// PARAMS vs ARGUMENTS //

// function func(a, b) {
//   // received params
//   console.log(a * b);
// }

// func(10, 20); // passed arguments

// //REST vs SPREAD
// function func2(...nums) {
//   //rest operator in which individual elements which are params are combined together as an array

//   console.log(nums);
// }

// const arr = [1, 2, 3];

// func2(...arr); // Spread operator in which an array is spreaded into individual elements

// //rest operator should be always at the last in the params
// function func2(a, b, ...nums) {
//   //rest operator in which individual elements which are params are combined together as an array
//   console.log(a); //1
//   console.log(nums); // [ 3 ]
// }
//---------------------------------------------------------------------------------------------------------------------------->

// function declare() {
//   console.log(arguments);
// }
// declare(1, 2, 3);

// var arrow = () => {
//   console.log(arguments);
// };

// arrow(1, 2, 3);
//---------------------------------------------------------------------------------------------------------------------------->

//THIS//

// const obj = {
//   name: "sai",
//   f1: function () {
//     console.log(this);
//     (() => console.log(this))();
//   },
//   f2: () => console.log(this),
// };

// obj.f1();
// obj.f2();

//---------------------------------------------------------------------------------------------------------------------------->

//PURE FUNCTIONS
// A pure function is a function that, given the same inputs, always returns the same output and does not cause any side effects (i.e., it doesn't modify external state or variables). Pure functions are predictable and easier to test.
// function add(a, b) {
//   return a + b;
// } //This is a pure function because it only depends on its inputs and doesn't modify anything outside of itself.

//---------------------------------------------------------------------------------------------------------------------------->

//INFINITE CURRYING

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }
//Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.
// console.log(add(1)(2)(3)(4)(5)());

//uses
// It helps us to create a higher-order function
// It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
// It is very useful in building modular and reusable code

//Partial Application
// Partial application transforms a function into another function with the small arity. Arity means no. of arguments a function receives

// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// console.log(sum(1)(2, 3));

//---------------------------------------------------------------------------------------------------------------------------->

//CONVERTION INTO CURRYING FUNCTION
// function curry(func) {
//   return function curriedFunc(...args) {
//     if (args.length >= func.length) {
//       return func(...args);
//     } else {
//       return function (...next) {
//         return curriedFunc(...args, ...next);
//       };
//     }
//   };
// }

// const sum = (a, b, c, d) => a + b + c + d;
// const total = curry(sum);
// console.log(total(1)(2)(3)(4));

// function currying(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(currying(1)(2));
