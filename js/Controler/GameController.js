class GameController{
    constructor(Stratego){
        let self = this;
        this.Stratego = Stratego;
        this.View = new GameView(this.Stratego.container);

        this.View.back.addEventListener('click', function () {
            self.View.Board.innerHTML = "";
            self.Stratego.show("Lobby");
        });
    }

    show(){
        let self = this;
        console.log("gamescreen: ", this.Stratego.Game.id);
        this.setHeader();
        this.View.show();
        if(this.Stratego.Game.state == "waiting_for_pieces"){
            if (confirm('Do you wish to use a standard board?')){
                this.setUpStandard();
            }else{
                self.setUpBoard();
            }
        }else{
            this.runGame();
        }
    }

    setHeader(){
        this.View.Header.innerHTML = "GameId: " + this.Stratego.Game.id + " | VS: " + this.Stratego.Game.opponent + ", state: " + this.Stratego.Game.state;
    }

    setUpStandard(){
        let self = this;
        let board = [
            [
                "7",
                "B",
                "5",
                "2",
                "9",
                "9",
                "1",
                "8",
                "9",
                "B"
            ],
            [
                "B",
                "7",
                "9",
                "S",
                "4",
                "5",
                "8",
                "5",
                "3",
                "9"
            ],
            [
                "7",
                "B",
                "4",
                "8",
                "6",
                "4",
                "3",
                "8",
                "7",
                "6"
            ],
            [
                "B",
                "F",
                "B",
                "5",
                "9",
                "6",
                "6",
                "9",
                "9",
                "8"
            ]
        ];

        this.Stratego.Api.setStartBoard(this.Stratego.Game.id, board, function(data){
            console.log(data);
            self.Stratego.Game.openGame = data;
            self.Stratego.Game.Board = data.board;
            self.setHeader();

        });
    }

    //todo
    setUpBoard(){
        //this.View.showBox();
    }

    runGame(){
        console.log(this.Stratego.Game.board);
        this.View.buildBoard(this.Stratego.Game.board);
        this.View.commit.innerHTML = "Make Move";
    }

    makeMove(){

    }

}
