// calllback function
const student = [{
    name: "harry", subject: "javascripts"
},
{ name: "mohan", subject: "machine laerning" }
]

//funtion enrollstudents
//funtion getstudents
function enrollstudents(student) {
    setTimeout(function () {
        student.push(student)
    console.log("students ha been enrlled");

    }, 4000)

}

function getstudents() {
    setTimeout(function () {
        let str = ""
        student.forEach(function (student) {
            str = str + `<li>${student.name}</li>`
console.log("students has been fetched")
        })
        document.getElementById("student").innerHTML = str
    }, 3000)

   
}
let newstudent={name:"sunny",subject:"python"}
enrollstudents(newstudent)
getstudents()