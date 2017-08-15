class GameController{
    constructor(Stratego){
        this.Stratego = Stratego;
        this.View = new GameView(this.Stratego.container);
    }


    show(){
        console.log("gamescreen: ", this.Stratego.Game.id);
        this.View.show();
    }
}
