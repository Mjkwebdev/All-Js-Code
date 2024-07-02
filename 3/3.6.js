// Functions are Object
// function Circle(radius){
//  this.radius = radius;
//  this.draw = function(){
//     console.log("draw");
//  };
// // }
// const Another = Circle(1);
const circle1= new Function("radius",`'
    this.radius = radius;
    this.draw = function(){
    console.log("draw");
}`
)
circle1.call({}, 1); 
circle1.apply({},[1,2,3]);


// Tips for my self
// JS main kch builtin objects hain ik object function hai
//  usky 2 parameters hain ik woh jo arguments pass krny ar 
// dsra hmra code hoga like if we wanna use objects as a 
// function
// circle1 ik object hai ar us py call ar apply method use hoa


