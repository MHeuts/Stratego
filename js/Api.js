
/**
 * 
 * @param {string} key 
 */

function StrategoApi(key){
    this.ApiKey = '?api_key=' + key;
    console.log(this.ApiKey);

    this.url = 'https://strategoavans.herokuapp.com/api';
}

StrategoApi.prototype.getMe = function(){
    $.ajax({
        url: this.url + '/users/me' + this.ApiKey
    }).done(function(me){
        console.log('me', me)
    });
}

StrategoApi.prototype.getGames = function(){
    $.ajax({
        url: this.url + '/games' + this.ApiKey
    }).done(function(games) {
        console.log('Games:', games);
    });
};