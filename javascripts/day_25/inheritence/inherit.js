
// *************************************************************************
// inheritence in javascript
// as Syntax

class fruit {
    constructor() {
        console.log("I am collection of fruit as constructor funtin");
    }
}//base class
class vegetable extends fruit { }//derived class

let b = new fruit()
// calling of the inhrited class
let c = new vegetable()
//using the arguments
// ******************************************************

class employee{
    constructor(){
        console.log("constructor funtion of Employee");
    }
}

class manager  extends employee{
   constructor(){
super()//calling of super funtion
       console.log("construcor funtionof manager");
   }
}

a=new manager()
