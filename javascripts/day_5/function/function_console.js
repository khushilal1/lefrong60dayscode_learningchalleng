// functioj can be decodeURI;lare by usong the function keyword and the name of function()




function hello(){
    console.log("Hello World");
}

hello();


// funtion with parameters
// syntax be 
// function function_name(parameter1, parameter2){
//     code to be executed


function add(a,b){
    // console.log(a+b);
    return a+b;
}
// let sum=add(2,3)  //passing the arugument to the function
// console.log(sum);

//local variable are thise variable which is decalre inside the function and can onkly be ued insude it but cannot be cahn ege outoutsid the function
//global variable are variable which is decalred outside the function and can be used inside and outside the function 


//  function message(){

//     let name="John"; //local variable
//     console.log(name);
// }
//  message()



//  gloabal variable
// let myName="khushilal" //global varibale
//  function global(){
// let mySurname="SINGH" //LOPCAL  VARIABLE
// console.log(myName+" "+mySurname);
//  }

//  global()


 //changing the l.ocal and global variable
    let Name="khushilal" //global varibale
function change_variable(){

let Name="mohan"  //new varibale with samr nAME CAN BE DECALRED
console.log(Name);
}

console.log(Name);

change_variable() //global 






function change_variable(){
    let N_ame="khushilal" //global varibale

N_ame="mohan" //VALUE CAN ONLY CAHNGE BUT NOT make the new variable with existing name inside the function
console.log(N_ame);
}

change_variable() //global variable can be change ass our requirement

