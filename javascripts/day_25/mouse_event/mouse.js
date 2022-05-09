// function doconfirm(){
//     return confirm("Are you sure")
// }

// //by calling the tage name
// var a=document.getElementsByTagName("a")

// for(var i=0;i<a.length;i++){
// a[i].style.background="red"

//     a[i].onclick=function (){
//         return confirm("Are you sure? to getting into the given link")
  
// //stying with the css

//     }
// }




//////mouseover event

var el=document.getElementById("mouse");
var a=0
var b=0
sum=100

// for(i=0;i<1;i++){
// el.onmouseover=()=>{
   
//         sum=sum+i
//         document.getElementById("counter").innerHTML=sum
//     }
   
// }

//on click on the mose

// for(i=0;i<1;i++){
//     el.onmousedown=()=>{
       
//             sum=sum+i
//             document.getElementById("counter").innerHTML=sum
//         }
       
//     }



    
for(i=0;i<1;i++){
    el.onmouseleave=()=>{
       
            sum=sum-i
            document.getElementById("counter").innerHTML=sum
        }
       
    }




    
    