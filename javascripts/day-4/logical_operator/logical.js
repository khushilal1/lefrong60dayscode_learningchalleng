// logical operator
// there are four logical operatro in javascripts
// and((&&), or(||), not(!), and not operator


// OR(||)
// this logiical or opeartoe is represented by two vertical lin/e
// if one of the condition is true then it will return true otherwise it returns false
// in the case of boolean algebaric expression

console.log(true || true);// it print the true
console.log(true || false);// it print the true
console.log(false || true);// it print the true
console.log(false || false);// it print the false

// in  the case of numeriacl valu
console.log(0||1);// it print the 1
console.log(1||0);// it print the 1
console.log(0||0);// it print the 0
console.log(1||1);// it print the 1

//
let hour=23
if(hour<10||hour>18){
    console.log("it is not working time");
}


// some advance ferature of javascripts
console.log(null||undefined);// it print the undefined
console.log(undefined||null);// it print the null

console.log(null||undefined||0)//it pritnt 0
console.log(null||undefined||1)//it pritnt 1
console.log(undefined||null||1)//it pritnt 1

// advanced examples
let first="world" //it print world
let second=""
let third="hello"

console.log(first||second||third);// it print the hello

// shoet circuit evaliuation
true||console.log("hello");// it print nothing
false||console.log("hello");// it print the hello

// and(&&)
// this logical and operator is represented by two double ampersand(&&)
// if both the condition is true then it will return true otherwise it returns false

console.log(true && true);// it print the true
console.log(true && false);// it print the false
console.log(false && true);// it print the false
console.log(false && false);// it print the false



// interrestin exampl
let hr=23
let min=30
if(hr && min){
    console.log((`it time is ${hr}:${min}`));
}



//if the first value if true it retirn the second value
// and if tge firdt if fsse it return the first vakue
console.log(1 && 0);// it print the 0
console.log(0 && 1);// it print the 0
console.log(1 && 1);// it print the 1
console.log(0 && 0);// it print the 0

console.log(6 && 5);// it print the 5


// not operatot
// it represented by exclamation mark(!)
// it is used to reverse the boolean value


console.log(!true);// it print the false
console.log(!false);// it print the true