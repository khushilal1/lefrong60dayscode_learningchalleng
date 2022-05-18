// function perform(){
//     let showingcolor=document.querySelector(".anyColor")

//     const color=showingcolor.innerText==="red"?"green":"red";
//     showingcolor.innerHTML=color
//     document.querySelector(".background").style.backgroundColor=color

// }


function perform() {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    var t =(Math.random())
    var a=t.toFixed(2)
    var color = "rgba(" + r + "," + g + "," + b + "," + a+")"
    document.getElementById("anyColor").innerText=color
    document.body.style.background=color;

}
