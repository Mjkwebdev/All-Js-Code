// Testing an array
const numbers = [0,2,-1,3];

const allPositive = numbers.every(function(value){
    return value>=1;  
})
// Every Function
console.log(allPositive);
//It checks that whether all the numbers matches the criteria 
//it returns boolean

// Some Function
// It checks whether atleast one entry matches the criteria

const OnePositive = numbers.some(function(value){
    return value===1;  
})

console.log(OnePositive);
