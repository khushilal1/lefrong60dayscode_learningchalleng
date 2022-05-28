// import {name} from `./file.js`
// console.log(name);

// export let message="hello ,I am module form libraray module"

// export function user(name){
//     console.log("hello,I am a funtiom");
//     console.log(`hello ${name}`);


// }

// // importing or exporting class

// export  class car{
//     constructor(name,color,brand){
//         console.log("i am constructor");
// this.name=name
// this.color=color
// this.brand=brand
//     }
//     property(){
//         return `the name b:${this.name} with ${this.color} of ${this.brand}`
//     }
// }
// *********************************************************************************************
//expot at one class


 let message="hello ,I am module form libraray module"

 function user(name){
    console.log("hello,I am a funtiom");
    console.log(`hello ${name}`);


}

///importing  the class

  class car{
    constructor(name,color,brand){
        console.log("i am constructor");
this.name=name
this.color=color
this.brand=brand
    }
    property(){
        return `the name b:${this.name} with ${this.color} of ${this.brand}`
    }
}


export{message,user,car}

// ****************************************************************************************************
