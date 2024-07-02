// Enumerating over properties
const circle ={
    radius : 1,
    draw() {
        console.log("draw");
    },
}
for (let key in circle){ console.log(key, circle[key]); } 
//simplest way to enumerate properties
 
// for (let key of circle )
for (let key of Object.keys(circle) ) 
    console.log(key); 
// method = object.keys
//  it will get all the keys and return them in  an array 
// then the for of loop will be applied to arrays like arrays are iterateable
//  we get output 
// Object.entries = output all the keys with their values
// check any entry use in operator like 
if ("radius" in circle) console.log("yes");