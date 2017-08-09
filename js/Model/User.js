function userModel(user){
    var user = {}
};

user.prototype.setUser = function(me){
    user.name = me.name;
    user.id = me.id;
};

user.prototype.getUser = function(){
    return(user);
};