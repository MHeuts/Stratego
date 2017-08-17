class GameView {
    constructor(container){
        this.container = document.getElementById(container);
        this.Board = document.createElement('table');
        this.moveList = document.createElement('list');
        this.Board.style.backgroundImage = "url('../Stratego/img/board.jpg')"
        this.Board.style.backgroundSize = "810px 810px";
        this.Box = document.createElement('table');
        this.commit = document.createElement('button');
        this.Header = document.createElement('h2');
        this.back = document.createElement('button');
        this.back.innerHTML = "Back to Lobby";
    }

    show(){
        this.Board.innerHTML = "";
        for(var x = 0; x<=9 ; x++){
            let row = document.createElement('tr');
            this.Board.appendChild(row);
            for( var y = 0; y<=9; y++){
                let field = document.createElement('td');
                field.id = x + ", " + y;
                field.style.width = "75px";
                field.style.height = "75px";
                row.appendChild(field);
            }
            this.Board.appendChild(row);
        }
        this.container.innerHTML = "";
        this.container.appendChild(this.Board);
        this.buildBoard();

        this.container.appendChild(this.Header);
        this.container.appendChild(this.back);

        this.container.appendChild(this.Board);
        this.container.appendChild(this.commit);

    }


    
    buildBoard(Board){
        for(var Rowindex in Board){
            var row = Board[Rowindex];
            for(var ColumnIndex in row) {
                var piece = row[ColumnIndex];
                var id = Rowindex + ", " + ColumnIndex;
                if (piece === "O") {
                    var image = document.createElement('img');
                    image.src = "../Stratego/img/blue.png"
                    image.style.height = '75px';
                    image.style.width = '75px';

                    document.getElementById(Rowindex + ", " + ColumnIndex).appendChild(image);
                }
                else if(piece != 0){
                    var image = document.createElement('img');
                    image.src = "../Stratego/img/red_" + piece + ".png"
                    image.style.height = '75px';
                    image.style.width = '75px';

                    document.getElementById(Rowindex + ", " + ColumnIndex).appendChild(image);
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

    drag(ev){
        ev.dataTransfer.setData("text", ev.target.id);
    }

    drop(ev){
        ev.preventDefault();
    }

    allowDrop(ev){
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
}
