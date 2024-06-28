const movie={
    title: "a", 
    releaseYear : 2017,
    hours: 5,
    director: "b",
};

function checkMovie(obj){
    for (let key in  obj){
        if(typeof(obj[key])=== "string"){
            console.log(key, obj[key]);
        }
    }
}
(checkMovie(movie));
