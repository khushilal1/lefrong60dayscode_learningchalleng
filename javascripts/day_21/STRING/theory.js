// finding sring in string_4
const string="i am  happy with my laptop"
console.log(string)

//indexof can be used to check is threre hta string is availabble or not
console.log(string.indexOf("khushilal")) //it gives he -1 which means there is not the givn string is found
console.log(string.indexOf("laptop")) //it gives he -1 which means there is not the givn string is found
console.log(string.indexOf("happy")) //it gives he -1 which means there is not the givn string is found


//last index of seacrhing from backward
console.log(string.indexOf("l",-1))

//seacrh method
let laptop=string.search("laptop")
console.log(laptop)


//exrtacting string paerts
// slice method
var str="apple,banana,kiwi"
let result=str.slice(0,5)
console.log(result)


///emailslice
var email="mahatokhushilal2019@gmail.com "
domain_name=email.slice(-5,-1)
console.log(`the domain of the above gamil bb as :${domain_name}`)






// split method

let spli="k,h,u,,s,h,i,l,a,l"
console.log(spli.split(","))









// *****************************************************************
