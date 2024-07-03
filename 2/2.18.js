const numbers = [2, 8, 6, 3];

function Except(array, excluded){
   const output = [];
     for (let elements of array){
        if(!excluded.includes(elements))
            output.push(elements);
        return output;
     }
    }
console.log(Except(numbers, []));
