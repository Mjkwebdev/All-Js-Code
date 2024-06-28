
// Break and continue 
// Break: it is used to exit from the loop 
// continue : if the condition meets the control will be transfer to the loop next iteration


let x=0;
while(x<10){
    console.log(x);
    x++;
}
// output 0 to 10
// use of break;
let y=0;
while(y<10){
    if (y === 5 )break;
    if(y%2===0){
        y++;
        continue;
    }
    console.log(y);
}


