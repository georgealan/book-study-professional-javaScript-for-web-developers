/*
Prior to the advent of let, for loop definition involved using an iterator variable whose definition
would bleed outside the loop body:
*/

for(var i = 0; i < 5; i++) {
    // Do loop things.
}
console.log(i); //5

/*
This is no longer a problem when switching to let declarations, as the iterator variable will be
scoped only to the for loop block:
*/

for(let i = 0; i < 5; i++) {
    // Do loop things
}
console.log(i); // ReferenceError: i isn't definied

/*
When using var, a frequent problem encountered was the singular declaration and modification of
the iterator variable:
*/
 for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0)
 }
 // You might expect this to sonsole.log 0, 1, 2, 3, 4
 // But it'll actually console.log 5, 5, 5, 5, 5
/*
This happens because the loop exits with its iterator variable still set to the value that caused the
loop to exit: 5. When the timeouts later execute, they reference this same variable, and consequently
console.log its final value.

When using let to declare the loop iterator, behind the scenes the JavaScript engine will actually
declare a new iterator variable each loop iteration. Each setTimeout references that separate
instance, and therefore it will console.log the expected value: the value of the iterator variable
when that loop iteration was executed.
*/

for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0)
}
// console.logs: 0, 1, 2, 3, 4
// This per-iteration declarative behavior is applicable for all styles of for loops, including for-in and for-of loops.


