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
        this.refresh.innerHTML = "refresh";
        this.container.innerHTML = "";
        this.container.appendChild(this.Board);
        this.container.appendChild(this.Header);
        this.container.appendChild(this.back);
        this.container.appendChild(this.Board);
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
                    image.id = piece;
                    image.addEventListener("dragstart", function (e) {
                        self.dragged = e.target;
                    })
                    field.appendChild(image);
                }
            }
        }
    }

    showBox(board){
        var self = this;
        this.Box.innerHTML = "";
        for(var rowIndex in board){
            var boardRow = board[rowIndex];
            var row = document.createElement('tr');
            for(var columnIndex in boardRow){
                var id = boardRow[columnIndex];
                let field = document.createElement('td');
                field.id = "0";
                var image = document.createElement('img');
                image.src = "../Stratego/img/red_" + id + ".png";
                image.id = id;
                image.className = "myPieces";
                image.addEventListener("dragstart", function (e) {
                    self.dragged = e.target;
                })
                field.appendChild(image);
                row.appendChild(field);
            }
            this.Box.appendChild(row);
        }
        this.commit.innerHTML = "Commit Layout";
        this.container.appendChild(this.Box);
        this.container.appendChild(this.commit);
    }

    allowDrop(ev){
        ev.preventDefault();
    }
}
