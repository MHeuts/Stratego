class GameView {
    constructor(container){
        this.container = document.getElementById(container);
    }

    show(){
        this.container.innerHTML = "";
    }
}