function Stratego() {
    
    this.Api = null;

    this.controllers = {
        "Login": new LoginController(),
        "Lobby": new LobbyController(),
        "Game": new GameController()
    };


    this.Api = new Api();
};

Stratego.prototype.setController = function (controllerName, data = null){
    let controller = this.controllers[controllerName];
    controller.show();
};

