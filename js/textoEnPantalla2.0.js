class textoEnPantalla {
    constructor(textoPregunta,inicio) {
        this.textoPregunta = textoPregunta;
        this.textoMostrado = "";
        this.iterador = 0;
        this.firstExecution = true;
        this.size = 36;
        this.inicio = inicio;
    }
    intro(){

    }

    mostrar(x, y,color,estadoStroke,ancho,optionalInicio) { //SI EL ANCHO ES MAYOR, SE EMPLEARÁ EL POSX
//x, y,color,estadoStroke,ancho
        if (this.firstExecution) {
            this.firstExecution = false;
            if (optionalInicio == undefined) {
                this.textoMostrado = "";
                this.iterador = 1;


            } else {
                this.textoMostrado = optionalInicio;
                this.iterador = optionalInicio.length - 1;
            }

        }

        var espaciadoBordesX = 15;
        var espaciadoBordesY = 15;

        SETUP_RECT: {

            fill(color);//255, 204, 0 rgb(255,204,0)
            if (estadoStroke) {
                stroke('black');
                //noFill();
                strokeWeight(10.0);
                strokeJoin(ROUND);
            }

            var alturaCuadro = 100; //this.ArrayLineas.length * (36 + 5) + y - espaciadoBordesY
            beginShape();
            vertex(x - espaciadoBordesX, y - this.size - espaciadoBordesY);
            if (posx < ancho) { //ANCHO DEL RECTANGULO DEF. 780
                vertex(x + posx, y - this.size - espaciadoBordesY);
                vertex(x + posx, alturaCuadro);
                posx += 10;
            } else {
                vertex(x + posx, y - this.size - espaciadoBordesY);
                vertex(x + posx, alturaCuadro);
            }

            vertex(x - espaciadoBordesX, alturaCuadro);
            vertex(x - espaciadoBordesX, y - this.size - espaciadoBordesY);
            endShape();
        }


        TEXTO_EN_PANTALLA: {

            this.textoMostrado = this.textoPregunta.substr(0, this.iterador);
            noStroke();
            textFont(myFont);
            fill('black');
            textSize(this.size);
            text(this.textoMostrado, x, y, ancho - espaciadoBordesX);
            if (true) {
                if (this.iterador < this.textoPregunta.length) {
                    this.iterador += 1;
                }

            }
        }
    }


}