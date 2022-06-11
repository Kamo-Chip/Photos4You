const slideshow = document.getElementById("slideshow");
const image = document.getElementById("image");

const sources = ["./images/p.jpg", "./images/l.jpg", "./images/wed.jpg", "./images/t.jpg", "./images/y.jpg"];

let count = 0;
carousel();

function carousel(){
    if(count == sources.length){
        count = 0;
    }

    image.src = sources[count];

    count++;
    setTimeout(carousel, 3000);
}
