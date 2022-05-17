let user=["khushilal","mahato","nepal"]
//detrsucturing
let [fname,lname]=user
console.log(fname);
console.log(lname);
console.log(user[2]);

// *****************************
//with the defauklt value
let user2=["khushilal","mahato",["male",2344456],"nepal"]
//detrsucturing
let [Fname,Lname,[gender,salry]]=user
console.log(Fname);
console.log(Lnamee);
console.log(salry);

// *********************
// using the rest operator

let use3=["khushilal","mahato",["male",2344456],"nepal"]
//detrsucturing
let [fName,lName,...arr1]=user
console.log(fName);
console.log(lName);
console.log(arr1[1]);

