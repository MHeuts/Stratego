class LoginController{
    constructor(stratego){
        let self = this;
        self.stratego = stratego;
        self.view = new LoginView(this.stratego.container);
        self.view.input.value = self.stratego.apiKey;

        self.view.button.addEventListener('click', function(){
            let key = self.view.input.value;
            if (key !== ""){
                self.stratego.login(key);
            }
        });
    }

    show(){
        console.log("Login");
        this.view.show();
    }
}