class userModel{
    constructor(){
        this.id = 0;
        this.name = "";
    }

    set newUser(user){
        this.id = user.id;
        this.name = user.name;
    }
}