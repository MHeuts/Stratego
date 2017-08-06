function LoginView(container){
    
    this.container = container;
    this.objects = {};

    this.input = document.createElement('input');
    this.input.type = "text";
    this.input.value = "test";
    this.button = document.createElement('button');
    this.button.innerHTML = "submit";
};

LoginView.prototype.show = function(){
    
    this.container.appendChild(this.input);
    this.container.appendChild(this.button);
}