// Rest Operator (...)
// When we apply the  rest operator we will take all the operators and 
// rest operator  is always the last operator
function shopCart(discount, ...price){
    const total= price.reduce((a,b) => a+b);
    return total * (1-discount);
}
console.log(shopCart(0.1, 30, 40));


// When we apply rest operator with a parameter of function 
// it means we can take multiple arguemnts and rest operator will take it and enclosed in a array 