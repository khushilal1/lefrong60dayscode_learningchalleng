
// Scheduling: setTimeout and setInterval
// We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.
// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interva
// setTimeout
// The syntax:

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
// Parameters:

// func|code
// Function or a string of code to execute. Usually, that’s a function. For historical reasons, a string of code can be passed, but that’s not recommended.
// delay
// The delay before run, in milliseconds (1000 ms = 1 second), by default 0.
// arg1, arg2…
//without argument
// function sayHI() {
//     console.log("calling the sahi funtion after the given time");
//     console.log("heloo");
// }

// setTimeout(sayHI, 2000)

// // With arguments:
// function sayH(name, sname) {
//     console.log("calling the funtion");
//     console.log(`The fullname be ${name} ${sname}`)
// }

// setTimeout(sayH, 1000, "khushilal", "Singh")

// // With return 
// console.log("With returnm argument");

// function say(fname, lname) {
//     console.log("getting  the parametr from the calling of the funtion");

//     return `The fullname be :${fname} ${lname}`
// }
// let value = setTimeout(say, 1000, "khushilal", "singh")
// console.log(value);

// // **************************************************
// // console.log("If the first argument is a string, then JavaScript creates a function from it.");
// // setTimeout(`console.log("hello")`,1000)//returns the error

// console.log("using strings is not recommended, use arrow functions instead of them, like this:");
// setTimeout(() => {
//     console.log("getting the arrow funtion");
// }, 1)

// console.log(`******************************************************************
// claerTimeOut`);
// Canceling with clearTimeou
// A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.

// The syntax to cancel:

// let timerId = setTimeout(...);
// clearTimeout(timerId);
// let timing = setTimeout(() => {
//     console.log("getting the sset time out as built in funtion");
// },1)
// console.log(timing); // timer identifier

// //cancelling teh time]
// clearTimeout(timing)

// console.log(timing);





// // *************************************************************************************
// console.log(`




// `);
// console.log("hlii");


// setInterval
// The setInterval method has the same syntax as setTimeout:

// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

// function sa(){
//     console.log("calling the main funtion with setinterval");
// }

// setInterval(sa,1)



// To stop further calls, we should call clearInterval(timerId).
// a=0
// const valu=setInterval(()=>{

// a=a+10
// console.log(a);
// if(
//     a==200
// ){
//     clearInterval(valu)
// }
// },1000)

// // after some Second
















// // // repeat with the interval of 2 seconds
// let timerId = setInterval(() => console.log('tick'), 1000);

// function sayH(){
//     console.log("start");
//     console.log("hello ");
// }
// let timerId=setInterval(sayH,1000)
// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); 
//     console.log('stop'); 
// }, 5000);


console.log("Nested setTimeout");
// There are two ways of running something regularly.

// One is setInterval. The other one is a nested setTimeout, 
/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000);


  console.log("Nested setTimeout allows to set the delay between the executions more precisely than setInterval.");
//   Let’s compare two code fragments. The first one uses setInterval:
  let i = 1;
setInterval(function() {
  console.log(i++);
}, 1000);



let j = 1;
setTimeout(function run() {
  console.log(j++);
  setTimeout(run, 1000);
}, 1000);









console.log(`
thods setTimeout(func, delay, ...args) and setInterval(func, delay, ...args) allow us to run the func once/regularly after delay milliseconds.
To cancel the execution, we should call clearTimeout/clearInterval with the value returned by setTimeout/setInterval.
Nested setTimeout calls are a more flexible alternative to setInterval, allowing us to set the time between executions more precisely.
Zero delay scheduling with setTimeout(func, 0) (the same as setTimeout(func)) is used to schedule the call “as soon as possible, but after the current script is complete”.
The browser limits the minimal delay for five or more nested calls of setTimeout or for setInterval (after 5th call) to 4ms. That’s for historical reasons.`);
