var app = document.getElementById("content")
// console.log(app.innerHTML);
// app.innerHTML="<h1>hello</h1>"
//adding the elemnt in the html
var h1 = document.createElement("h1")
app.appendChild(h1)

//adding the text
var text = document.createTextNode("This is the h1 tag")
h1.appendChild(text)

//adding the id  and class
h1.className="h1tag"
console.log(document.querySelector(".h1tag").innerHTML);
//adding id
h1.id="tag"
//appending in body
var h2=document.createElement("h2")
let text_=document.createTextNode("this is the h2 tag")
h2.appendChild(text_)

document.body.appendChild(h2)//appenfin in tthe bodys
