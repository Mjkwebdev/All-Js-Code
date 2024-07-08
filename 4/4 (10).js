// method ===> obj
// function => global(window , global)

// This refers to objects that are executing  the current function

const  video = {
    title: "a",
    play(){
        console.log(this); 
    // here this offers to execution of the current function 
    }
}

function playVideo(){
    console.log(this);
} 
//here this refers to  global function 
playVideo();

function Video(title){
    this.title = title;
    console.log(this);
//  using this as a constructor function will create
//   a new empty obj in memory and this will point to it
}
const v = new Video("a");
