// Hoisting
// if we call a function before its declaration then it will be executed
// and if we call a function before function expression it will caught ann error
// Js Engine will take all the function declarations to the top and this is Hoisting
walk();
function walk(){
    console.log("walk");
}

move();
let move= function move(){
    console.log("move");
};


