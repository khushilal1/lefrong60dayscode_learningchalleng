// // Methods pop/push, shift/unshift
// let fruits = ["Apple", "Orange", "Pear","banana"];
// console.log(fruits.pop())
// console.log(fruits)



// // *
// // push
// let fruit= ["Apple", "Orange", "Pear","banana"];
// console.log(fruit.push("laptop"))
// console.log(fruit)

// // ***
// // shift
// console.log(fruit.shift())
// console.log(fruit.unshift("mobile_phone"))
// console.log(fruit)



// // *******************
// // multidimendional Array
// let mark=[
//     [1,2,3,4],
//     [6,7,8,9],
//      [10,11,12,13]
// ]

// console.log(mark[1][6])


// ********************************
// // saerchinfg in the Array


// ********************
// array concatenate
// let array=[1,2,3,4,5]
// console.log(array.concat([67,8,9],[86785,768]))

// // ndexOf/lastIndexOf and includes













// ***************************************
// Insert and 


// challenging time
// var month=["march","may"]
// console.log(month)

// //adding dcemenber at end
// console.log(month.push("december"))
// console.log(month)

// //adding januaryt at begin
// console.log(month.unshift("january"))
// console.log(month)


// //splic method
// console.log(month.unshift("january"))
// console.log(month)


////////////////////////// splice mthod univesal method
// const month_1=["march","june","august"]
// //adding dcemenber at end
// const new_month=month_1.splice(0,0,"october")
// console.log(month_1)


/*************************** */
// searching in the file
const material = ['laptop', "computer", "mobile", "tablet", "iphone"]

// adding mouse in the above Array


// const newmaterial=material.splice(0,0,"mouse")
// console.log(material)



// adding miuse at the place of computer
// const newma = material.splice(1, 1, "mouse")
// console.log(material)
//adding of the mouse at any palce in the above array
const newindex = material.indexOf("mouse")
console.log(newindex)
if (newindex == -1) {
    console.log("mosue is not present")
    console.log(material.splice(material.lenght-1.,1,"mouse"))
    console.log(material)

}

else {

    console.log("mouse is present")
    console.log(material.splice(newindex, 1, "mouse"))
    console.log(material)
}





// challenge Time
// map method and filter

// const array=[1,2,3,4,5,6,7,8,9,10]
// let newarray=array.map((current_element,index,arr)=>{
//     return current_element>=9
// })

// console.log(newarray)



// *************
// real use of map funvction


const array=[1,2,3,4,5,6,7,8,9,10]

let newarray=array.map((current_element,index,arr)=>{
    return `index no. ${index} and value be:${current_element} belong to ${arr}`
})

console.log(newarray)


// ********
// using with foeEAcah mthod

const array1=[1,2,3,4,5,6,7,8,9,10]

let newarray1=array1.map((current_element,index,arr)=>{
    return `index no. ${index} and value be:${current_element} belong to ${arr}`
})

console.log(newarray1)














// **********************************************************************
// // challenge time 
// // find the square root of each element in an array 
// let array_challen=[1,9,16,25,36,49,64,81,100]
// let arraysqr=array_challen.map((current_element,index,array_challen)=>{
// return `the square root of ${current_element} is ${Math.sqrt()} at the index${index} belong to ${array_challen}`
// })
// console.log(arraysqr)


// ****************************************************************
let arraynum=[1,2,3,4,5,6,7,8,9,10]
let newnum=arraynum.map((current_element)=>{
    let result=2*current_element
    if(result>9){
        console.log(result)
    }
    else{
       
        console.log(`the result be lower than 9 be ${result}`)
    }})