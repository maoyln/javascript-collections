// function doSomething(a) {
//     console.log("Doing something...");
//     b = a + doSomethingElse(a * 2)
//     console.log(b * 3);  // 15
// }

// function doSomethingElse(a) {
//     console.log("Doing something else...");
//     return a - 1;
// }
// var b;

function doSomething(a) {
    console.log("Doing something...");
    b = a + doSomethingElse(a * 2)
    console.log(b * 3);  // 15
    var b;
    function doSomethingElse(a) {
        console.log("Doing something else...");
        return a - 1;
    }
}

doSomething(2);