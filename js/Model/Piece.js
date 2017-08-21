class pieceModel{
    constructor(id){

    }

    canMove(oldX, oldY, newX, newY){


        return false;
    }

    canPlace(x){
        console.log("trying to place on ", x)
        if(x<=5) {
            return false;
        }
        return true;
    }
}