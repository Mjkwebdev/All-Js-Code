// Cloning  or copying  an Object

const circle= {
    radi : 1,
    draw(){
        console.log("draw");
    }
}
// const another ={};

// for (let key in circle){
//     another[key] = circle[key];
// }
const another =  Object.assign({}, circle); //modern way in js
// {} doesnt seems to be empty object 
// It can have any key or value

//Simplest way to clone obj is 
const other = {...circle, ...another}; 
// ... is spread operator  
console.log(other);