/*
’const’ Declarations

const behaves identically to that of let but with one important difference—it must be initialized
with a value, and that value cannot be redefined after declaration. Attempting to modify a const
variable will result in a runtime error.
*/

const age = 36;
age = 20; // TypeError: assigment to a constant.

// const still disallows redundant declaration
const name = 'Matt';
const name = 'Nicholas'; // SyntaxError

// const is still scoped to blocks
const name = 'Matt';
if (true) {
const name = 'Nicholas';
}
console.log(name); // Matt

/*
The const declaration is only enforced with respect to the reference to the variable that it points to.
If a const variable references an object, it does not violate the const constraints to modify properties
inside that object.
*/
const person = {};
person.name = 'Matt'; // ok

/*
Even though the JavaScript engine is creating new instances of let iterator variables in for loops, and
even though const variables behave similarly to let variables, you cannot use const to declare for loop iterators:
*/
for (const i = 0; i < 10; ++i) {} // TypeError: assignment to constant variable

/*
However, if you were to declare a for loop variable that is not modified, const is allowed—precisely
because a new variable is declared for each iteration. This is especially relevant in the case of for-of
and for-in loops:
*/

let i = 0;
for (const j = 7; i < 5; ++i) {
console.log(j);
}
// 7, 7, 7, 7, 7

for (const key in {a: 1, b: 2}) {
console.log(key);
}
// a, b

for (const value of [1,2,3,4,5]) {
console.log(value);
}
// 1, 2, 3, 4, 5





