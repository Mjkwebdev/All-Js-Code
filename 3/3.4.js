// Dynamic nature of object 
// Wee can add or remove a new object from Objects

const circle = {
     radius : 2,
};
// circle ={}; cant do this
circle.color= "yellow";
circle.location= {
    x:2,
};
circle.draw = function(){
    console.log("draw");
}
delete circle.draw; 
console.log(circle);