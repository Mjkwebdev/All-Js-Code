function isLandscape(width, height){
    return (width > height)? true: false;
}
// simplified way
function isLandscape(width, height){
    return (width > height);
}

let screen = isLandscape(100, 900);
console.log(screen);