class LobbyController{
    constructor(stratego){
        this.stratego = stratego;
        this.view = new lobbyView(this.stratego.container);
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
}