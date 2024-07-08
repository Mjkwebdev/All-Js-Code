// Error handling

const person={
    firstName :"Mosh",
    lastName : "Hamedani",
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        if (typeof value !== "string")
            throw new Error("Invalid string");
        // throwing error means throwing exception

        const parts = value.split(" ");
        if (parts.length !== 2)
            throw new Error("Enter Valid Name");

        this.firstName= parts[0];
        this.lastName = parts[1];
    }
}
try{
    // person.fullName = true;
    person.fullName = "  ";
}
catch (e){
    console.log(e);
}
    
console.log(person.fullName);

