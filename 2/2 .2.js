// Finding Elements 
// Primitive type

const number =[1,2,3,7, 1, 9 , 1];
console.log(number.indexOf("a"));
// if a number isnt available then it will give output of -1
console.log(number.indexOf(1, 3));
// here can we pass another arguments which means search willl begin from 

console.log(number.lastIndexOf(1));
// If we have multiple elements in a array and wanna find last index of it use this

// another way
console.log(number.indexOf(1) !== -1);
// Ugly way

// Modern Way
console.log(number.includes(8));