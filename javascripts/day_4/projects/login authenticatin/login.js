function login() {

    let username = prompt("Enter your username");
    if (username === "admin") {
        let password = prompt("enter your password")
        if (password==="pass") {
            alert("welcome")
        } else if (password==="") {
            alert("canceled")
        } else {
            alert("wrong password")
        }
    
    }
}