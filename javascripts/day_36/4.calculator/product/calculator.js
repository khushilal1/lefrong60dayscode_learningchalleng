//the funtion vuse to clear all the thinks
function clearscreen() {
    document.getElementById("result").value = " "
}

//the funtion dispay th value
function display(value) {
    var ans=document.querySelector("#result")
    ans.value =ans.value+ value
}

// the functio to evaluate
function calculate() {

    var p = document.getElementById("result").value
   
        var calculated = eval(p)

    
    document.getElementById("result").value = calculated
}

