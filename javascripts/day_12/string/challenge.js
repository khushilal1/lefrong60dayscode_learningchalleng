// display only 280 character of the  string lke in twitter
// let mytweet="jfghj  bh  khushila a maioahan an hello"
// let mynew=mytweet.slice(0,280)
// console.log(mynew)
// console.log(mynew.length)


// **************************
// substring method
// it cannot acccept nehative indexing
let str1="Aohan yadav"
// let res=str1.substr(-4)
// console.log(res)  //it preint the string from the lef side


// //replacign method
// let replaceval=str1.replace("mohan","hari")
// console.log(replaceval)



/////////////////////////////////////////////////////
// char at ()
// console.log(str1.charCodeAt(0))
//this provide the unicode at UT-16 code
//give the value between 0 t0 65535



// **************************
// finding the unicode of the last character of the string
let str_1="khushilal"
let lastcahr=str_1.charCodeAt(str_1.length-1)
console.log(lastcahr)