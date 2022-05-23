    ///this is he methood of get in dom{document object odule}


var element
// element =document.getElementById("content").innerText 
// element =document.getElementById("content").innerHTML
// element =document.getElementById("context").getAttribute("onClick") //get attribute method
element =document.getElementById("context").getAttributeNode("style") //get attributeNode method
element =document.getElementById("context").attributes//get attribute method
element =document.getElementById("context").attributes[2]//get attribute method
console.log(element)


/////////////////////////
// this is the method of set in Dom

var ele
// ele=document.getElementById("body").innerText=`<h1>     what a nice day </h1>` ////////it direct print the all the written txt
// ele=document.getElementById("body").innerHTML=`<h1>     what a nice day </h1>` ////////it direct print the all the written txt
//set attribute
// ele=document.getElementById("body").setAttribute("class","xyz")
// ele=document.getElementById("body").getAttribute("class")  //it reurns the change value of attributee
ele=document.getElementById("body").removetAttribute("class")
ele=document.getElementById("body").getAttribute("class") 
console.log(ele);

