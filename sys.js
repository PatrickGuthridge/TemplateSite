var page;
function Page(e){
    this.setup = document.createElement("div");
    this.setup.id = e;
    this.setup.className = "page";
        var header = document.createElement("div");
        header.className = "header";
    this.setup.appendChild(header);
        var content = document.createElement("div");
        content.className = "content";
    this.setup.appendChild(content);
        var footer = document.createElement("div");
        footer.className = "footer";
    this.setup.appendChild(footer);
}
function init(e){
    page = new Page("home");
    document.body.innerHTML = "";
    document.body.appendChild(page.setup);
}
window.addEventListener("load", init);