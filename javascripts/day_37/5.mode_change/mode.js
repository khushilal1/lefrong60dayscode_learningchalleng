


function mode(){
    var light=document.getElementById("mode").value
    if(light==="Dark Mode"){
        document.body.style.background="black"
        document.getElementById("mode").value="Light Mode"
    document.getElementById("change").value="click below to switch dark mode"

        document.getElementById("content").style.color="white"
        document.getElementById("image").src="image/light.png"
        document.getElementById("content").innerHTML="Dark mode"
        
    }
else{
    document.body.style.background="white"
    document.getElementById("mode").value="Dark Mode"
    document.getElementById("transfer").value="click below to switch light mode"
    document.getElementById("content").style.color="black"
    document.getElementById("content").innerHTML="Light mode"
    document.getElementById("image").src="image/dark.png"


   
}
} 
