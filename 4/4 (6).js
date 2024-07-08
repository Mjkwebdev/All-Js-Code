const person={
    firstName :"Mosh",
    lastName : "Hamedani",
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        const parts = value.split(" ");
        this.firstName= parts[0];
        this.lastName = parts[1];
    }
}
person.fullName = "Maimoona Khan"
console.log(person.fullName);
// const person={
//     firstName :"Mosh",
//     lastName : "Hamedani",
// fullName(){
// return  console.log(`${person.firstName} ${person.lastName}`)
// }
// };

// There is a problem with this approach 
// that we cant change or access any property
// Theres comes to rescue A getters ar setters
// using Getters we can access any kind of function as a pproperty
// through Setters we can rename or change the properties from outside the objects
