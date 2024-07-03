// Arrow function
const courses= [ 
    {id : 1, name : "a"},
    {id : 2, name: "b"}
];
let courseIndex= courses.findIndex(courses=>  courses.id=== 1);
//Cleaner way to write a co
console.log(courseIndex);
