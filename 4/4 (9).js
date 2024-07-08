// Let vs Var

function start(){
    for (var i = 0; i<5; i++)
        console.log(i);
    
console.log(i);

for (let j=1;j<3; j++){
    console.log(j);
}
}
start();

// var => function scopped
// var is connected to window object which is bad practice
// let const is a block-scoped 
// var is attached to window object and let is not attached