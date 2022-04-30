// crteating the opbject
// let user =new Object()
// console.log(user) //it give the object containjnjg the key valylue pair

// Literals and properties
// let user={
//     name:'khushilal',
//     age:30,
//     address:"nepal"
// }
// //accessing using . property

// console.log(user.name);
// console.log(user.address);
// console.log(user.age);
// //removing tthe value
// delete user.age;
// console.log(user);


//////////////////////////////////////
// using the function
// let user_detail=function (name,age,address,location,using){
// return{
// name:name,
// age:age,
// address:address,
// location:location,
// using:using
// }
// }


// let user_=user_detail("hariyadav",32,"nepal","nepal","computer")
// console.log(user_.age);
// console.log(user_.name);
// console.log(user_.location);



// suing traditional ffunction method
// function user_detail (name,age,address,location,using){
//     return{
//     name:name,
//     age:age,
//     address:address,
//     location:location,
//     using:using
//     }
//     }


//     let user_=user_detail("hariyadav",32,"nepal","nepal","computer")
//     console.log(user_.age);
//     console.log(user_.name);
//     console.log(user_.location);

// usinf arrow function

// let user_detail=(name,age,address,location,using)=>{
//     return{
//     name:name,
//     age:age,
//     address:address,
//     location:location,
//     using:using
//     }
//     }


//    let user_=user_detail("hariyadav",32,"nepal","nepal","computer")
//     console.log(user_.age);
//     console.log(user_.name);
//     console.log(user_.location);

//   using the object this
// *******************************************************************************************************
// using the function as
// let user={
//     name:"khushilal",
//     age:32
// }

// user.sayhi=function sayhi(){
//     console.log("hello world");
// }
// user.sayhi()
// alert("hello world")
// console.log("hello wolrd")
// console.log("hello wolrd")
// console.log("hello wolrd")

// var element
// element=document.all;
// console.log(element);
// using the methd all


// *********************************************************************************************************************************************************************************
// object  oriented programming

// creating of the object using the constructor
//   that is this. keyword

// ***********************************************************************************************
// Constructor, operator "new"
// obbject oreinted programming

function User(name,location,address){
    this.name=name
    this.address=address
    this.location=location
}
let user_detail=new User("khuhilal","bateswor","nepal") 
console.log(user_detail.name);
console.log(user_detail.address);
console.log(user_detail.location);
