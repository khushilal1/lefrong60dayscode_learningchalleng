
// calling functin way of caling hthe function

// 2nd way
const contentchange=()=>{
document.getElementById("heading").innerHTML="hello"
}


// 3rd way of writting the function



const callfunction= ()=>{
alert("calling the fnction with high demnad")
}

const thidway=document.getElementById("thirdway")
thirdway.onclick=()=>{
    alert("hello this is way of id calling functio")
}




const fourthway=document.querySelector("#fourway")
fourthway.addEventListener("click",()=>{
    alert("this forth way of calling function")
})