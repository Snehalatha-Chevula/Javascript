for (let i = 0; i<10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    if (i === 7) {
        break;
    }
    console.log(i);
}

/*
Task - 1
When continue statement is used in loops, it skips the current iteration and jumps to next iteration.
*/

/*
Task - 2
The break statement in loops is used to terminate the execution of loop.
*/

//Task - 3
for(let i=1;i<=20;i++){
    if(i%5 === 0)
        continue;
    if(i > 15)
        break;
    console.log(i);
}
/*
Predicted output:
1 2 3 4 6 7 8 9 11 12 13 14
*/

//Task - 4
const values = [10,5,8,20,3,15,25];
for(let i of values){
    if(i > 12){
        console.log("Found a large number!");
        break;
    }
    if(i === 5){
        console.log("Skipping 5!");
        continue;
    }
    console.log(i);
}
/*
Predicted Output:
10
Skipping 5!
8
Found a large number!
*/