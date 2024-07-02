// Value types &Refernce Types
// Value types are Number, string, boolean, undefined , symbol, null 
let x= 10;
let y= x;
x= 20;
console.log(x);
console.log(y);
// Output x= 20 y= 10;
// so they are independent of each other

// Reference Type
// Reference type are Object Functions Arrays

let a= {value : 1  };
// when we use object that object is not stored in variale 
// but in some place in memoryand address is stored in that 
// variable 
let b=a;
// value coping meaning giving addres stored in one object into other one 
// and hence if we change the value the other variable is also changed
a= {value : 4};
console.log(a);
console.log(b);




