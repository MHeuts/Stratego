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
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({"ai": true})
        }).done(function(data) {
            console.log(data);
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

    
}
