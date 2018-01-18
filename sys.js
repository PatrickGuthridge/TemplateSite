function Page(e){
    this = document.createElement("div");
    this.id = e;
    this.class = "page";
    var header = document.createElement("div");
    header.class = "header";
    
}
function init(e){
    var page = new Page("home");
}
window.addEventListener("load", init);