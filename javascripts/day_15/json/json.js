// JSON methods, toJSON
let user={
    name:"khushilal",
    lname:"mahato",
    age:20,

toString(){
    return `name:${this.name} and lastname:${this.lname}`
}}

console.log(user);


// conversion of the object into jsoon and vice versa
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
//   coversion from object to the JSON


console.log(typeof student); 
let json_file=JSON.stringify(student)
console.log(json_file);
console.log(typeof json_file); 
// *******************************************************

// JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.
// JSON-string to parse.
// stringified array

let string = "[0, 1, 2, 3]";  //in jso string
console.log(typeof string);

let obj_file=JSON.parse(string)
console.log(obj_file);
console.log(typeof obj_file);


let string_obj={"name":"khushilal",sname:"mahato"  ,age:30}
console.log(string_obj);