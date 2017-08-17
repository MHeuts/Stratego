class LobbyController{
    constructor(stratego){
        self = this;
        self.stratego = stratego;
        self.view = new lobbyView(this.stratego.container);
        self.view.logout.addEventListener('click', function() {
            self.stratego.show("Login");
        })
        self.view.vsAi.addEventListener('click', function(){
            self.createVsAi();
        });
        self.view.vsPlayer.addEventListener('click', function(){
            self.createVsPlayer;
        })
    }

    show(){
        this.view.welcome.innerHTML = "Welcome: " + this.stratego.User["name"];
        this.view.list.innerHTML = "";
        let self = this;
        self.view.show();
        self.stratego.Api.getGames(function(data){
            for(var index in data){
                (function() {
                    let game = data[index];
                    let listItem = document.createElement('li');
                    listItem.innerHTML = game.id + ", VS " + game.opponent + ", state: " + game.state;
                    listItem.addEventListener('click', function(){
                        console.log("Open Game: ", game);
                        self.stratego.Game.openGame = game;
                        self.stratego.show("Game");
                    });
                    self.view.addgametoList(listItem);
                }());
            }
        });
    }


    createVsAi(){
        let self = this;
        self.stratego.Api.createGamevsAi(function(game){
            console.log("create game vs AI: ", game);
            console.log("Open Game: ", game);
            self.stratego.Game.openGame = game;
            self.stratego.show("Game");
        });
    }

    createVsPlayer(){
        console.log("vs Player");
        let self = this;
        self.stratego.Api.createGamevsUser(function(game){
            console.log("create game vs Player: ", game);
            console.log("Open Game: ", game);
            self.stratego.Game.openGame = game;
            self.stratego.show("Game");
        });
    }
}