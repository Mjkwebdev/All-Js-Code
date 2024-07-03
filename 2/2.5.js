const numbers =["a", "b", 0.909, "Wajid",1, 9, "ali"];

// End Remove
// Remove last Element and return it
console.log(numbers.pop());
console.log(numbers);


// Start Remove;
console.log(numbers.shift());
console.log(numbers)

// Middle Remove
console.log(numbers.splice(3, 1));
// The firt elemnet should be the index and secondd element should be how many elemnets
console.log(numbers)