//SHADOW COPY Vs DEEP COPY

// The newly created object has the same memory address as the old one.
// let employee = {
//   id: "E102",
//   name: "Jack",
//   address: "New York",
//   salary: 50000,
// };
// let newEmployee = employee; // Shallow copy
// newEmployee.name = "Sai";
// console.log(newEmployee); //{ id: 'E102', name: 'Sai', address: 'New York', salary: 50000 }
// console.log(employee); //{ id: 'E102', name: 'Sai', address: 'New York', salary: 50000 }
// From the above example, it is seen that when the name of newEmployee is modified, it is also reflected for the old employee object. This can cause data inconsistency. This is known as a shallow copy. The newly created object has the same memory address as the old one.

//DEEP COPY

// let employee2 = {
//   id: "E102",
//   name: "Jack",
//   address: "New York",
//   salary: 50000,
// };
// let newEmployee2 = JSON.parse(JSON.stringify(employee));
// newEmployee.name = "Sai";
// console.log(newEmployee2); //{ id: 'E102', name: 'Sai', address: 'New York', salary: 50000 }
// console.log(employee2); //{ id: 'E102', name: 'Jack', address: 'New York', salary: 50000 }

// A deep copy, on the other hand, creates a completely independent copy of the object, including all nested objects or arrays. This ensures that changes made to one object do not affect the other. Each object is stored in a separate memory location, making them entirely independent.

// Objects, arrays, strings, finite numbers, true , false , and null are supported and can be serialized and restored these are serialized objects

//console.log(JSON.stringify(Infinity));  output: null, because NaN , Infinity , and -Infinity are serialized to null, these are non-serialized objects.

// Limitations of JSON.parse() and JSON.stringify()
// While the JSON approach is simple, it has its limitations:

// Non-Serializable Properties: Functions, undefined, and certain other non-serializable values are lost when using JSON.stringify().
// Circular References: Objects with circular references will cause JSON.stringify() to throw an error.
// Date Objects: Dates are converted to strings during the process, losing their original type.

//---------------------------------------------------------------------------------------------------------------------------->

//Double Equal To (==) and TYPE COERCION

// Also known as the equality operator, it checks for equality between two variables after converting them to a common type. This is known as type coercion.
// Performs type conversion if necessary. For example, 1 == '1' evaluates to true because it converts the string '1' to the number 1 before comparing.
// More flexible but can lead to unexpected results due to implicit type conversion.

// Triple Equal To (===)

// Also known as the strict equality operator, it checks for equality between two variables without converting them to a common type. It checks both value and type.
// Does not perform type conversion. For example, 1 === '1' evaluates to false because one is a number and the other is a string, and their types do not match.
// Less flexible but more predictable because it does not perform any type conversion.

//---------------------------------------------------------------------------------------------------------------------------->
