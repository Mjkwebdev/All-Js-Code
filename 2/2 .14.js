// Mapping an Array

const numbers = [ 1, -2 , -2, 0]
const filtered = numbers.filter(value=> value>=0);
let FilterMust = filtered.map((value)=>{
    return {value : value}
});


console.log(FilterMust);
