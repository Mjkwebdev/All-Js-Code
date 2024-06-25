// Logical Operator with boolean values 
// Falsy values
// undefined 
// null 
// 0
// false 
// ""
// NaN

// if a value is not falsy its truthy
let userColor= undefined;
let defaultColor= "black";
let display = userColor || defaultColor;
console.log(display);
