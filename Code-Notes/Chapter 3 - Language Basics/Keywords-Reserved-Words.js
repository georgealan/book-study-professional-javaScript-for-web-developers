/*
KEYWORDS AND RESERVED WORDS

ECMA-262 describes a set of reserved keywords that have specific uses, such as indicating the beginning
or end of control statements or performing specific operations. By rule, keywords are reserved
and cannot be used as identifiers or property names. The complete list of keywords for ECMA-262,
sixth edition is as follows:

break       do          in            typeof
case        else        instanceof    var
catch       export      new           void
class       extends     return        while
const       finally     super         with
continue    for         switch yield
debugger    function    this
default     if          throw
delete      import      try

The specification also describes a set of future reserved words that cannot be used as identifiers
or property names. Though reserved words don’t have any specific usage in the language, they are
reserved for future use as keywords.

The following is the complete list of future reserved words defined in ECMA-262, sixth edition:

Always reserved:

enum

Reserved in strict mode:
implements      package         public
interface       protected       static
let             private

Reserved in module code:
await

These words may still not be used as identifiers but now can be used as property names in objects.
Generally speaking, it’s best to avoid using both keywords and reserved words as both identifiers and
property names to ensure compatibility with past and future ECMAScript editions.
*/