var box_con=document.getElementById("box")
// with including the margin
var width=box_con.offsetWidth;
console.log(width);
var height=box_con.offsetHeight;
console.log(height);


//widthout themargin
var width=box_con.clientWidth;
console.log(width);
var height=box_con.clientHeight;
console.log(height);