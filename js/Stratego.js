function Stratego(container) {
    

    this.container = document.getElementById(container);

    this.Api = null;

    this.controllers = {
        "Login": new LoginController(this),
        //"Lobby": new LobbyController(this),
        //"Game": new GameController(this)
    };


    //this.Api = new Api();

    this.show('Login');
};

Stratego.prototype.show = function (controllerName, data = null){
    let controller = this.controllers[controllerName];
    controller.show();
};

