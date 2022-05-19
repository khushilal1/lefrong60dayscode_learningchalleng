var increment = document.querySelector("#increment")
var remai = document.querySelector("#paragraph")
var decrement = document.querySelector("#decrement")

function increase() {
    var remain = document.querySelector("#paragraph")
    value = remain.innerHTML

    value++
    color(value)

    document.getElementById("paragraph").innerHTML = value
        ;
}


function decrease() {
    var remain = document.querySelector("#paragraph")
    value = remain.innerHTML

    value--
    color(value)

    document.getElementById("paragraph").innerHTML = value
}


function reset() {
    var remain = document.querySelector("#paragraph")
    value = remain.innerHTML
    value = 0
    color(value)

    document.getElementById("paragraph").innerHTML = value
}



function color(value) {
    if (value > 0) {
        document.getElementById("paragraph").style.color = "red"
        document.getElementById("paragraph").style.border = "10px"
        document.getElementById("paragraph").style.backgroundColor = "yellow"
    }
    else if (value == 0) {
        document.getElementById("paragraph").style.color = "black"
        document.getElementById("paragraph").style.backgroundColor = "green"


    }

    else {
        document.getElementById("paragraph").style.color = "black"
        document.getElementById("paragraph").style.backgroundColor = "purple"



    }
}