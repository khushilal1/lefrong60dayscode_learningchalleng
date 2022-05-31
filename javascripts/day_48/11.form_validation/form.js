var username = document.querySelector("#text")
var password = document.querySelector("#password")
var text = document.getElementById("fromtext")
let flag=1

function validateform() {
    if (username.value.length ==0) {
        text.innerHTML = "Username is Empty"
flag=0

    }

   else if (username.value.length<3) {
        text.innerHTML = "Required min 3 character!"
        flag=0
   }

else{
    text.innerHTML = ""
flag=1
}


if (password.value =='') {
    pass.innerHTML = "Invalid password!"
    flag=0

}
else{
    pass.innerHTML=""
    flag=1
}


if(flag){
    return true

}
else{
    return  false
}




        // else if(username.value==)

}