/*
ECMAScript variables are loosely typed, meaning that a variable can hold any type of data. Every
variable is simply a named placeholder for a value. There are three keywords that can be used to
declare a variable: var, which is available in all ECMAScript versions, and const and let, which
were introduced in ECMAScript 6.
*/

// The "var" Keyword
var myVariable; // Without initialization, it holds the special value undefined


var myVariable = "hello";
/*
Here above, message is defined to hold a string value of "hi". Doing this initialization doesn’t mark the
variable as being a string type; it is simply the assignment of a value to the variable. It is still possible
to not only change the value stored in the variable but also change the type of value, such as this:
*/

var myVariable = 100; /* Legal, but not recommended, Although it’s not recommended to switch the data type that a
                         variable contains, it is completely valid in ECMAScript.*/


/* VAR Declaration scope
It’s important to note that using the var operator to define a variable makes it local to the function
scope in which it was defined. For example, defining a variable inside of a function using var means
that the variable is destroyed as soon as the function exits, as shown here:
*/

function test(){
    var message = "hi!"; // Local variable
}

test();
console.log(message); // Error

/*
Here, the message variable is defined within a function using var. The function is called test(),
which creates the variable and assigns its value. Immediately after that, the variable is destroyed so
the last line in this example causes an error. It is, however, possible to define a variable globally by
simply omitting the var operator as follows:
*/
function test(){
    message2 = "Hello"; // Global variable
}
test();
console.log(message2); // Good, will execute ok.
/*
By removing the var operator from the example, the message variable becomes global. As soon as the
function test() is called, the variable is defined and becomes accessible outside of the function once
it has been executed.

NOTE Although it’s possible to define global variables by omitting the var operator, this approach is not recommended. 
Global variables defined locally are hard to maintain and cause confusion because it’s not immediately apparent if
the omission of var was intentional. Strict mode throws a ReferenceError when an undeclared variable is assigned a value.
*/

/*
More than one variable in one statement
If you need to define more than one variable, you can do it using a single statement, separating each
variable (and optional initialization) with a comma like this:
*/
var message = "hi",
    found = false,
    age = 29;
/*
Here, three variables are defined and initialized. Because ECMAScript is loosely typed, variable initializations
using different data types may be combined into a single statement. Though inserting line breaks and indenting 
the variables isn’t necessary, it helps to improve readability. When you are running in strict mode, you cannot 
define variables named eval or arguments. Doing so results in a syntax error.

Var declaration Hoisting

When using var, the following is possible because variables declared using that keyword are hoisted
to the top of the function scope:
*/

function foo(){
    console.log(age);
    var age = 26;
}
foo(); // undefined
// This does not throw an error because the ECMAScript runtime technically treats it like this:

function foo() {
    var age;
    console.log(age);
    age = 26;
}
foo(); // undefined

// This is “hoisting,” where the interpreter pulls all variable declarations to the top of its scope. It also
// allows you to use redundant var declarations without penalty:
function foo() {
    var age = 16;
    var age = 17;
    var age = 36;
    console.log(age);
}
foo(); // 36

/*
(let) Declarations

let operates in nearly the same way as var, but with some important differences. Most notable is
that let is block scoped, but var is function scoped.
*/

if (true) {
    var person = "George";
    console.log(person); // George
}
console.log(person); // George

if (true) {
    let age = 35;
    console.log(age); // 35
}
console.log(age); // ReferenceError: age is not defined
/*
Here, the age variable cannot be referenced outside the if block because its scope does not extend
outside the block. Block scope is strictly a subset of function scope, so any scope limitations that
apply to var declarations will also apply to let declarations.

A let declaration also does not allow for any redundant declarations within a block scope. Doing so
will result in an error:
*/
var name;
var name;

let age;
let age; // SintaxError: identifier 'age' has already been declared.

/*
Of course, the JavaScript engine will keep track of identifiers used for variable declarations and the
block scope they were declared inside, so nesting using identical identifiers behaves as you would
expect with no errors because no redeclaration is occurring:
*/

var name = "George";
console.log(name); // George
if (true) {
    var name = "Carlos";
    console.log(name); // Carlos
}

let age = 30;
console.log(age); // 30
if (true) {
    let age = 26;
    console.log(age); // 26
}

/*
The declaration redundancy errors are not a function of order, and are not affected if let is mixed
with var. The different keywords do not declare different types of variables—they just specify how
the variables exist inside the relevant scope.
*/
var name;
let name; // SyntaxError

let age;
let age; // SyntaxError

/* 
Another important behavior of let distinguishing it from var is that let declarations cannot be used
in a way that assumes hoisting:
*/

// Name is hoisted
console.log(name); // Undefinied
var name = "George";

// age is not hoisted
console.log(age); // ReferenceError: age isn't defined
let age = 26;
/*
When parsing the code, JavaScript engines will still be aware of the let declarations that appear later
in a block, but these variables will be unable to be referenced in any way before the actual declaration
occurs. The segment of execution that occurs before the declaration is referred to as the “temporal
dead zone,” and any attempted references to these variables will throw a ReferenceError.

Global Declarations

Unlike the var keyword, when declaring variables using let in the global context, variables will not
attach to the window object as they do with var.
*/

var name = "Julius";
console.log(name); // Julius

let age = 35;
console.log(age); // Undefinied
/*
However, let declarations will still occur inside the global block scope, which will persist for the
lifetime of the page. Therefore, you must ensure your page does not attempt duplicate declarations in
order to avoid throwing a SyntaxError.



*/





















