// Count Truthy values

let array  = [null,undefined ,1,"", 2, 3]; 
countTruthy(array);

function countTruthy(array){
    let count=0;
    for (let index of array){
        if( index )
        count++;    
         count;
    }
    console.log(count);
}