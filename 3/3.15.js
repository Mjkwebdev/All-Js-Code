//Showing Address 
const address = {
    street: 1,
    city: "abc",
    zipcode: 123,
};
 function showaddres(address){
     for (let key in address){
        console.log(key , address[key]);
    } 
}

showaddres(address);