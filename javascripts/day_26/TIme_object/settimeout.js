
// var show=document.querySelector("#shwowName")
// var btn=document.querySelector("#button")


// const  showname=()=>{
// setTimeout(()=>{
// show.innerHTML="khushilal"
// },1000)
// }

// btn.addEventListener("click",showname)

const showName = () => {
    document.getElementById("showName").innerHTML = "loading..."
    setTimeout(() => {
        document.getElementById("showName").innerHTML = "khushilal"

    }, 2000)
}

// ******************************************************************
// clear time out


const start = () => {
    setTimeout(() => {
        document.getElementById("try").innerHTML = alert("tour timing has stopped")
    }, 3000
    )

}

const stop = () => {
    clearTimeout(() => {
        document.getElementById("block").innerHTML = alert("you alcell timibg series")
    }, 1000)
}

// *****************************************************************************
// set setInterval
let num = 0
const shownum = () => {
    document.getElementById("increasing").innerHTML = "loading..."
    setInterval(() => {
        document.getElementById("increasing").innerHTML = `${num}`
        num++
    }
        , 1000)

}
// clearInterval

const dnum = () => {
    clearInterval(() => {

    })
}

// ******************************************
// next method
// starting of the Number
const startbutton = document.querySelector("#button1")
const stopbuttton = document.querySelector("#button2")

let n = 0
const showname = () => {
    document.getElementById("increasing").innerHTML = "loading...."

    timeref = setInterval(() => {
        document.getElementById("increasing").innerHTML = `${n}`
        n++
    }, 1000)
}
startbutton.addEventListener("click", showname)

// stopping of the Number
const stopnum = () => {

    clearInterval(timeref)
}
stopbuttton.addEventListener("click", stopnum)