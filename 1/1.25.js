function showStars(nRow){
for (let row = 1; row <= nRow; row++){
    let pattern = "";
    for(let col=0; col<row;col++ )
      pattern += "*";
    console.log(pattern);
}
}

showStars(2);

for(let i=1; i<=5;i++){
   let pattern = "";
   for (let j=i;j<=5; j++)
    pattern+= "*";
   console.log(pattern);
}

