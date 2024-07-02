// Construtor property
// Every obj in JS has a property that is constructor property 
// that refers to function that construct or  create Object
function person(name){
    this.name = name; 
    this.age = function(){
        console.log("23");
    } 
 } 
const Person = new person("Maimoona");

function createCircle(radius,location){
    return{
        radius,
        location,
    };
}
const circle1= createCircle(1,1); 
// constructor of circle1 will be function as bulit in Object  
// Js has some builtin objects like 
new String();// prefered to use  "" '' ``
new Boolean(); // true false
new Number(); // 1, 2 3