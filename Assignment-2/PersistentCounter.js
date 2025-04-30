function createCounter() {
    let count = 0;
    function incrementCounter() {
    count++;
    return count;
    }
    return incrementCounter;
}
const counterA = createCounter();
console.log(counterA()); // Expected: 1, Actual: ?
console.log(counterA()); // Expected: 2, Actual: ?
const counterB = createCounter();
console.log(counterB()); // Expected: 1 (independent counter), Actual: ?

//The output of the code will be 1 2 1. Yes, Counter A and Counter B will maintain independent counters because 
//for every createCounter() call a new count variable is initialized