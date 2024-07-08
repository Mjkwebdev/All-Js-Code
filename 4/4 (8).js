// Local and Global Variables
const contract = "signed";
// Its used as global variable , it is used everywhere and better not to use 
function start(){
    const message = "hi";
    if(true){
        const another = "bye";
    }
    console.log(another);
    // nothing would be printed because another is declared as local variable
    //if a variable is declared locally it can be reused as a variable somewhere else 
}


