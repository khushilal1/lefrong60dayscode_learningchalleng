
// function sum() {

//     console.log(arguments);//returns the object
// }
// sum(23,45)

// old way
// function sum(x,y){
//     return x+y

// }
// console.log(sum(23,444));

// function sum(x,y,z){
//     return x+y+z

// }
// console.log(sum("khushilal",444,64));//doestnit give the satisfacory resukt


// so arguments methood introduce
function sum(){
    var sum=0
   for(let i in arguments){
       sum=sum+arguments[i]
   }
   console.log(sum);

}

sum(54,65, 23.3,"khushilal") //not the satifactoryresut

  ////////////////////////////////////////////////////////////////////
//   Rest opeartor
function add(name,...detail){
    console.log( detail);
    for(let i in detail){
        sum+=detail[i]
    }
    // console.log(sum);
}
add("helllo",123,23434)

// *************************************************
