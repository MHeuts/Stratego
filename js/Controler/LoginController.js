function LoginController(){

    this.view = new LoginView();

}

LoginController.prototype.show = function(){

    this.view.show();
}