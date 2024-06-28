// Sum of Multiples of 3 and 5
function sum(limit){
    let sum=0;

    for (let number = 1; number <= limit;number++)
        if (number % 3 === 0|| number % 5===0)
         sum= sum + number;

return sum;
}
let sums = sum(10);
console.log(sums);