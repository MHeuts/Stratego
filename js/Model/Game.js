class gameModel{
    
    set openGame(Game){
        console.log(Game);
        this.id = Game.id;
        this.opponent = Game.opponent;
        this.winner = Game.Winner;
        this.state = Game.state;
    }

    set board(Board){
        this.board = Board;
    }

}
