function address(Street, zipCode, City){
    this.zipCode= zipCode;   
    this.Street= Street;
    this.City= City;
}
const address1 = new address("09", "989","islamabad");
const address2 = new address("09", "989","islamabad");
const address3 = address1;
function areEqual(address1, address2){
    return address1.Street== address2.Street&&
        address1.zipCode== address2.zipCode&&
        address1.City== address2.City;
}
function areSame(address1, address2){
    return address1===address2;
}

console.log(areSame(address1, address2));// false
// They arent same because they are Referencing to different objects in memory
console.log(areEqual(address1,address2));// true 

console.log(areEqual(address1, address3)); 
// Got true because Thy both are pointing to same address in memory