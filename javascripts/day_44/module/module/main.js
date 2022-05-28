// In this tutorial you will learn javascript modules tutorial in Hindi, Urdu.You can learn what is modules in javascript es6 version in hindi.
// syntax 
// export let name="yahoo baba"//exporting the files

// function hello(){
// }
// class user{
// }

// in html<script type="module" src=file payh></script>
// *********************************************************************************
// import { message,user,car } from "./library.js";
// console.log(message);
// document.getElementById("paragraph").innerHTML=message

// user("khushilal")

// //caliinig the class
// let obj=new car("maruti","black","maruticompay")
// console.log(obj);
// document.write(obj)

// **********************************************************
import * as fun from "./library.js";
let a=new fun.car("maruti","black","maruticompay")
console.log(a.property());