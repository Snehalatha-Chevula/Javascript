//Code - 1
function delayedGreeter(names) {
    for (var i = 0; i < names.length; i++) {
        setTimeout(function() {
        console.log(`Hello, ${names[i]}!`);
        }, i * 1000);
    }
}
delayedGreeter(['Alice','Bob','Charlie']);

//Code - 2
function delayedGreeterCorrected(names) {
    for (var i = 0; i < names.length; i++) {
    (function(index) { // IIFE creates a new scope for each iteration
        setTimeout(function() {
            console.log(`Hello, ${names[index]}!`);
            }, index * 1000);
        })(i); // Pass the current value of 'i' into the IIFE
    }
}
delayedGreeterCorrected(['Alice', 'Bob', 'Charlie']);

// Code - 3
function delayedGreeterLet(names) {
    for (let i = 0; i < names.length; i++) { // Using 'let' 
        setTimeout(function() {
            console.log(`Hello, ${names[i]}!`);
        }, i * 1000);
    }
}
delayedGreeterLet(['Alice', 'Bob', 'Charlie']);

/*Code - 1 
The output of the code is:
Hello, undefined!
Hello, undefined!
Hello, undefined!
Var is function scoped and by the time setTimeout function executes the loops completes execution and everytime 
it prints the array of 3 which is undefined.
*/

/*Code - 2
The output of the code is:
Hello, Alice!
Hello, Bob!
Hello, Charlie!
Here we are using Immediately Invoked Function Expression(IIFE) where for every iteration we are creating a 
function wheere we are storing the i value in index variable and everytime the setTimeout function is executed 
the respected index value is printed.
*/

/*Code - 3
The output of the code is:
Hello, Alice!
Hello, Bob!
Hello, Charlie!
let is a block scoped where a new copy of i is created for each iteration and the i in setTimeout function refers to
respective index.
*/ 