// Created Blog Post by Constructor functions
function Post(title, body,author){
    this.title = title;
    this.body= body;
    this.author= author;
    this.views= 0;
    this.comments= [];
    this.isLive = false;
}
const post1 = new Post("a","b","c");
console.log(post1);


