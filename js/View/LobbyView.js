class lobbyView{

    constructor(container){
        this.container = document.getElementById(container);
        this.list = document.createElement('li');
        this.continue = document.createElement('button');
        this.vsAi = document.createElement('button');
        this.vsPlayer = document.createElement('button');
    }

    show(){
        console.log("loby");
        this.container.innerHTML = "";
    }
    
    buildList(games){
        
    }
}
