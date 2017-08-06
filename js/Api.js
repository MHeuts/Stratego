
/**
 * 
 * @param {string} key 
 */

function StrategoApi(key){
    var api_key = '?api_key=' + key;
    console.log(api_key);

    this.url = 'https://strategoavans.herokuapp.com/api';
}

StrategoApi.prototype.getMe = function(){
    $.ajax({
        url: this.url + '/users/me' + api_key
    }).done(function(me){
        console.log('me', me)
    });
}

StrategoApi.prototype.getGames = function(){
    $.ajax({
        url: this.url + '/games' + api_key
    }).done(function(games) {
        console.log('Games:', games);
    });
};