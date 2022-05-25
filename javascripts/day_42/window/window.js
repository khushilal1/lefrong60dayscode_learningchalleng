`// Global object
// The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.

// In a browser it is named window, for Node.js it is global, for other environments it may have another name.
// All properties of the global object can be accessed directly:
//window is the global object

// window.alert("hello")
window.console.log("hello")
///////////////////////////////////////////////////
let  gvar=5
alert(
    window.gvar
    
    )//undefined



    //using the const keyword for declaring the variable
const g_var=5
alert(
    window.g_var//undefined
    )


    //using the const keyword for declaring the variable

var  gva_r=5
// window.console.log(gvar)
alert(
window.gva_r
)//5


`


// console.log("use of Using for polyfills");
// console.log(window.Promise);

if (window.Promise) {
    alert("your browser is new")
  }
  else{
    alert("Your browser is really old!");
      
  }

  console.log(window.innerHeight);
  console.log(window.innerWidth);


  console.log(`
  Summary
The global object holds variables that should be available everywhere.

That includes JavaScript built-ins, such as Array and environment-specific values, such as window.innerHeight – the window height in the browser.

The global object has a universal name globalThis.

…But more often is referred by “old-school” environment-specific names, such as window (browser) and global (Node.js).

We should store values in the global object only if they’re truly global for our project. And keep their number at minimum.

In-browser, unless we’re using modules, global functions and variables declared with var become a property of the global object.

To make our code future-proof and easier to understand, we should access properties of the global object directly, as window.x.`);
