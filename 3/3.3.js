// Another way to create an object 
// Constructor function

 function Circle(radius){
    this.radius = radius; 
     // this: add a property or read a property here we are adding property
    this.draw= function() {
        console.log("draw");
    }
 } 
 const circle = new Circle(2);
 console.log(circle);
 //whats going on under the hood 
 // The new operator create an empty object like : circle = {} and set  "this" points to the created empty oobject
//  the this new object will return the new opreator from function