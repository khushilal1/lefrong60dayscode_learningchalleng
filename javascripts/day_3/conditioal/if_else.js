// the if else with their shor cut
// let age = 17
// if (age >= 18) {
//     console.log("you you can   vote");
// }

// else {
//     console.log("ypu are not eligible to vote")
// }

// short cut using the ternary oprator

// the synrax be as 
// variable_name=(condition)?true_value:false_value;

// the above can used as 
// age = 23
// let result = (age > 12) ? "you can vote" : "you can not vote";
// console.log(result)



//swithc statemet
// finding the area ,rectanglr,and traingle on the clcik of of all that
// var area="sare"
// var pI=3.1425
// var l=34,b=23,R=64
// if(area=="circle"){
//     console .log("the area of circle be "+pI*R*R)




// }
// else if(area=="rectangle"){
//     console.log("the area of rectangle be "+l*b)
// }

// else if(area=="triangle"){
//     console.log("the area of triangle be"+0.5*l*b)
// }
// else{
//     console.log("please enter the valid data")
// }




// switch statment 
// var area = "circle"
// pI = 3.233
// var l = 45, b = 43, R = 435
// switch (area) {
//     case "circle":
//         console.log("the area of circle be " + pI * R * R)

//     case "rectangle":
//         console.log("the area of rectangle be " + l * b)

//     case "triangle":
//         console.log("the area of triangle be " + 0.5 * l * b)
//     case
//         "square":
//         console.log("the area of square be " + l * l)
//     default:
//         console.log("please enter the valid data")
// }

//  beak statement

var area = "triangle"
pI = 3.233
var l = 45, b = 43, R = 435
switch (area) {
    case "circle":
        console.log("the area of circle be " + pI * R * R)
break;
    case "rectangle":
        console.log("the area of rectangle be " + l * b)
break;
    case "triangle":
        console.log("the area of triangle be " + 0.5 * l * b)
        break;
    case
        "square":
        console.log("the area of square be " + l * l)
        break;
    default:
        console.log("please enter the valid data")
}