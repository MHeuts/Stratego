class GameView {
    constructor(container){
        this.container = document.getElementById(container);
        this.Board = document.createElement('table');
        this.moveList = document.createElement('list');
    }

    show(){
        this.container.innerHTML = "";
        this.container.appendChild(this.Board);
        this.buildBoard();

    }

    setBox(){
        this.Box = document.createElement('div');
        this.
    }
    
    buildBoard(){
        for(var x = 0; x<=10 ; x++){
            let row = document.createElement('tr');
            this.Board.appendChild(row);
            for(var y = 0; y<=10; y++){
                let field = document.createElement('td');
                field.id = x + ", " + y;
                field.className = "field";
                field.ondrop = this.drop(event);
                field.ondragover = this.allowDrop(event);
                row.appendChild(field);
            }
        }
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
