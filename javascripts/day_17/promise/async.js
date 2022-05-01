// There’s a special syntax to work with promises in a more comfortable fashion, called
// “async/await”. It’s surprisingly easy to understand and use.sync function f() {
// async function f() {
//     return 1;
//     }

async function fnc(){
    return Promise.resolve(1)
}

let result=fnc().then(console.log("completely executed"))
console.log("the promise reolved"+result);

// Await
// the syntax be
// let value=await promise

async function func(){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("resolvved completely")},100)
    })

    let result=await promise
    console.log("awaiting");
    console.log(result);
}

// func()

async function func(){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{reject(new Error("erroe take place"))},100)
    })

    let result=await promise
    console.log("awaiting");
    console.log(result);
}

// func()

// ********************************************
 function f() {
    let promise = Promise.resolve(1);
    let result = await promise; // Syntax error
    }

// error cancell if we use async

async function f() {
    let promise = Promise.resolve(1);
    let result = await promise; // Syntax error
}
