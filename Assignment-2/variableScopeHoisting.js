console.log(mysteryVariable);
let mysteryVariable = 10;
console.log(mysteryVariable);
function revealMystery() {
    console.log("Inside revealMystery:", mysteryVariable);
    let mysteryVariable = 20;
    console.log("Inside revealMystery (after declaration):", mysteryVariable);
}
revealMystery();
console.log("After revealMystery:", mysteryVariable);

/*
The output of the code will be:
ReferenceError: Cannot access 'mysteryVariable' before initialization
When a variable is created using let keyword it is hoisted on to the top but is not initialized with any default 
value like undefined, accessing them before declaration gives error because they are in temporal deadzone(The period of time when they are declared but not yet
available for use is the TDZ. )
*/

/*
The variables and function declarations are moved to the top of scope in Javascript, this is known as Hoisting.
The varibales created using let,var and const are hoisted, the difference is that, the varibales declared with var are
hoisted and initialized with default value(undefined), thus accessing before declaration gives us undefines, where as
the let and const keywords are not initialized, hence accessing them leads to reference error as they are in temporal
dead zone.
*/