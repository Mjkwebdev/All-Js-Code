let array1 = [1, 7,6];
let array2= ["ali", "ahsan",83.83]

let combined  = [...array1, "maimoona", ...array2];
// ... is spread operator
// combines different array
console.log(combined);
const copy = [...combined];
console.log(copy);