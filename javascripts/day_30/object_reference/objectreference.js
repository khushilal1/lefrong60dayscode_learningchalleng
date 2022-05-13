// Object references and copying
// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
let user = {
    name: "John",
    age:23
};
console.log(user);
let admin = user//copying the value by the reference 
admin.name="khushil;a"// changed by the "admin" reference
admin.age=30
console.log(admin); // 'khusilal', changes are seen from the "user" reference
// ********************************************
// Comparison by reference
// Two objects are equal only if they are the same object.

// For instance, here a and b reference the same object, thus they are equal:
console.log("by the reference");
let a = {};
let b = a; // copy the reference

console.log( a == b ); // true, both variables reference the same object
console.log( a === b ); // true



// ******************************************************
let c= {};
let d= {}; // two independent objects

console.log( c== d ); //false


console.log(`***************************************************
Cloning and merging, Object.assign`);

let user1={
    name:"khushilala",
    age:30
,
"language":"nepali",
location:"dhanusha"



}

console.log("copuying to other variable");
let user2={}

for(let key in user1){
    user1[key]=user2[key]
}

console.log(user2);