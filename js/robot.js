class Robot{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.rx = 1;
        
        //this.dx = 1;
    }
    movimiento(dx){

        this.x +=dx*this.rx;

    }
    dibujado(imgRobot1){
        image(imgRobot1, this.x, this.y);

    }

}
