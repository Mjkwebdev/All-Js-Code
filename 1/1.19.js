//  Demerits Points
function checkspeed(speed){
    const speedlimit = 70;
    const kmPerPoints= 5;
    if (speed < speedlimit+ kmPerPoints){
        console.log("ok"); 
        return;
    }
     const points= Math.floor((speed - speedlimit)/ kmPerPoints);
     if (points>=12){
        console.log("Lisence Suspended");
      }
      else{
        console.log("Points: " , points);
      }
} 
checkspeed(170);
