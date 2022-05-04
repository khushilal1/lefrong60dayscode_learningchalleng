// In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).
// class MyClass {
//     // class methods
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
//   }

class User {

    constructor(name) { //constructor
        this.name = name;
    }

    sayHi() {
        console.log((this.name));//method
    }

}
let user = new User("khushilal")
console.log(user);
user.sayHi()
console.log(typeof user);  //calling the funtion inside the class
console.log(typeof User);  //calling the funtion inside the class
//   A new object is created.
// The constructor runs with the given argument and assigns it to this.name.
// …Then we can call object methods, such as user.sayHi()
// In JavaScript, a class is a kind of function.

// ******************************************************************************

let Hifun = class {
    sayHi() {
        console.log(("Hello"));
    }
};
new Hifun().sayHi()

// *****************************************************************
// Getters/setters, other shorthand





























console.log("GETTER ANd SETTER");
class Finder {
    constructor(name) {
        console.log(" before costructor calculation");
        this.name_ = name
        console.log(" after costructor calculation");

    }

    get name() {
        console.log("  get calculation");

        return this.name
    }


    // set name(value) {
    //     if (namelength < 4) {
    //         console.log("name is too sjhort");
    //     }

    //     else {
    //         this._name = name
    //         console.log("the nmae having the letteer greater than 4");
    //     }
    // }


}

let result = new Finder("khushilal")
console.log(result);











class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
        console.log(this.name);
    }

sayHi(){
    console.log("hello guys");
}

    // run(speed) {
    //     this.speed += speed;
    //     console.log(`${this.name} runs with speed ${this.speed}.`);
    // }

    
    // stop(speed) {
    //     this.speed = 0;
    //     console.log(`${this.name} stopped.`);
    // }
}
let animal = new Animal("My animal");
animal.sayHi()