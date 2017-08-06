function LoginController(Stratego){

    let self = this;
    self.stratego = Stratego;
    self.view = new LoginView(this.stratego.container);

    self.view.input.value = this.stratego.ApiKey;

    self.view.button.addEventListener('click', function(){
        self.setKey();
    });
    
}

LoginController.prototype.show = function(){
    this.view.show();

}

LoginController.prototype.setKey = function (){
    let key = this.view.input.value;
    if (key !== ""){
        this.stratego.setApi(key);
        this.stratego.show("Lobby")
    }

}