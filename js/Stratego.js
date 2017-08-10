class Stratego{
    constructor(container){
        this.apiKey = "ZjfjwPlX4eYydG9FRqytDBPg8AfhQvhN";
        this.Api = new StrategoApi();
        this.container = container;
        this.User = new userModel();
        this.controllers = {
            "Login": new LoginController(this),
            "Lobby": new LobbyController(this),
            //"Game": new GameController(this)
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
                console.log(self.User);
                self.User.newUser = data;
                self.show("Lobby");
            }
        });
    }
}
