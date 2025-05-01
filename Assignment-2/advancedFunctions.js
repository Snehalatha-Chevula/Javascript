function flexibleFunction(a, b, ...rest) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("rest:", rest);
}
flexibleFunction(1);
flexibleFunction(1, 2);
flexibleFunction(1, 2, 3, 4, 5);

/*
Task - 1
If the arguments are fewer than the parameters they are assigned undefined value, else if the arguments are more
then the parameters the rest parameter allows to accept indefinite number of arguments.
*/

/*
Task - 2
Rest parameter syntax : ...rest
the rest parameter allows to accept indefinite number of arguments and it should be the last parameter.
*/

//Task - 3
function sumAll(...rest){
    let sum = 0;
    for(let i=0;i<rest.length;i++)
        sum += rest[i];
    return sum;
}
console.log(sumAll(1,2,3));

//Task - 4
function processArguments(funct,...rest){
    return funct(...rest);
}

function primary(...rest){
    let product = 1;
    for(let i=0;i<rest.length;i++)
        product *= rest[i];
    return product;
}

console.log(processArguments(primary,1,2,3,4,5));


