// Logical Operator with boolean values 
let highIncome=  true;
let creditHour = false;
let applicationApproval =  (creditHour || highIncome);  //working of or
let checkApproval =  (creditHour && highIncome); // working of and
console.log(applicationApproval);
console.log(checkApproval);
let submitApproval = !(checkApproval);
console.log(submitApproval);

