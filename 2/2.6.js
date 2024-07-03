// Emptying Array

let Elements = [
    ["a", "b", 0.909, "Wajid",1, 9, "ali"],
    {id:1},
];

let another = Elements;
// First method
// Elements = 0;
// console.log(Elements);

// Second method Most reliable and easy one
Elements.length = 0;
// Another one
Elements.splice(0,Elements.length);
// Not recommended
while(Elements>0){
    return Elements.pop();
}
console.log(Elements);