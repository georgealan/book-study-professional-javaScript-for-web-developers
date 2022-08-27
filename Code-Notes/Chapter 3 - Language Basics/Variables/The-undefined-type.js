/*
The Undefined type has only one value, which is the special value undefined. When a variable is
declared using var or let but not initialized, it is assigned the value of undefined as follows:
*/

let message;
console.log(message == undefined); // true

/*
The typeof operator returns "undefined" when called on an uninitialized variable, but it also
returns "undefined" when called on an undeclared variable, which can be a bit confusing. Consider this example:
*/
let message; // this variable is declared but has a value of undefined

// make sure this variable isn't declared
// let age

console.log(typeof message); // "undefined"
console.log(typeof age);     // "undefined"

/*
The value undefined is falsy; therefore, you are able to more succinctly check for it wherever you
might need to. Bear in mind, however, that many other possible values are also falsy, so be careful in
scenarios where you need to test for an exact value of undefined rather than just a falsy value:
*/
let message; // this variable is declared but has a value of undefined

// 'age' is not declared

if (message) {
// This block will not execute
}

if (!message) {
// This block will execute
}

if (age) {
// This will throw an error
}

