class Stratego{
    constructor(container){
        this.apiKey = "ZjfjwPlX4eYydG9FRqytDBPg8AfhQvhN";
        this.Api = new StrategoApi();
        this.container = container;
        this.User = new userModel();
        this.Game = new gameModel();
        this.controllers = {
            "Login": new LoginController(this),
            "Lobby": new LobbyController(this),
            "Game": new GameController(this)
        };
    }

    show(controllerName){
        let controller = this.controllers[controllerName]
        controller.show();
    }

    login(key){
        let self = this;
        self.Api.key = key;
        self.Api.getMe(function(data){
            if(data.id != null){
                self.User.newUser = data;
                self.show("Lobby");
            }
        });
    }
}
