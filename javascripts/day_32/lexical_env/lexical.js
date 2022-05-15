// In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.
// The Lexical Environment object consists of two parts:

// 1.Environment Record – an object that stores all local variables as its properties (and some other information like the value of this).
// 2.A reference to the outer lexical environment, the one associated with the outer code.

// A “variable” is just a property of the special internal object, Environment Record. “To get or change a variable” means “to get or change a property of that object”

// In this simple code without functions, there is only one Lexical Environmen
let phrase="hello"
console.log(phrase);
// This is the so-called global Lexical Environment, associated with the whole script.
// What is a lexical environment?
// A lexical environment is a data structure that holds identifier-variable mapping. (here identifier refers to the name of variables/functions, and the variable is the reference to actual object [including function object or primitive value]. Lexical in general means in hierarchy or in a sequence
