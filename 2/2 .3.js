// reference type 
const courses= [ 
    {id : 1, name : "a"},
    {id : 2, name: "b"}
];

let courseFound= courses.find(courses=>{
    return courses.id=== 1;
})
console.log(courseFound);

//obj is reference type, likewise they are pointing to different objects in memory 
//  find function is used to find reference type function

// FindIndex
let courseIndex= courses.findIndex(function(courses){
    return courses.id=== 1
});
console.log(courseIndex);
// InCase if there is absence of any Element -1 will be returned