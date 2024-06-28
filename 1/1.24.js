const marks= [ 10, 80, 90];
let sum=0; let average=1;
function CheckAverage(array){
     for(let value of array){
        sum= sum+value;
        average= sum/array.length;
     }
    return average;
}
function checkGrade(marks){

    const average = CheckAverage(marks);
    if(average < 60 )return 'F';
    if(average < 70 )return 'D';
    if(average < 80 )return 'C';
    if(average < 90 )return 'B';
    return "A";
}
console.log(checkGrade(marks));