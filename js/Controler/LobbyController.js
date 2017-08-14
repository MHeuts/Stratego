class LobbyController{
    constructor(stratego){
        self = this;
        self.stratego = stratego;
        self.view = new lobbyView(this.stratego.container);

        self.view.vsAi.addEventListener('click', function(){
            self.createVsAi();
        });
    }


    show(){
        
        this.view.welcome.innerHTML = "Welcome: " + this.stratego.User["name"];
        let self = this;
        self.view.show();
        self.stratego.Api.getGames(function(data){
            if(data.length > 0){
                self.view.buildList(data);
            }
        });


    }

    createVsAi(){
        console.log("create game");
        let self = this;

        self.stratego.Api.createGamevsAi(function(game){
            self.stratego.Game.setGame = game;
            self.stratego.view("Game");
        });
    }

    

}