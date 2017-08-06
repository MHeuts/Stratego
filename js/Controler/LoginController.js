function LoginController(Stratego){

    this.stratego = Stratego;
    this.view = new LoginView(this.stratego.container);

}

LoginController.prototype.show = function(){

    this.view.show();
}