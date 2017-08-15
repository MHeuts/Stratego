class LobbyController{
    constructor(stratego){
        self = this;
        self.stratego = stratego;
        self.view = new lobbyView(this.stratego.container);

        self.view.vsAi.addEventListener('click', function(){
            self.createVsAi();
        });

        self.view.vsPlayer.addEventListener('click', function(){
            self.createVsPlayer;
        })
    }


    show(){
        this.view.welcome.innerHTML = "Welcome: " + this.stratego.User["name"];
        let self = this;
        self.view.show();
        self.stratego.Api.getGames(function(data){
            for(var index in data){
                var game = data[index];
                var listItem = document.createElement('li');
                listItem.innerHTML = game.id + ", VS " + game.opponent + ", state: " + game.state;
                listItem.addEventListener('click', function(){
                    self.openGame(game);
                });
                self.view.addgametoList(listItem);
            }
        });
    }

    openGame(game){
        console.log("Open Game: ", game);
        self.stratego.Game.openGame = game;
        self.stratego.show("Game");
    }

    createVsAi(){
        let self = this;
        self.stratego.Api.createGamevsAi(function(game){
            console.log("create game vs AI: ", game);
            self.openGame(game);
        });
    }

    createVsPlayer(){
        let self = this;
        self.stratego.Api.createGamevsUser(function(game){
            console.log("create game vs Player: ", game);
            self.openGame(game);
        });
    }
}