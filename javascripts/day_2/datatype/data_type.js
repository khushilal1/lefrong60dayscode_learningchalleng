// data type is a ceratin type of data that is stored in a variable.
// data types are used to store data in a variable.

let message="Hello World";
message=123;
console.log(message);

// Number
let n=123; //this represnet the number
n=123.45; //this represnet the floating point number
console.log(n);


//infinity

console.log(1/0); //THIS GIVE THE INinity number

console.log(Infinity) //THIS GIVE THE Infinity number

console.log("not a number"/2); //THIS GIVE THE NaN number


// NaN is a number that is not a number
console.log(NaN+1); //THIS GIVE THE NaN numberna
console.log("no a number"/2); //THIS GIVE THE NaN number

// console.log(typeof NaN); //THIS GIVE THE NaN number


// BigInt
// in javasccripts 
// BigInt representh the number that is greater than the number that is represent by the number that is greater than (2^53-1) and less than -(2^53-1)

const num=123456789012345678901234567890123456789067575666666666666666666666666666666
console.log(num);

// String
// a tring in the javascripts must be inside the quottaioon("")

let str="heloo"  //this is a string under rge double quotation
console.log(str);
console.log(typeof str);
let str2='mohan is a good' //this is a string under the single quotation
console.log(str2);
let tsr3=`${str} ${str2}`//this is a string under the back tick
console.log(tsr3);



// quotauion example
let name="mohan";
let surname="kumar";

let fullnme=`${name} ${surname}`;
console.log(fullnme);

//using the mahematical exprression
console.log(`${name} ${surname} ${1+2+33+3}`);

//boolean(logical type)
// this retuirn  the result as treu or false statement

let isGreater=10>5; //this retuirn  the result as true
console.log(isGreater);

let isSmaller=10<5; //this retuirn  the result as false
console.log(isSmaller);

let isEqual=10==10; //this retuirn  the result as false
console.log(isEqual);

let iEqual=10==10; //this retuirn  the result as false
console.log(iEqual);

//the null value
// this is a value that is not assigned to any value
let age=null;
console.log(age)


//undefined value
// the meaninng of the (undefined) is the varlue is not assinged

let age2;  //THUS VARIABLE STORE THE UNDEFINED VALUE
console.log(age2);
console.log(typeof age2); //this is the undefind type of data type



// object and the Symbol
//the object type is special type of data type that is used to store data in a key value pair



// type of operATOE
// typeof operator is used to retuirn the type of the data type
let age3=10;  //this is the number
console.log(typeof age3);

let str4="mohan"; //this is the string
console.log(typeof str4);

let float=10.5; //this is the floating point number
console.log(typeof float);

let bool=true; //this is the boolean
console.log(typeof bool);

let large=1234567890123456789012345678901234567890675756666666666666666666666666666n; //this is the bigint
console.log(typeof large);

let sign=Symbol("id"); //this is the symbol
console.log(typeof sign )//this is the symbol

let notification=alert()//this is the alert
console.log(typeof notification) 