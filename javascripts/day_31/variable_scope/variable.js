// Code blocks
// If a variable is declared inside a code block {...}, it’s only visible inside that block

function hello() {
    let message = "hello"// only visible in this block
    //can aeceesing in side of block
    console.log(message); //hello
}
hello()
//cannot acess outside of thenblock



///////////////////////////////console.log(message);//error message is not drfined





// For if, for, while and so on, variables declared in {...} are also only visible inside
//let is the block level variable


// *****************************************************************
//of the  for loop
for (let i = 0; i < 5; i++) {//indde the block
    console.log(i);
}
//outside the block
// console.log(i);



//////////////////////////////////////////////////////
// Nested functions
function sayhibye(fname, lname) {
    function fullname() {
        return `${fname} ${lname}`//acessing the parametet of the parent funtion
    }
    console.log(`hello ${fullname()}`);
}
sayhibye("khushilal", "mahato")


// ************************************************
// returning a function


function sayhibye(fname, lname) {

    return function fullname(){
        `${fname} ${lname}`//acessing the parametet of the parent funtion
    }
    console.log(`hello ${fullname()}`);
}
sayhibye("khushilal", "mahato")


/////////////////////////////////////////////////////////////
function cout(){
return function (){
        console.log("function returinning "); 

    }
}
cout()


// **************************************************************
// var for the global scope
// const whose value cannot cahnge again again


var message = "Hi";
console.log(message); // Hi

// “var” has no block scope


if (true) {
    var test = true; // use "var" instead of "let"
  }
  
  alert(test); // true, the variable lives after if

//   As var ignores code blocks, we’ve got a global variable test.
if (true) {
    let test = true; // use "let"
  }
  
  alert(test); // ReferenceError: test is not defined
//   ********************************************************************
function sayHi() {
    if (true) {
      var phrase = "Hello";
    }
  
    alert(phrase); // works
  }
  
  sayHi();
  alert(phrase); // ReferenceError: phrase is not defined