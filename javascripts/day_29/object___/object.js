//creting of the objectlet 
// let varaible name=mew Object
let user = new Object // "object constructor" syntax
console.log(user);
console.log(typeof user);

// by the object liiterral
let user_ = {};  // "object literal" syntax
console.log(user_);
// *********************
// Literals and properties

let user1 = {
    name: "khushilal",
    age: 30
}

console.log(user1);


// ************************
// We can add, remove and read files from it at any time.

// Property values are accessible using the dot notation:
// acessing
console.log(user1.name);
console.log(user1.age);

//deleting
console.log(delete user1.name);
console.log(user1);
console.log(user1.name);


// We can also use multiword property names, but then they must be quoted:
let user2 = {
    name: "khushilal",
    age: 30,
    "my favourite color": "green"// multiword property name must be quoted
}

console.log(user2[3]);//undefined
// ******************************************
// Square brackets
//accessing the mullt word key
console.log(user2["my favourite color"]);
// deletig the milti word 
console.log(delete user2["my favourite color"]);
console.log(user2);



// **********************************************************************************
// Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility.
// imporatnat
//  Property value shorthand
console.log("from the funtion");
function makeuser() {
    return {
        name: "khushilal ram",
        age: 39
    }
}
let user4 = makeuser()
console.log(user4);



// Property existence test, “in” operator
// "key" in object
//  any name finding project 
let user5={nme:"monan",age:30}
value="name" in user5
if(value==true) {
console.log( user5.name);}
else{
    console.log("name dosenot ffound");
}



///////////////////////////////////// 

console.log("  ///////////////////////////////////// using the for in loop")
// The “for…in” loop
// for (key in object) {
//     // executes the body for each key among object properties
//   }

  let user6={
      name:"khushiala",
      age:34,
      location:"dahnusha",
    eduaction:"bachelor degree"
  }

  for(let key in user6){
    //   console.log(key);
      console.log(`the key be ${key} and therie value be ${user6[key]}`);
  }