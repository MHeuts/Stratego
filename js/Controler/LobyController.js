function LobbyController(Stratego){
    
    this.stratego = Stratego;
    this.LobyView = new LobyView(this.stratego.container);

};

LobbyController.prototype.show = function(){
    this.LobyView.show();
};