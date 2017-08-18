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
        var self = this;
        for(var x = 0; x<=9 ; x++){
            let row = document.createElement('tr');
            for( var y = 0; y<=9; y++){
                let field = document.createElement('td');
                field.id = x + ", " + y;
                field.className = "field";
                field.addEventListener("dragover", function (e) {
                    e.preventDefault();
                })
                field.addEventListener("drop", function (e) {
                    console.log("lift", self.View.dragged.parentNode.id);
                    console.log("drop", field.id);
                    self.makeMove(self.View.dragged.parentNode.id, field.id);
                    e.preventDefault();
                    self.View.dragged.parentNode.removeChild(self.View.dragged);
                    e.target.appendChild(self.View.dragged);
                });
                field.ondragover = self.allowDrop(event);
                row.appendChild(field);
            }
            this.View.Board.appendChild(row);
        }

        console.log("gamescreen: ", this.Stratego.Game.id);
        this.setHeader();
        this.View.show();
        if(this.Stratego.Game.state === "waiting_for_pieces"){
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
        console.log('setHeader: ', this.Stratego.Game);
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
            self.runGame();

        });
    }

    //todo
    setUpBoard(){
        //this.View.showBox();
    }

    runGame(){
        this.setHeader();
        this.View.buildBoard(this.Stratego.Game.board);
        this.View.Board.disabled = true;
        let pieces = document.getElementsByClassName("myPieces");

        for(var i = 0; i < pieces.length; i++){
            pieces[i].draggable = false;
        }

        if(this.Stratego.Game.state === "my_turn"){
            for(var i = 0; i < pieces.length; i++){
                pieces[i].draggable = true;
            }
            this.View.Board.disabled = false;
            console.log("run game",this.Stratego.Game);

        }
        else if(this.Stratego.Game.state === "game_over"){
            console.log("Game OVer");
            if (confirm('Game Over. \nThe winner = ' + this.Stratego.Game.winner + "\nDo you want to view the board")){

            }else{
                this.View.Board.innerHTML = "";
                this.Stratego.show("Lobby");
            }
        }
    }

    makeMove(start, end){
        let self = this;
        let move = {
            "square":{
            "row": parseInt(start.charAt(0)),
            "column": parseInt(start.charAt(3))
            },
            "square_to":{
                "row": parseInt(end.charAt(0)),
                "column": parseInt(end.charAt(3))
            }
        }
        this.Stratego.Api.setMove(this.Stratego.Game.id, move, function (data) {
            console.log(data);
            self.Stratego.Game.openGame = data.game;
            self.runGame();
        })
    }

    allowDrop(ev){
        ev.preventDefault();
    }

}
