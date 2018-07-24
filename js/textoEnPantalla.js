class textoEnPantalla {
    constructor(textoPregunta,inicio) {
        this.textoPregunta = textoPregunta;
        this.linea1;
        this.linea2;
        this.begin = 0;
        this.ArrayLineas = [];
        this.cantidadLetras = 0;

        this.i = inicio;
        this.finDeEscitura = false;
        this.control = 0;
        this.temporizador = 1;

        this.interlineado = 5;
        this.size = 36;
        this.inicio = inicio;

    }

    intro() {
        for (var q = 0; q < this.textoPregunta.length; q++) {
            if (this.textoPregunta[q] == "/") {
                if (this.ArrayLineas.length == 0) {
                    var modelo = {
                        contenido: "",
                        mostrado: ""
                    }
                    modelo.contenido = this.textoPregunta.substr(this.begin, q);
                    this.ArrayLineas.push(modelo);
                    this.cantidadLetras = 0;
                } else {
                    var modelo = {
                        contenido: "",
                        mostrado: ""
                    }
                    modelo.contenido = this.textoPregunta.substr(this.begin + 1, this.cantidadLetras);
                    this.ArrayLineas.push(modelo);
                    this.cantidadLetras = 0;
                }
                this.begin = q;
            } else {
                this.cantidadLetras++;
            }
        }
    }

    mostrar(x, y,color,estadoStroke,ancho) {

        var espaciadoBordesX = 15;
        var espaciadoBordesY = 15;


            fill(color);//255, 204, 0 rgb(255,204,0)
            if(estadoStroke){
                stroke(0,0,0);
                //noFill();
                strokeWeight(10.0);
                strokeJoin(ROUND);
            }

            beginShape();
            vertex(x-espaciadoBordesX, y - this.size- espaciadoBordesY);
            if(posx<ancho){ //ANCHO DEL RECTANGULO DEF. 780
            vertex(x  + posx, y - this.size- espaciadoBordesY);
            vertex(x + posx,this.ArrayLineas.length*(36+5) + y - espaciadoBordesY);
            posx+=20;
            } else {
            vertex(x + posx, y - this.size- espaciadoBordesY);
            vertex(x + posx,this.ArrayLineas.length*(36+5) + y - espaciadoBordesY);
            }
            // vertex(782 + x, y);
            // vertex(782 + x,130 + y);
            vertex(x-espaciadoBordesX, this.ArrayLineas.length*(36+5)+ y - espaciadoBordesY);
            vertex(x-espaciadoBordesX, y - this.size- espaciadoBordesY);
            endShape();


        if(this.inicio !=0 ){
            for(var q=0 ; q<this.inicio ; q++){
                this.ArrayLineas[q].mostrado = this.ArrayLineas[q].contenido;
            }
        }



        for (var q = 0; q < this.ArrayLineas.length; q++) {
            noStroke();
            textFont(myFont);
            fill(0, 0, 0);
            textSize(this.size);

            if (q == 0) {
                text(this.ArrayLineas[q].mostrado, x, y);
            } else {

                text(this.ArrayLineas[q].mostrado, x, y + q * (this.size + this.interlineado));
            }

        }

        // if(q>=this.inicio){

                    
            if (this.i < this.ArrayLineas.length) {
                if (this.temporizador % 1 == 0) {
    
                    if (this.control < this.ArrayLineas[this.i].contenido.length) {
                        this.ArrayLineas[this.i].mostrado = this.ArrayLineas[this.i].mostrado + this.ArrayLineas[this.i].contenido[this.control];
                        this.control++;
                    } else {
                        this.i++;
                        this.control = 0;
                    }
                }
            } else { this.finDeEscitura = true; }

        // } else {

        //     q=this.inicio;
        // }


        this.temporizador++;
    }
    
}