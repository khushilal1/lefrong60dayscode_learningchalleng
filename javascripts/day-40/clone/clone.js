var parent=document.getElementById("menu")
// console.log(parent);
//only copying of the parent
var to_clone=parent.cloneNode(false)
console.log(to_clone);


//only copying of the parent  with child elemnt
var to_clone=parent.cloneNode(true)
console.log(to_clone);