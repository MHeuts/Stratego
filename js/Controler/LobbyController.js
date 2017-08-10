class LobbyController{
    constructor(stratego){
        this.stratego = stratego;
        this.view = new lobbyView(this.stratego.container);
        console.log("lobbycontroller");
    }


    show(){
        console.log("show lobby");
        this.view.show();
    }
}