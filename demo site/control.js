var frameControl;
var lastPosition = 0;
var refreshRate = 60;
var animations = [];
var type = {
    value: "*",
    blur: "blur(*px)",
    rotate: "rotate(*deg)",
    scale: "scale(*)",
    pxp: "-*px",
    pxn: "*px",
    image: {
        upLeft: "-*px",
        downRight: "*px"
    },
    element: {
        up: "translateY(-*px)",
        down: "translateY(*px)",
        left: "translateX(-*px)",
        right: "translateX(*px)"
    }
};
function replace(){
    if(lastPosition != pageYOffset){
        lastPosition = pageYOffset;

        for(animation of animations){ //compatability: todo ie in compat website
            try{
                if(pageYOffset >= animation.start && (pageYOffset  <= animation.end || animation.end == null)){
                    var value = lastPosition * animation.link + animation.add;
                    if(animation.round == true){
                        value = Math.round(value);
                    }
                    animation.ref.style[animation.type] = animation.function.replace("*", value);
                }
            }
            catch(e){
                throw("Invalid Animation: " + e.message + " - Line " + e.lineNumber);
            }
        }
    }
}

function setup(){
    animations = [
        {
            ref: document.querySelector("#background1"),
            type: "backgroundPositionY",
            function: type.image.upLeft,
            link: 1.25,
            add: 0,
            round: true,
            start: 0,
            end: innerHeight
        },
        {
            ref: document.querySelector("#background1"),
            type: "filter",
            function: "grayscale(*%)",
            link: 1,
            add: 0,
            round: true,
            start: innerHeight / 2,
            end: innerHeight
        },
        {
            ref: document.querySelector("#title"),
            type: "transform",
            function: "translate(-50%, *%)",
            link: 1.5,
            add: -115,
            round: true,
            start: 0,
            end: innerHeight
        },
        {
            ref: document.querySelector("#title"),
            type: "filter",
            function: type.blur,
            link: 0.05,
            add: 0,
            round: true,
            start: 0,
            end: innerHeight
        },
    ]
    console.log("Registered " + animations.length + " scroll animation buffers.")
    frameControl = setInterval(replace, 1000 / refreshRate);
}

window.addEventListener("DOMContentLoaded", setup);
window.addEventListener("resize", function(){
    clearInterval(frameControl);
    setup();
});
window.addEventListener("load", function(){
    console.log("top");
    window.scroll(0,0);
});