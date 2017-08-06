function LoginView(container){
    
    this.objects = {};
    this.container = container;

};

LoginView.prototype.show = function(){
    var input = document.createElement('input');
    input.type = "text";
    input.value = "ZjfjwPlX4eYydG9FRqytDBPg8AfhQvhN";
    this.container.appendChild(input);
    var button = document.createElement('button');
    button.innerHTML= "submit"
    this.container.appendChild(button);
}