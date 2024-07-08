//  default values for function parameters 
function interest(principle, rate=3.5 , years=5){
    return principle * rate / 100 * years;
}
console.log(interest(1000000));

console.log(interest(700, 7));
// inserting second argument for third parameter will make a
//  js engine confusing
// so make sure to make default arguments at the end

