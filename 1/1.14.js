// For in 
//used to iterate over objects

const person={
    name: "Mk",
    age: "17",

};
for (let key in person){
    console.log(key);
    console.log(person[key]);
}
//key has a hold on properties and person is the object name
//  and if  we want to console the value of any property then use bracket notations
// and pass the key as an argument 


let colors = ["Red", "Green", "yellow"];
for (let key in colors){
    //Rather than using confusing words use meaning full words 
    // like here there's is no key in arrays there is an index of array
    console.log(key, colors[key]);
}

// For of 
// easier way to iterate over arrays
//console all elements of array

let color=["Black", "Pink", "green"];
for (let index of color){
    console.log(index);
}
