// 1= 00000001
// 2= 00000010
console.log( 1 | 2);
// Rslt = 3;
console.log( 1 & 2);
// Rslt = 0
let read = 4 ;//00000100
let write = 2 ;//00000010;
let execute = 1;// 00000001
let myPermission = 0;
 myPermission = (read | write);
 console.log(myPermission);
 let submit = (write & execute |read)? write : execute;
 console.log(submit);