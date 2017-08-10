class lobbyView{

    constructor(container){
    this.container = document.getElementById(container);
    }

    show(){
        console.log("loby");
        this.container.innerHTML = "";
    }
}