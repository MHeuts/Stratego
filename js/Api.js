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
            callback(data);
        });
    }

    get getGames(){
        $.ajax({
            url: this.url + '/games' + this.ApiKey
        }).done(function(games) {
            console.log('Games:', games);
        });
    }
}