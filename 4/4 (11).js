// This keyword
// Change Value  of This

const video = {
    title :"a",
    tags : [1,2,3],
    showTags(){
        // Change value of this 
        // 1st way const self = this; 
        // 2nd way

    //   this.tags.forEach(function(tag){
    //     console.log(this.title,tag); 
    //     //simply passing this.title makes the output undefined 
    //     // pass this as func scnd arguments
    //   }.bind(this));

    // The best approach is arrow function
    this.tags.forEach(tag=>{
            console.log(this.title,tag); 
          });
    }
}

// video.showTags();

// function playVideo(){
//     console.log(this);
// }

// playVideo.call({Id: 1});
// playVideo.apply({id:1})
// playVideo.bind({id:1})();
