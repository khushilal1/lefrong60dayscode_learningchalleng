// to get only time 
// use the method as 
// .toLocaleImeString //only get time
// .toLocaleDateString //only get date
// .toLocaleString //only get time and date

function time() {
    setInterval(() => {
        var currtime = new Date()
        var time = currtime.toLocaleTimeString()
        document.getElementById("demo").innerHTML = time
    })



}



function date() {

    setInterval(() => {
        var currtime = new Date()
        var time = currtime.toLocaleDateString()
        document.getElementById("demo1").innerHTML = time

    });

}



function time_date() {
    setInterval(() => {
        var currtime = new Date()
        var time = currtime.toLocaleString()
        document.getElementById("demo2").innerHTML = time
    })

}