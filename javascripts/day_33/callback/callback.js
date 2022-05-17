// Many functions are provided by JavaScript host environments that allow you to schedule asynchronous actions. In other words, actions that we initiate now, but they finish later.

// For instance, one such function is the setTimeout function.

// There are other real-world examples of asynchronous actions, e.g. loading scripts and modules (we’ll cover them in later chapters).

// Take a look at the function loadScript(src), that loads a script with the given src:
// // function loadScript(){
//     console.log("laodscript fn");
// }
// loadScript()



// *****************************************************
function loadScript(src) {
    // creates a <script> tag and append it to the page
    // this causes the script with given src to start loading and run when complete
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
  }