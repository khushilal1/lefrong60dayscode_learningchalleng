let win = document.getElementById("para");
let score = document.getElementById("chance");
let repeat = document.getElementById("repeat");
let number = Number(score.innerHTML);
let clear = document.getElementById("clear")

function checking() {
    var guess_ = document.getElementById("value")
    var guess = Number(guess_.value);
    var secret = Math.floor(Math.random() * 20 + 1)
    // var secret = 5;
    console.log(secret);
    console.log(guess);

    if (guess < 0 || guess > 20) {
        win.innerText = "Invalid!!!";
    } else if (guess == 0) {
        score.innerText = `Enter the number you guessed`;
        number = number - 1;
        score.innerHTML = `${number}`;
        if (number == 0) {
            win.innerText = `Sorry you lost game`;
        }
    } else if (secret == guess) {
        document.body.style.backgroundColor = "green";
        win.innerText = "you won";
        clear.innerHTML = ""





    } else if (guess > secret) {
        win.innerText = "your guessing is greater\n";
        number = number - 1;
        score.innerHTML = `${number}`;
        guess_.innerHTML = ""


        if (number == 0) {
            win.innerText = `Sorry you lost game`;
        document.body.style.backgroundColor = "red";

        }
    } else {
        win.innerText = "Your guessing is smaller ..\n";
        number = number - 1;
        score.innerHTML = `${number}`;
        guess_.innerHTML = ""


        if (number == 0) {
            win.innerText = `Sorry you lost game`;
        document.body.style.backgroundColor = "red";

        }
    }
}

repeat.addEventListener("click", function () {
    score.innerHTML = "20";
    win.innerText = ` `;
    document.getElementById("value").inner=` `
});
