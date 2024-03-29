class StrategoApi{
    constructor(){
        this.url = 'https://strategoavans.herokuapp.com/api';
    }

    set key(key){
        this.ApiKey = "?api_key=" + key;
        console.log(this.ApiKey);
    }

    getMe(callback){
        $.ajax({
            url: this.url + '/users/me' + this.ApiKey
        }).done(function(data){
            console.log(data);
            callback(data);
        });
    }

    getGames(callback){
        $.ajax({
            url: this.url + '/games' + this.ApiKey
        }).done(function(data) {
            console.log(data);
            callback(data);
        });
    }
    
    createGamevsAi(callback){
        $.ajax({
            url: this.url + '/games' + this.ApiKey,
            type: "POST",
            contentType: 'application/json',
            data: JSON.stringify({ai: true})
        }).done(function(data) {
            console.log("games: ", data);
            callback(data);
        });
    }

    setMove(id, move, callback){
        $.ajax({
            url: this.url + '/games/' + id + '/moves' + this.ApiKey,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(move)
        }).done(function (data) {
            console.log(data);
            callback(data);
        })
    }

    getMoves(id, callback){
        $ajax({
            url:this.url + '/games/' + id + '/moves' + this.ApiKey
        }).done(function (data) {
            console.log(data);
            callback(data);
        })
    }
    
    createGamevsUser(callback){
        $.ajax({
            url: this.url + '/games' + this.ApiKey,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ai: false})
        }).done(function(data) {
            console.log("games: ", data);
            callback(data);
        });
    }
    
    getGameById(id, callback){
        $.ajax({
            url: this.url + '/games/' + id + this.ApiKey
        }).done(function(data) {
            console.log(data);
            callback(data);
        });
    }

    setStartBoard(id, board, callback){
        $.ajax({
            url: this.url + '/games/' + id + '/start_board/' + this.ApiKey,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(board)
        }).done(function (data) {
            console.log(data);
            callback(data);
        })
    }
}
