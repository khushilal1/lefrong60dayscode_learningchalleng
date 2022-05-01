// promise is saema s the analogy of the real promise
// let promise=new Promise(function(resolve,reject))
// The function passed to new Promise is called the executor


// hen the executor finishes the job, it should call one of the functions that it gets as arguments:
// resolve(value) — to indicate that the job finished successfully:
// sets state to "fulfilled" ,
// sets result to value .
// reject(error) — to indicate that an error occurred:
// sets state to "rejected" ,
// sets result to error

// (the setTimeout ):
// let promise = new Promise(

//     function (resolve, reject) {
//         console.log("before execution of the resolve fntin");
//         resolve("done")

//         setTimeout(() => resolve("done"), 3000)
//         console.log("After execution of the resolve function")

//     }

// )
// console.log(promise);



// ********************************************

// let promise_ = new Promise(

//     function (resolve, reject) {
//         console.log("before execution of the resolve fntin");


//         setTimeout(() => reject(new Error("whoops wrong")), 3000)
//         console.log("After execution of the resolve function")

//     }

// )

// *******************************************************
// with the combined the both resolve and reject funvttion


let promise__ = new Promise(function (resolve, reject) {
    resolve("excutionbe resove and completed")

    reject(new Error("get error"))
    setTimeout(() => {
        resolve("_")
    })
})

console.log(promise__ );



let attack=new Promise (function(resolve,reject) {

resolve(12334)
})

console.log(attack); //return the promise


// Consumers: then, catch, finally

// then
// promise.them(
//     function(result){},//give the result when the resolve is successful
//     function (error){}
// )
//it is a syntax of the functon

//execting the resolve funtin

let promise1=new Promise(function(resolve,reject){

setTimeout(()=>{
    console.log("resolving the given promise");
    resolve("exection completed")},2000)
})
promise1.then(
    result=>console.log(result),
    error=>console.log(error)
)

//execting the resolve funtin
// let promise2=new Promise(function(resolve,reject){

//     setTimeout(()=>{
//         console.log("getting the errror the given promise");
//         reject(new Error(("exection completed")))},2000)
//     })
//     promise1.then(
//         result=>console.log(result),
//         error=>console.log(error)
//     )


    // If we’re interested only in successful completions, then we can provide only one function
// argument to .then :
let promise3=new Promise(function(resolve,reject){
setTimeout(()=>{resolve("exectuion completed")},1000)}
)

//getting the resolved promise the
promise3.then(
    result=>console.log(result)
)




// catch this for the obnly error handlin
let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
    });

promise4.catch()








// finallly
// The call .finally(f) is similar to .then(f, f) in the sense that it always runs when the
// promise is settled: be it resolve or reject.
new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), 2000)
    })
    .finally(() => alert("Promise ready"))
    .then(result => alert(result))










    // ***************************************************************************************
    
    // challene time

    
    let promise = new Promise(function(resolve, reject) {
        resolve(1);
        setTimeout(() => resolve(2), 1000);
        });
        promise.then(console.log("hello world"))