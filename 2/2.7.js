// Combining and splice Array
let array1 = [1, 7,6];
let array2= ["ali", "ahsan",83.83]

let combined  = array1.concat(array2);
console.log(combined);

let splice = combined.splice(2, 5);// from index 2 to index 5 
let spliced = combined.splice(2); // from index 2
let splic = combined.splice(); //return our array as it is
console.log(splice);