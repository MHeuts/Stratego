class GameController{
    constructor(Stratego){
        let self = this;
        this.Stratego = Stratego;
        this.View = new GameView(this.Stratego.container);
        this.Board = [
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

        this.View.back.addEventListener('click', function () {
            self.View.Board.innerHTML = "";
            self.Stratego.show("Lobby");
        });
        this.View.refresh.addEventListener('click', function () {
            self.runGame();
        })
        this.View.commit.addEventListener('click', function () {
            self.checkBoard();
        })
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
                });
                field.addEventListener("drop", function (e) {
                    var piece = new pieceModel(self.View.dragged.id);
                    var newField = field;
                    var oldField = self.View.dragged.parentNode;
                    if(self.Stratego.Game.state === "waiting_for_pieces"){
                        if(!piece.canPlace(parseInt(newField.id.charAt(0)))){
                            return;
                        }
                    }
                    console.log("lift", oldField.id);
                    console.log("drop", newField.id);
                    if(newField.id === oldField.id){
                        return;
                    }
                    if(newField.hasChildNodes()) {
                        console.log("has child", newField.firstElementChild.className);
                        if (newField.firstElementChild.className === "myPieces") {
                            console.log("cant place on own field");
                            return;
                        }
                    }

                    if(self.Stratego.Game.state === "my_turn"){
                        if(field.id === "4, 2" && field.id === "4, 3" && field.id === "5, 2" && field.id === "5, 3" && field.id === "4, 6" && field.id === "4, 7" && field.id === "5, 6" && field.id === "5, 7") {
                            return;
                        }

                        if(!piece.canMove(oldField.id.charAt(0), oldField.id.charAt(3), field.id.charAt(0), newField.id.charAt(3))){
                            return;
                        }
                        self.makeMove(oldField.id, newField.id, piece.id);
                    }

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
        this.View.show();

        this.runGame();

    }

    runGame(){
        this.setHeader();
        this.View.container.appendChild(this.View.refresh);
        if(this.Stratego.Game.state === "waiting_for_pieces"){
            if (confirm('Do you wish to use a standard board?')){
                this.setUpStandard();
            }else{
                this.setUpBoard();
            }
        }
        else{
            this.View.buildBoard(this.Stratego.Game.board);

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
    }

    setHeader(){
        this.View.Header.innerHTML = "GameId: " + this.Stratego.Game.id + " | VS: " + this.Stratego.Game.opponent + ", state: " + this.Stratego.Game.state;
    }

    //todo
    setUpBoard(){
        this.View.showBox(this.Board);
    }

    checkBoard(){
        var setup = [];
        for(let row = 6; row < 10; row++){
            var boardRow = [];
            for(let column = 0; column < 10; column++){
                var pos = (row + ", " + column);
                if(!document.getElementById(pos).hasChildNodes()){
                    alert("Geen geldige Layout!");
                    return;
                }
                var piece = document.getElementById(pos).firstElementChild;
                console.log(piece);
                boardRow[column] = (piece.id);
                console.log(boardRow);
            }
            console.log(boardRow);
            setup.push(boardRow);
        }

        this.Board = setup;
        this.View.commit.remove();
        this.setUpStandard();
    }

    setUpStandard(){
        let self = this;

        this.Stratego.Api.setStartBoard(this.Stratego.Game.id, this.Board, function(data){
            console.log(data);
            self.Stratego.Game.openGame = data;
            self.Stratego.Game.Board = data.board;
            self.runGame();

        });
    }


    makeMove(start, end, id){
        console.log(id)
        if (this.Stratego.Game.state === "waiting_for_pieces")
            return;
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
