class gameModel{
    
    set openGame(Game){
        console.log(Game);
        this.id = Game.id;
        this.opponent = Game.opponent;
        this.winner = Game.winner;
        this.state = Game.state;
        this.startBoard = Game.start_board;
        this.board = Game.board;
    }

    set setMoves(moves){
        this.moves = moves;
    }

    viewState(move){

    }
}
