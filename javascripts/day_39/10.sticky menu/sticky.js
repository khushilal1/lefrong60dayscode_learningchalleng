window.addEventListener("scroll", function () {
    const nav = document.querySelector("#menubar");

    if (window.pageYOffset >= 289) {
        nav.classList.add("sticky");

    }


    if (window.pageYOffset <= 289) {
        nav.classList.remove("sticky");

    }

});
