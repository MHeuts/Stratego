class GameView {
    constructor(container){
        this.container = document.getElementById(container);
        this.Board = document.createElement('table');
        this.Box = document.createElement('table');
        this.commit = document.createElement('button');
        this.Header = document.createElement('h2');
        this.back = document.createElement('button');
        this.back.innerHTML = "Back to Lobby";
    }

    show(){
        for(var x = 0; x<=10 ; x++){
            let row = document.createElement('tr');
            this.Board.appendChild(row);
            for( var y = 0; y<=10; y++){
                let field = document.createElement('td');
                field.id = x + ", " + y;
                row.appendChild(field);
            }
            this.Board.appendChild(row);
        }
        this.container.innerHTML = "";
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
                console.log("piece = ",piece);
                var id = Rowindex + ", " + ColumnIndex;
                console.log("Index = ", id);
                if (piece === "O") {
                    console.log("set piece");
                    var image = document.createElement('img');
                    image.src = "../Stratego/img/blue.png"

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
}
