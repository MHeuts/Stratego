class GameView {
    constructor(container){
        this.container = document.getElementById(container);
        this.Board = document.createElement('table');
    }

    show(){
        this.container.innerHTML = "";
    }
    
    buildBoard(){
        for(x = 0; x<=10 ; x++){
            let row = document.createElement('tr');
            this.Board.appendChild(row);
            for(y = 0; y<=10; y++){
                let field = document.createElement('td');
                square.id = x + ", " + y;
                row.appendChild(field);
            }
        }
    }
}
