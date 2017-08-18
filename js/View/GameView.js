class GameView {
    constructor(container){
        this.container = document.getElementById(container);
        this.Board = document.createElement('table');
        this.Board.className = "GameBoard";
        this.moveList = document.createElement('list');
        this.Box = document.createElement('table');
        this.commit = document.createElement('button');
        this.refresh = document.createElement('button');
        this.Header = document.createElement('h2');
        this.back = document.createElement('button');
        this.back.innerHTML = "Back to Lobby";
        this.dragged = null;
    }

    show(){
        var self = this;
        this.container.appendChild(this.moveList);

        this.container.innerHTML = "";
        this.container.appendChild(this.Board);
        this.buildBoard();

        this.container.appendChild(this.Header);
        this.container.appendChild(this.back);

        this.container.appendChild(this.Board);
        this.container.appendChild(this.commit);

    }

    buildBoard(Board){
        var self = this;
        for(var Rowindex in Board){
            var row = Board[Rowindex];
            for(var ColumnIndex in row) {
                var piece = row[ColumnIndex];
                var id = Rowindex + ", " + ColumnIndex;
                var field = document.getElementById(Rowindex + ", " + ColumnIndex);
                field.innerHTML = "";
                if (piece === "O") {
                    var image = document.createElement('img');
                    image.src = "../Stratego/img/blue.png";
                    image.draggable = false;
                    field.appendChild(image);
                }
                else if(piece != 0){
                    var image = document.createElement('img');
                    image.src = "../Stratego/img/red_" + piece + ".png";
                    image.draggable = "yes";
                    image.className = "myPieces";

                    image.addEventListener("dragstart", function (e) {
                        self.dragged = e.target;
                    })
                    field.appendChild(image);
                }
            }
        }
    }

    showBox(pieces){
        for(var x = 0; x<=10 ; x++){
            let row = document.createElement('tr');
            this.Board.appendChild(row);
            for( var y = 0; y<=10; y++){
                let field = document.createElement('td');
                this.image = document.createElement('img');
                this.image.src = "../img/blue.png";
                field.appendChild(this.image);
                row.appendChild(field);
            }
            this.Box.appendChild(row);
        }
        this.commit.innerHTML = "Commit BoardLayout";
        this.container.appendChild(this.Box);
    }

    allowDrop(ev){
        ev.preventDefault();
    }
}
