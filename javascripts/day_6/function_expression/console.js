
// arrow function
// the synntax of arrow function be 
// let func=function(arg1,arh2,arg3){
//     return arg1+arg2+arg3;
// }

let sum=(a,b)=>a+b; // the arrow function is not required to have the name of the function
console.log(sum(2,3));//its return the value of the function
// it is the way of declaring functin in verty short cut as same as lambda functuion ij python

// multiline arrow function
let add= (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  alert( add(1, 2) ); // 3


  let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();


// JavaScript specials