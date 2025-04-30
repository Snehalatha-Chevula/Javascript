// Code - 1
const user = {
    name: "Alice",
    greetDelayed: function() {
        setTimeout(function() {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};
user.greetDelayed(); // Expected: Hello, Alice! (after 1 second), Actual: ?

// Code - 2
const userCorrectedTraditional = {
    name: "Alice",
    greetDelayed: function() {
        const self = this; // Store a reference to 'this' 
        setTimeout(function() {
            console.log(`Hello, ${self.name}!`);
        }, 1000);
    }
};
userCorrectedTraditional.greetDelayed(); // Now works as expected

// Code - 3
const userCorrectedArrow = {
    name: "Bob",
    greetDelayed: function() {
        setTimeout(() => { // Arrow function here
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};
userCorrectedArrow.greetDelayed(); // Works perfectly!

/*
In setTimeout function this is not referrring to the object it is referring to undefined or global object.
*/

/*
Here we are storing the reference of the object in self so when we access self.name, it is pointing to 
the correct value.
*/

/*
Arrow funtion don't hace their own this they take the value of this from surrounding context, this is known as 
lexical binding.
*/

const obj = {
    bike : "Royal Enfield",
    display : function(){
        setTimeout(function(){
            console.log(`The bike name is ${this.bike}`);
        },1000)
    }
}
console.log(obj.display());

const obj1 = {
    bike : "Royal Enfield",
    display : function(){
        setTimeout(() =>{
            console.log(`The bike name is ${this.bike}`);
        },1000)
    }
}
console.log(obj1.display());