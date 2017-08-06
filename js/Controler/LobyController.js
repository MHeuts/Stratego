function LobbyController(Stratego){
    
    this.stratego = Stratego;
    this.LobyView = new LobyView();

};

LobbyController.prototype.show = function(){
    this.LobyView.show(this.stratego.container);
};