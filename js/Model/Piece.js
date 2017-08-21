class pieceModel{
    constructor(id){
        this.id = id;
        this.forbiddenFields = ["4, 2", "4, 3", "5, 2", "5, 3", "4, 6", "4, 7", "5, 6", "5, 7"];
    }

    canMove(oldX, oldY, newX, newY){

        var field = newX + ", "+ newY;

        if(this.forbiddenFields.includes(field)){
            console.log("forbidden Field");
            return false;
        }

        console.log("check if can move");
        if(this.id === "B" || this.id === "F"){
            console.log("it is a bomb or flag");
            return false;
        }

        if(newX === oldX){
            console.log("stay on x");
            console.log(oldY + newY);
            if(Math.abs(oldY - newY) > 1){
                if(this.id !== "9"){
                    console.log("Cant Move X");
                    return false
                }
                else{
                    console.log("scout check");
                    if(oldY < newY){
                        oldY++;
                        while(oldY < newY){
                            if(this.fieldContainsUnitOrForbidden(oldX + ", " + oldY)){
                                return false
                            }
                            oldY++;
                        }
                    }else if(oldY > oldX){
                        oldY--;
                        while(oldY > newY){
                            if(this.fieldContainsUnitOrForbidden(oldX + ", " + oldY)){
                                return false
                            }
                            oldY--;
                        }
                    }
                }

            }
        }else if(newY === oldY){
            console.log("stay on y");
            console.log(oldX + newX);
            console.log(Math.abs(newX - oldX));
            if(Math.abs(newX - oldX) > 1){
                if(this.id !== "9"){
                    console.log("cant move Y");
                    return false;
                }else{
                    console.log("scout check");
                    if(oldX < newX){
                        oldX++;
                        while(oldX < newX){
                            if(this.fieldContainsUnitOrForbidden(oldX + ", " + oldY)){
                                return false
                            }
                            oldX++;
                        }
                    }
                    else if(oldX > newX){
                        oldX --;
                        while(oldX > newX){
                            if(this.fieldContainsUnitOrForbidden(oldX + ", " + oldY)){
                                return false
                            }
                            oldX--;
                        }
                    }
                }
            }
        }else{
            return false
        }

        return true;
    }

    fieldContainsUnitOrForbidden(id){
        console.log("check", id);
        if(document.getElementById(id).hasChildNodes()){
            return true;
        }else if(this.forbiddenFields.includes(id)){
            return true;
        }
        return false;

    }

    canPlace(x){
        console.log("trying to place on ", x);
        if(x<=5) {
            return false;
        }
        return true;
    }
}