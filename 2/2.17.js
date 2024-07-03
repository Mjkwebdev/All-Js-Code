const numbers = [ 2, 2, 3, 4];

function includes(array, searchElement){
    for (let elements of array)
        if (elements=== searchElement)
            return true;
        return false;
}
console.log(includes(numbers, 7));


