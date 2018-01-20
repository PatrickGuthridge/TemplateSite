var images = [new Image("https://i0.wp.com/techbeasts.com/wp-content/uploads/2016/12/4k-wallpaper-5.jpg"), new Image("https://i0.wp.com/techbeasts.com/wp-content/uploads/2016/12/4k-image-tiger-jumping.jpg"),new Image("https://i2.wp.com/techbeasts.com/wp-content/uploads/2016/12/6.jpg")];
console.log(images)
var header = {};
var page = {};
var footer = {};
document.scrub = function(e){
    var element;
    if(!e){
        element = document.body;
    }
    else{
        element = document.querySelector(e);
    }
    try{
        while(element.firstChild){
            element.removeChild(element.firstChild);
        }
    }
    catch(e){
        console.error("Scrub error: Null selector reference,", e.message)
    }
}
function Header(){
    var setup = document.createElement("div");
    setup.className = "header";

    this.setup = setup;
}
function Page(){
    var setup = document.createElement("div");
    setup.className = "page";

    this.setup = setup;
}
function Footer(){
    var setup = document.createElement("div");
    setup.className = "footer";

    this.setup = setup;
}

function init(e){
    //Create main document elements
    header = new Header();
    page = new Page();
    footer = new Footer();

    //Clear existing document
    document.scrub();
    setTimeout(function(){
        document.body.classList.remove("init");
    }, 33)


    //document.body.appendChild(header.setup);
}
window.addEventListener("load", init);