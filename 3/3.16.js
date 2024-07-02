// Factory function and Constructor Function
const address = FactoryAddress("1", "islamabad", "9")

function FactoryAddress(street, city, zipcode){
    return {
    street,
    city,
    zipcode,
}
}

console.log(FactoryAddress(address));

function address(Street, zipCode, City){
        this.zipCode= zipCode;   
        this.Street= Street;
        this.City= City;
}
const Address = new address("09", "989","islamabad");
console.log(Address);
