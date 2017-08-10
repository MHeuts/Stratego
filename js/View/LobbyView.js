class lobbyView{

    constructor(container){
        this.container = document.getElementById(container);
        this.welcome = document.createElement("h2");
        this.list = document.createElement('table');
        this.list.className = "gameList";
        this.continue = document.createElement('button');
        this.continue.innerHTML = "Continue";
        this.vsAi = document.createElement('button');
        this.vsAi.innerHTML = "New game: vs AI";
        this.vsPlayer = document.createElement('button');
        this.vsPlayer.innerHTML = "New game: vs Player";
    }

    show(){
        this.container.innerHTML = "";
        this.container.appendChild(this.welcome);
        this.container.appendChild(this.list);
        this.container.appendChild(this.continue);
        this.container.appendChild(this.vsAi);
        this.container.appendChild(this.vsPlayer);
    }
    
    buildList(games){
        games.foreach(function(game){
            console.log(game);
        })
    }
}
