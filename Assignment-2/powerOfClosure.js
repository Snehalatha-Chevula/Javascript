function setupCounter(initialValue) {
    let count = initialValue;
    function increment() {
        count++;
        return count;
    }
    function decrement() {
        count--;
        return count;
    }
    return {
        increment: increment,
        decrement: decrement
    };
}
const counterOne = setupCounter(5);
console.log(counterOne.increment());
console.log(counterOne.increment());
const counterTwo = setupCounter(10);
console.log(counterTwo.decrement());
console.log(counterOne.decrement());

/*
Task - 1
A closure allows inner function to access the outer function variables. Every time setupCounter is called a new 
execution is created with its own count variable where the increment an decrement functions are specific to this 
count variable.
*/

/*
Task - 2
*/
function createGreeting(greet){
    function greeting(names){
        return greet+" "+names;
    }
    return {greeting};
}
let a = createGreeting("Hello");
console.log(a.greeting("World"));

/*
Task - 3 and Task - 4
*/
function secretHolder(secret){
    function getSecret(){
        return secret;
    }
    function setSecret(newkey){
        secret = newkey;
    }
    return{
        getSecret, setSecret 
    };
}
let key = secretHolder("Sneha");
console.log(key.getSecret());
key.setSecret("Snehalatha");
console.log(key.getSecret());
