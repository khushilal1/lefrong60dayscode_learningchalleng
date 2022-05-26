var child=document.getElementById("list1")
var parent=child.parentElement;
console.log(parent);

//selscting of the first child
var node =parent.lastElementChild
console.log(node);


////selscting of the last child
var node =parent.lastElementChild
console.log(node);



// ////selscting of the all child
var node =parent.children
for(let i=0;i<node.length;i++){
    node[i].innerHTML="hello"
    node[i].innerText="guys"
    // node[i].value="gettinhg"
    console.log(node[i]);
}


//seleting the sibling
var  current=document.getElementById("sibling")
// selsctig  the previous sibling
current.previousElementSibling
previous_sibling=current.previousElementSibling
console.log(previous_sibling.innerText);
console.log(previous_sibling);



//selsctig  the next sibling
next_sibling=current.nextElementSibling
console.log(next_sibling.innerText);
console.log(next_sibling);
