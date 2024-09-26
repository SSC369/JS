// function sayHelloWorld() {
//     return sayGoodbyeWorld();
//     var sayGoodbyeWorld = function () {
//       return "Hello, World!";
//     };
//   }

//   console.log(sayHelloWorld()); // TypeError: sayGoodbyeWorld is not a function

//   function sayHelloWorld() {
//     return sayGoodbyeWorld();
//     function sayGoodbyeWorld() {
//       return "Hello, World!";
//     }
//   }

//   console.log(sayHelloWorld()); // Hello, World!

// {
//   var a = 5; // vars are global scoped
// }

// console.log(a); // 5

// {
//   let b = 5; // let, const are only block scoped
// }

// console.log(b); // ReferenceError: b is not defined

// function func() {
//   console.log(a); // undefined
//   var a = 3;
// }
// func();

//---------------------------------------------------------------------------------------------------------------------------->

//Variable shadowing

// For example, let and const variables are stored in separate memory space, so it is called block-scoped but var variables can be accessed outside the block as it is stored in the Global object memory space, hence it is called Global scoped.

// function func2() {
//   let a = 3;
//   var b = 5;
//   let c = 6;
//   if (true) {
//     let a = 4; // variable shadowing
//     let b = 6; // legal shadowing
//     var c = 7; // Illegal shadowing bcoz let is block scoped and var is global scoped, we can change var into let, but cannot let into var
//     console.log(a);
//     console.log(c); // syntax error, b has been already declared
//   }
//   console.log(a);
// }
// func2();

// re-declared :) , re-assignable :)
// var a = 5;
// var a;
// var a = 6;
// console.log(a);

// LET cannot be re-declared, but can update it's value
// re-declared :(, re-assignable :)
// let b;
// let b = 5;
// {
//     let b;
//     console.log(b) //No error because of block variable shadowing
// }
// console.log(b); // SyntaxError: Identifier 'b' has already been declared

//CONST cannot be re-declared or re-assignable and must and should assign a value while declaring a value
// re-declared :(, re-assignable :(
// const c = 5;
// const c = 6
// console.log(c); // SyntaxError: Identifier 'c' has already been declared

//during the creation phase javascript engine moves all variables and functions to the top of scope or code , this is known as hoisting, only declarations are hoisted but not values for variables

//let. const are hoisted in temperal dead zone, it's like waiting zone for variables to get assigned, but only var can be hoisted

// console.log(a); // ReferenceError: a is not defined
// function f() {
//   console.log(a); // undefined
//   var a = 10;
//   console.log(a); // 10
//   console.log(b, c); //reference error;  cannot access b before initialization, bcoz let, const aren't hoisted
//   let b = 10;
//   const c = 10;
// }

// f();
