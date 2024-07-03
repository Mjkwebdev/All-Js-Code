// Sorting Arrays
//Ascending order
const array= [ "ali", "abbas","maimoona"];
array1 =array.sort();
console.log(array1);

//Descending or Reverse
let array2;
array2= array1.reverse();
console.log(array2);

// Sort function on reference type

let courses = [
    {id :1, name : "Node.JS"},
    {id: 2, name : "javascript"}
]
// In Ascii table j= 106 n = 78
// A case sensitive problem occurs


courses.sort(function (a , b){

    const Course1 = a.name.toUpperCase();
    const Course2 = b.name.toUpperCase();
    
    if ( Course1 < Course2) return -1;
    if ( Course1 > Course2) return 1;
     return 0;
});
console.log(courses);