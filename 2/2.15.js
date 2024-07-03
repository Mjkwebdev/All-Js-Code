// Reducing an Array

const  nums= [7, 9,7];

// for (let n of nums )
//     sum += n;


// There would be an easy and simple way to reduce elements 
// Using Reduce method;
const sum = nums.reduce(function(value , sum){
     return sum+ value;
}, 0);

console.log(sum);

// reduce takes 2 elememts => function and initialization value