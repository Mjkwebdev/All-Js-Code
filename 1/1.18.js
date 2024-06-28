function fizzbuzz(input){
    if (typeof input != "number"){
        return "Not a Number";
    }
    if((input % 5===0) && (input % 3 === 0)){
        return "Fizzbuzz";
    }
    if (input % 3 === 0){
        return "Fizz";
    }
    if (input % 5 === 0){
        return "Buzz";
    }
    return input;
}
const output = fizzbuzz(15);
console.log(output);
