class lobbyView{

    constructor(container){
        this.container = document.getElementById(container);
        this.welcome = document.createElement("h2");
        this.list = document.createElement('table');
        this.list.className = "gameList";
        this.vsAi = document.createElement('button');
        this.vsAi.innerHTML = "New game: vs AI";
        this.vsPlayer = document.createElement('button');
        this.vsPlayer.innerHTML = "New game: vs Player";
    }

    show(){
        this.container.innerHTML = "";
        this.container.appendChild(this.welcome);
        this.container.appendChild(this.list);
        this.container.appendChild(this.vsAi);
        this.container.appendChild(this.vsPlayer);
    }

    addgametoList(listItem){
        this.list.appendChild(this.listItem);
    }
    
    buildList(games){
        console.log("games: ", games);
        for(var index in games){
            var game = games[index];
            this.listItem = document.createElement('li');
            this.listItem.innerHTML = game.id + ", VS " + game.opponent;
            this.list.appendChild(this.listItem);
        }
    }
}
