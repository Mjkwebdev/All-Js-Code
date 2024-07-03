function arrayFromRange(min, max){
    const output =[];
    for ( let array =min; array <= max; array++)
       output.push(array);
       return output;
}
console.log(arrayFromRange(-3, 9));