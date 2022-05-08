//old mrthod of conatenning of the two array
var arr1=[1,2,3,4,6]
var arr2=[6,7,8,9,10]
var arr3=arr1+arr2//return the string
var arr3=arr1.concat(arr2)//retrun the object as array

console.log(arr3);
console.log(typeof arr3);
// *****************************************
// spread operator
var arr1=[1,2,3,4,6]
var arr2=[6,7,8,9,10]
var arr3=[...arr1,...arr2]//retrun the object as array as shortcut
console.log(arr3);
console.log(typeof arr3);

//with object 
var obj1={"name":"khushilal","age1":20,"city":"nepal"}
var obj2={"wifi":234,"rate":233}
var obj3={...obj1,...obj2}//retrun the object as array as shortcut
console.log(obj3);
console.log(typeof obj3);