function sum(a,b){
    return a+b;
}
// oops i forgot to enter the 2nd arguments in this case we will gwt an output of NaN 

// console.log(sum(1));
// incase we have many arguments  will only get the output will adding first two values

// oky so what if we wanna add as much arguments as we enter';
// IN JS theres an function like Arguments
function sums(){
    let total=0;
    for (let items of arguments)
        total+=items;
    console.log(total);
}
console.log(sums(1,2,3,5,5));