const numbers = [3, 4];
// why using const 
// const make the array not to reuse but we can modify it 

// Add numbers at the end 
numbers.push(8, 9);

// Beginning
numbers.unshift(1, 7);

// Middle
numbers.splice(3,0,"a", "b");
console.log(numbers);