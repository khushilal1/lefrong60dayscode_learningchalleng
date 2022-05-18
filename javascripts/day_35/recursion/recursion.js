// Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task. Or, as we’ll see soon, to deal with certain data structures.

// When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself. That’s called recursion.
console.log(Math.pow(2,2));

// power by teh function
// Iterative thinking: the for loop:
function pow(x,n){
    let res=1
    for(i=0;i<n;i++){
        res=res*x
    }
    return res
}

let value=pow(2,3)
console.log(value);



//Recursive thinking: simplify the task and call self:
function pow(x,n){
    if(n==1){
        return x
    }
    else{
        return x*pow(x,n-1)
    }
}

console.log(pow(2,3));