"use strict";

/*
ECMAScript 5 introduced the concept of strict mode. Strict mode is a different parsing and execution
model for JavaScript, where some of the erratic behavior of ECMAScript 3 is addressed and
errors are thrown for unsafe activities. To enable strict mode for an entire script, include the following
at the top: "use strict";

Although this may look like a string that isn’t assigned to a variable, this is a pragma that tells supporting
JavaScript engines to change into strict mode. The syntax was chosen specifically so as not to
break ECMAScript 3 syntax.

You may also specify just a function to execute in strict mode by including the pragma at the top of
the function body:
*/

function doSomething() {
    "use strict";
    // Function body
}

/*
Strict mode changes many parts of how JavaScript is executed, and as such, strict mode distinctions
are pointed out throughout the book. All modern browsers support strict mode.
*/