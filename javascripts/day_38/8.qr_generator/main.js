
// function qrcode() {
//     var text = document.getElementById("text")
//     var loading = document.getElementById("loading")
//     //loading
//     loading.style.display = "block"
// console.log("url loading");
//     text.value = ""
// console.log("image loading");


//     qrimage.onload = () => {
// console.log("image ");

//         loading.style.display = "none"
//     qrimage.src = url
// console.log("not loaded");
//     }

//     //generating qr image


// }

// function image(text){
//     const qrimage = document.querySelector("#image")
//     url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value} `

// }






var  textvalue=document.getElementById("text")
function keypress(){

if(textvalue.value.length!==-1){

    var count=textvalue.value.length+1
    document.getElementById("character").value=count+"chacater"
    count--
    console.log(textvalue.value.length);
 if(count>text.value.length){
console.log("decrese");
    document.getElementById("character").value=textvalue.value.length+"chacater"
    count--
 }
}

// else if(Event.key="Backspace"){
//     console.log("bacspace");
//     var count=textvalue.value.length-1
//     document.getElementById("character").value=count+"chacater"

//     }



}

function qrcode(){
   var  loading=document.getElementById("loading")
   var  qrimage=document.getElementById("image")
//character counting


// document.getElementById("character").innerHTML=tota




// loading

    loading.style.display = "block"
    url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value} `

    textvalue.value = ""
    qrimage.src=url

qrimage.onload=()=>{
    loading.style.display = "none"
}

}