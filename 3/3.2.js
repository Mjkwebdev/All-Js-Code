// Factory Functions
// A factory that returns object
function createCircle(radius,location){
return{
    // radius: radius,
    // diameter: dm,
    // location: location,
    // In modern js : used onluy key if key and value are same
    radius,
    location,
    // use Methods  as
    draw(){
        console.log("draw");
    },
    // draw: function(){
    //     console.log("draw");
    // }
};
}
const circle1=  createCircle(1,1); 
console.log(circle1);

const circle2=  createCircle(7,1); 
console.log(circle2);