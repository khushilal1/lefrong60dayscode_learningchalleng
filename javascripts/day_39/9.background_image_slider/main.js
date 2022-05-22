// let flag = 0;
// function controller(x) {
//     flag += x
//     //left flag=2-1=1
//     slishow(flag)


//     //right flag=2+1=3
// }

// slishow(flag)


// function slishow(num) {
//     let slides = document.getElementsByClassName("class")

//     if (num == slides.length) {
//         flag = 0
//         num = 0
//     }

//     if (num < 0) {
//         flag = slides.length - 1
//         num = slides.length - 1
//     }


//     for (let i of slides) {
//         i.style.display = "none"
//     }
//     slides[num].style.display = "block"
// }


let flag=1
const arr=document.getElementsByClassName("class")
console.log(arr);


function show(num){
if(num==arr.length){
    num=0
flag=0

}

if(num<0){
    num=arr.length-1
    flag=arr.length-1
}


for (let i of arr){
    i.style.display="none"
}
    
arr[num].style.display="block"
}

function controller(x){//x is getting from the html
flag+=x
show(flag)
}

show(flag)

