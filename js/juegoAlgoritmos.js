class retoLogico1 {

    constructor(){
        
        this.count = 0;
        this.temporizador = 0;
        this.nextBoton;
        this.segundero = 5;
        this.endTime = false;
        this.ArrayRespuestas = [];
        this.ArraySolucion = []; //GENERADA ALEATORIAMENTE
        this.finPregunta = true; // SI ACABÓ UNA PREGUNTA O SECUENCIA
        this.ArrayEventos = [
            {   
                nombre : "GIRA",
                archivo : "robotGira"
            },{
                nombre : "AGACHA",
                archivo : "robotAgacha"
            },{
                nombre : "IZQUIERDA",
                archivo : "robotIzquierda"
            },{
                nombre : "DERECHA",
                archivo : "robotDerecha"
            }
        ];
        this.nivelActual = 0;
        this.cambioDeNivel = false;
        // this.botonesInterface = [
        //     { nombre: "INICAR PATRON"},
        //     { nombre: "VERIFICAR"},
        //     { nombre: "REPETIR PATRÓN"}
        // ];
        this.espacioBotonesInterface = 80;
        this.vidas = 3;
        this.aciertos = 0;
        this.mouse = {
            x: 0,
            y: 0
        }
        this.robotAgacha;
        this.robotDerecha;
        this.robotIzquierda;
        this.robotGira;
        this.robot;
        this.robotQuieto;
        this.GAME_START = false;
        this.cambio = true;
        this.posAnimation = 0;
        this.frecuenciaMovimiento=0;
        this.endMove = false;
        this.GAME_OVER=false;
        this.yaVerificado = false;
        this.firstExcecution = true;
        this.tutorial;
        this.medioBuho;
        this.check;
        this.medioBuhoImage;
        this.checkImage;
        this.mostrandoTuto = false;
        this.endTutorial=false;
        this.premiacion=false;
        this.noPremiacion = false;

        this.buhoExitoImage;
        this.buhoExito;
        this.buhoFail;
        this.buhoFailImage;

        this.duracionPremiacion = 0;
        this.duracionNoPremiacion = 0;
        this.YANOPINTES = true;
        this.espacioBotones = 20;
        this.niveles = [
            {
                //NIVEL 0
                indicacionDelNivel : 'Vamos a enseñarle a lubricar su cuerpo',
                tiempoPorNivel : 10,
                arrayRespectivo : [
                    {
                        nombre: 'BRAZOS'
                    },{
                        nombre: 'RODILLAS'
                    },{
                        nombre: 'MOV. IZQUIERDA'
                    },{
                        nombre: 'MOV. DERECHA'
                    }
                ]
            },{
                //NIVEL 1
                indicacionDelNivel : 'Vamos a enseñarle a levantar pesas',
                tiempoPorNivel : 10,
                arrayRespectivo : [
                    {
                        nombre: 'BAJAR CUERPO'
                    },{
                        nombre: 'SUJETAR PESAS'
                    },{
                        nombre: 'SUBIR PESAS'
                    },{
                        nombre: 'BAJAR PESAS'
                    },
                ]
            },{
                //NIVEL 2
                indicacionDelNivel : 'Vamos a enseñarle un golpe especial',
                tiempoPorNivel : 10,
                arrayRespectivo : [
                    {
                        nombre: 'EQUIPAR PUÑOS'
                    },{
                        nombre: 'GOLPE DIRECTO'
                    },{
                        nombre: 'GOLPE ALTO'
                    },{
                        nombre: 'GOLPE BAJO'
                    }
                ]
            },{
                //NIVEL 3
                indicacionDelNivel : 'Vamos a enseñarle a volar',
                tiempoPorNivel : 10,
                arrayRespectivo : [
                    {
                        nombre: 'ACT. VUELO'
                    },{
                        nombre: 'CARGAR BATERIAS'
                    },{
                        nombre: 'MOTOR PRINCIPAL'
                    },{
                        nombre: 'MOTOR DE APOYO'
                    }
                ]
            }

        ];
        this.arrayBotones=[];

    }

    editarFuente(myFont){
        textFont(myFont);
    }

    tiempo(){
        
        this.frecuenciaMovimiento++;
        if(this.temporizador % 60  == 0 && this.temporizador !=0) {
            this.segundero--;
            this.temporizador = 0;
            

        }
        if(this.segundero <0){
            this.endTime = true;
        }

        if(this.frecuenciaMovimiento % 120 == 0){
            if(this.GAME_START){
                this.cambio = true;
                if(this.posAnimation+1 < this.niveles[this.nivelActual].arrayRespectivo.length ){ //this.ArraySolucion.length
                    this.posAnimation++;
                } else {
                    //console.log("PARA WE")
                    this.posAnimation = 0;
                    this.GAME_START = false;
                    this.endMove = true;

                }
            }
        }

        if(this.endTime){
            //this.verificar();
            if(!this.yaVerificado){
                this.vidas--;
                if(this.vidas != 2){
                    this.noPremiacion = true;
                }
                

            }
            this.yaVerificado=false;
            this.GAME_START = true;
            this.endTime = false;
            this.segundero = this.niveles[this.nivelActual].tiempoPorNivel;
            this.finPregunta = true;
            this.ArrayRespuestas.length=0; 
            this.endMove = false;
            this.cargarArraySolucion();
            //console.log(this.ArraySolucion);
            
        }
    
    }

    tiempoPremiacion(){
        this.duracionPremiacion++;
        
        if(this.duracionPremiacion % 90 == 0  && this.duracionPremiacion!==0){
            this.premiacion = false;
            this.checkImage.position.x = 890;
            this.checkImage.position.y = 44;
            this.checkImage.scale = 1;
            this.medioBuhoImage.visible = true;
            this.medioBuhoImage.position.x = 890;
            this.medioBuhoImage.position.y = 110;
            this.medioBuhoImage.scale = 1;
            this.duracionPremiacion = 0;
            this.robot.visible = true;
            this.posAnimation = 0;
            
        }
    }

    tiempoNoPremiacion(){
        this.duracionPremiacion++;
        
        if(this.duracionPremiacion % 90 == 0  && this.duracionPremiacion!==0){
            this.noPremiacion = false;
            this.checkImage.position.x = 890;
            this.checkImage.position.y = 44;
            this.checkImage.visible=true;
            this.checkImage.scale = 1;
            this.medioBuhoImage.visible = true;
            this.medioBuhoImage.position.x = 890;
            this.medioBuhoImage.position.y = 110;
            this.medioBuhoImage.scale = 1;
            this.robot.visible = true;
            this.posAnimation = 0;

            
        }
    }


    tiempoTutorial(){
        this.frecuenciaMovimiento ++;
        if(this.frecuenciaMovimiento % 60 == 0){
            if(this.GAME_START){
                this.cambio = true;
                if(this.posAnimation+1 < this.niveles[this.nivelActual].arrayRespectivo.length){
                    this.posAnimation++;
                } else {
                    //console.log("PARA WE")
                    this.posAnimation = 0;
                    this.GAME_START = false;
                    this.endMove = true;

                }
            }
        }
    }

    mostrarSegundero(x,y){ //ALERTA, ES TOMADO DESDE EL CENTRO HORIZONTAL

        fill(0,0,0)
        textSize(72);
        var cadenaTemp = " " + this.segundero + " ";
        text(cadenaTemp, x-textWidth(cadenaTemp)/2, y);

    }

    textos(x,y){ // X ES EN FUNCIÓN DEL CENTRO Y "Y" SI ES EL PIE DEL PRIMER TEXTO
        var interlineado = 20;
        var size = 36
        textSize(size)
        text("ALGORITMO", x - textWidth("ALGORITMO")/2, y);
        fill(84,190,195);
        noStroke()
        rect(x-150, y + 20, 300, 300);
        for(var i = 0 ; i<this.arrayBotones.length ; i++){
            // console.log("i")
            if(this.ArrayRespuestas[i]){
                fill(0,0,0);
                text(""+(i+1) + " : " + this.ArrayRespuestas[i].nombre ,x-100, y+80 + i*(size + interlineado));
            } else {
                fill(0,0,0);
                text(""+(i+1) + " : " ,x-100, y+80+ i*(size + interlineado));
            }
        }
        // for(var i = 0 ; i < )

        if(this.GAME_START){
            textAlign(CENTER,CENTER);
            text('Acción\nnúmero:\n'+''+(this.posAnimation+1), 912, 274); 

            if(this.tutorial && this.posAnimation ==3){

                this.mostrandoTuto = true;

            }


    
        } else {
            textAlign(CENTER,CENTER);
            text('Robot\nQuieto\n', 912, 274); 
            if(this.mostrandoTuto){
                this.endTutorial = true;
                this.frecuenciaMovimiento = 0;
                this.mostrandoTuto = false;
            }
        }

        textAlign(LEFT,BASELINE);
    }

    

    cargarArraySolucion(){
        
        // if(this.finPregunta){
            let temp = [];
            this.finPregunta = false;
            this.arrayBotones.length  = 0 ;
            for( let i=0 ; i<this.niveles[this.nivelActual].arrayRespectivo.length;i++){    
                temp.push(i);
            }

            temp = temp.sort(function() {return Math.random() - 0.5});


            //  for( var i = 0 ; i<this.niveles[this.nivelActual].arrayRespectivo.length ; i++){
            //      this.ArraySolucion.push(this.ArrayEventos[Math.floor(Math.random()*(3-0)-0)]);
            //  }

            for(let i = 0 ; i<temp.length ; i++){
                this.arrayBotones.push(this.niveles[this.nivelActual].arrayRespectivo[temp[i]]);
            }

        // }

    }

    botones(x,y){
        var size = 30;
        var bordeY = 5;
        var bordeX = 5;
        this.nextBoton = 0;
        
        for(var i = 0 ; i<this.niveles[this.nivelActual].arrayRespectivo.length ; i++){
            //
            //let temp = this.niveles[this.nivelActual].arrayRespectivo[i].nombre
            
            let temp = this.arrayBotones[i].nombre;
            textSize(size);
            fill(84,190,195);
            rect(x+this.nextBoton, y, textWidth(temp)+2*bordeX, size +2*bordeY+10);
            fill(0,0,0);
            text(temp, x+this.nextBoton + bordeX, y+size+bordeY)
            

            if(mouse.x>x+this.nextBoton && mouse.x<x+this.nextBoton+textWidth(temp)+2*bordeX 
            && mouse.y>y && mouse.y<y+size +2*bordeY+10){
                mouse.x = 0;
                mouse.y = 0;
                mouseIsPressed = false;
            //console.log(this.ArrayEventos[i].nombre);
                // this.ArrayRespuestas.push(this.niveles[this.nivelActual].arrayRespectivo[i]);
                this.ArrayRespuestas.push(this.arrayBotones[i]);
                if (this.ArrayRespuestas.length === this.ArrayEventos.length) {
                    this.verificar();
                    this.segundero = -1;
                    // this.temporizador=60;
                    // this.frecuenciaMovimiento=90;

                }
            
            }
            
            this.nextBoton += textWidth(temp) +this.espacioBotones;

        }

    }

    botonesAccionesTutorial(x,y){
        var size = 30;
        var bordeY = 5;
        var bordeX = 5;
        this.nextBoton = 0;
        //console.log(this.arrayBotones)
        
        for(var i = 0 ; i<this.ArrayEventos.length ; i++){
            let temp = this.arrayBotones[i].nombre;
            textSize(size);
            fill(84,190,195);
            rect(x+this.nextBoton, y, textWidth(this.niveles[this.nivelActual].arrayRespectivo[i].nombre)+2*bordeX, size +2*bordeY+10);
            fill(0,0,0);
            text(this.niveles[this.nivelActual].arrayRespectivo[i].nombre, x+this.nextBoton + bordeX, y+size+bordeY)
        

            this.nextBoton += textWidth(this.niveles[this.nivelActual].arrayRespectivo[i].nombre) +this.espacioBotones;

        }

    }

    botonesTutorial(x,y){ // BOTONES DE LAS ACCIONES DEL ROBOT PARA SELECCIONAR Ejemplo: DERECHA, IZQUIERDA .. ETC
        var size = 30;
        var bordeY = 5;
        var bordeX = 5;
        this.nextBoton = 0;
        for(var i = 0 ; i<this.niveles[this.nivelActual].arrayRespectivo.length ; i++){
            
            textSize(size);
            fill(84,190,195);
            if(this.posAnimation == i && this.GAME_START && this.YANOPINTES){
                strokeWeight(5)
                stroke('red');
                //console.log(i)
            }else{
                noStroke();
            }
            //this.ArrayEventos[i].nombre
            rect(x+this.nextBoton, y, textWidth(this.niveles[this.nivelActual].arrayRespectivo[i].nombre)+2*bordeX, size +2*bordeY+10);
            noStroke();
            fill(0,0,0);
            text(this.niveles[this.nivelActual].arrayRespectivo[i].nombre, x+this.nextBoton + bordeX, y+size+bordeY)
            

            // if(mouse.x>x+this.nextBoton && mouse.x<x+this.nextBoton+textWidth(this.ArrayEventos[i].nombre)+2*bordeX 
            // && mouse.y>y && mouse.y<y+size +2*bordeY+10){
            // //console.log(this.ArrayEventos[i].nombre);
            // this.ArrayRespuestas.push(this.ArrayEventos[i]);
            // mouse.x = 0;
            // mouse.y = 0;
            // mouseIsPressed = false;
            // }

             this.nextBoton += textWidth(this.niveles[this.nivelActual].arrayRespectivo[i].nombre) +this.espacioBotones;

        }

    }

    /**POR BORRAR */
    botonesFunciones(x,y){
        var i = 1
        /*for(var i = 0 ; i<this.botonesInterface.length ; i++)*/{
            var size = 30;
            var bordeX = 5;
            var bordeY = 5;
            
            fill(255, 0, 0);
            rect(x-textWidth(this.botonesInterface[i].nombre)/2-bordeX, y+i*this.espacioBotonesInterface-size-bordeY,textWidth(this.botonesInterface[i].nombre)+2*bordeX,size +2*bordeY + 7)
            
            textSize(size);
            fill(0, 0, 0);
            text(this.botonesInterface[i].nombre, x-textWidth(this.botonesInterface[i].nombre)/2, y+i*this.espacioBotonesInterface);
            
            if(mouse.x>x-textWidth(this.botonesInterface[i].nombre)/2-bordeX && mouse.x< x-textWidth(this.botonesInterface[i].nombre)/2-bordeX + textWidth(this.botonesInterface[i].nombre)+2*bordeX
        && mouse.y>y+i*this.espacioBotonesInterface-size-bordeY && mouse.y<y+i*this.espacioBotonesInterface-size-bordeY+size +2*bordeY + 7){
            //console.log(this.botonesInterface[i].nombre);

            switch(i){
                case 0 : { //INICIAR PATRON o JUEGO XD
                    
                    this.GAME_START = true;
                    if(!this.tutorial){
                        this.cambio = true;
                        this.temporizador = 0;
                    }
                    if(this.tutorial){
                        this.frecuenciaMovimiento = 0;
                    }
                    
                } break; //EJECUCIÓN DEL PATRÓN 
                case 1 :if(!this.tutorial){//EJECUCIÓN DEL VERIFICADOR 
                    
                    this.verificar();
                    this.yaVerificado = true;
                    // this.segundero = 10;
                    // this.temporizador = 0;
                    // this.GAME_START = true;
                    // this.cambio = true;
                    this.endTime = true;
                    this.posAnimation = 0;
                } break; 
                case 2 :if(!this.tutorial){
                    this.posAnimation = 0;
                    this.endMove = false;
                } break; //EJECUCIÓN DEL PATRÓN 
            }

            mouse.x = 0;
            mouse.y = 0;
            mouseIsPressed = false;
        }


        }
    }
    /**FIN POR BORRAR */


    mostrarEstatus(x,y){
        var size = 50
        textSize(size);
        fill(50,182,204);
        text(""+ this.vidas, x-textWidth(" "+this.vidas+" ")/2, y+60    );
        fill(49,164,55);
        text(""+ this.aciertos, x-textWidth(" "+this.aciertos+" ")/2, y);
    }

    
    
    controlMouse(){
        if(mouseIsPressed){
            mouse.x = mouseX;
            mouse.y = mouseY;
        }
    }

    iniciarSprite(){
        this.robot = createSprite(750,265);
        this.robot.addAnimation('base',this.robotQuieto);
        this.robot.addAnimation('rodillas',this.robotRodillas);
        this.robot.addAnimation('brazos',this.robotBrazos);
        this.robot.addAnimation('izquierda',this.robotIzquierda);
        this.robot.addAnimation('derecha',this.robotDerecha);
        this.robot.addAnimation('golpeDirecto', this.robotGolpeDirecto);
        this.robot.addAnimation('golpeHaciaAbajo', this.robotGolpeHaciaAbajo);
        this.robot.addAnimation('golpeHaciaArriba', this.robotGolpeHaciaArriba);
        this.robot.addAnimation('transformarPunos', this.robotTransformarPunos);
        this.robot.addAnimation('bajarCuerpo', this.robotBajarCuerpo);
        this.robot.addAnimation('bajarPesas', this.robotBajarPesas);
        this.robot.addAnimation('Estandar', this.robotEstandar);
        this.robot.addAnimation('levantarPesas', this.robotLevantarPesas);
        this.robot.addAnimation('sujetarPesas', this.robotSujetarPesas);
        this.robot.addAnimation('activarModoVuelo', this.robotActivarModoVuelo);
        this.robot.addAnimation('calentarMotorPrincipal', this.robotCalentarMotorPrincipal);
        this.robot.addAnimation('calentarMotorSecundario', this.robotCalentarMotorSecundario);
        this.robot.addAnimation('recargarBateria', this.robotRecargarBaterias);

           
                    

        this.medioBuhoImage = createSprite(890,110);
        this.medioBuhoImage.addAnimation('medioBuho',this.medioBuho);
        this.checkImage = createSprite(890,44);
        this.checkImage.addAnimation('check',this.check);

        
        this.buhoExitoImage = createSprite(300, 300);
        this.buhoExitoImage.addAnimation('buhoExito', this.buhoExito);



        this.buhoFailImage = createSprite(300,300);
        this.buhoFailImage.addAnimation('buhoFail', this.buhoFail);




        // this.buho = createSprite(908,437);
        // this.buho.addAnimation('point', this.point);
        // this.buho.addAnimation('noPoint', this.noPoint);
        // this.buho.addAnimation('base'), 


    }
    iniciarSpriteExito(){
        this.buhoExitoImage = createSprite(300,300);
        this.buhoExitoImage.addAnimation('buhoExito',this.buhoExito);

    }

    iniciarSpriteFail(){
        this.buhoFailImage = createSprite(300,300);
        this.buhoFailImage.addAnimation('buhoFail',this.buhoFail);
    }


    iniciarPatron() {
        if (this.GAME_START && this.cambio) {
            // console.log(this.ArraySolucion);

            switch (this.niveles[this.nivelActual].arrayRespectivo[this.posAnimation].nombre) {
                case 'BRAZOS':
                    this.robot.changeImage('brazos');
                    break;
                case 'RODILLAS':
                    this.robot.changeImage('rodillas');
                    break;
                case 'MOV. IZQUIERDA':
                    this.robot.changeImage('izquierda');
                    break;
                case 'MOV. DERECHA':
                    this.robot.changeImage('derecha');
                    break;
                case 'BAJAR CUERPO':
                    this.robot.changeImage('bajarCuerpo');
                    break;
                case 'SUJETAR PESAS':
                    this.robot.changeImage('sujetarPesas');
                    break;
                case 'SUBIR PESAS':
                    this.robot.changeImage('levantarPesas');
                    break;
                case 'BAJAR PESAS':
                    this.robot.changeImage('bajarPesas');
                    break;
                case 'EQUIPAR PUÑOS':
                    this.robot.changeImage('transformarPunos');
                    break;
                case 'GOLPE DIRECTO':
                    this.robot.changeImage('golpeDirecto');
                    break;
                case 'GOLPE ALTO':
                    this.robot.changeImage('golpeHaciaArriba');
                    break;
                case 'GOLPE BAJO':
                    this.robot.changeImage('golpeHaciaAbajo');
                    break;
                case 'ACT. VUELO':
                    this.robot.changeImage('activarModoVuelo');
                    break;
                case 'CARGAR BATERIAS':
                    this.robot.changeImage('recargarBateria');
                    break;
                case 'MOTOR PRINCIPAL':
                    this.robot.changeImage('calentarMotorPrincipal');
                    break;
                case 'MOTOR DE APOYO':
                    this.robot.changeImage('calentarMotorSecundario');
                    break;
            }


        }
        if(this.endMove){
            this.robot.changeImage('base');
            this.temporizador +=1;
        }

       
    }

    verificar(){
        if(true){ //!this.yaVerificado
            for(var i = 0 ; i<this.niveles[this.nivelActual].arrayRespectivo.length ; i++){
                if(this.ArrayRespuestas[i]){
                    if(this.niveles[this.nivelActual].arrayRespectivo[i].nombre === this.ArrayRespuestas[i].nombre){
                        this.count++;
                     }
                }
                
            }
            console.log(this.count);
            if(this.count == this.niveles[this.nivelActual].arrayRespectivo.length){
    
                this.aciertos ++;
                this.count=0;
                this.premiacion = true;
                //this.cambioDeNivel=true;
                this.nivelActual ++;
                //INVOCAR AL BUHO
    
            } else {
                this.count = 0;
                this.vidas --;
                this.noPremiacion=true;
            }
            this.yaVerificado=true;
        }

    }


    carga(){
        // this.robotAgacha=loadAnimation('./img/robot/compressed/salto1.png','./img/robot/compressed/salto2.png','./img/robot/compressed/salto3.png','./img/robot/compressed/salto4.png','./img/robot/compressed/salto5.png','./img/robot/compressed/salto6.png','./img/robot/compressed/salto7.png','./img/robot/compressed/salto8.png','./img/robot/compressed/salto9.png');
        // this.robotDerecha=loadAnimation('./img/robot/compressed/derecha1.png','./img/robot/compressed/derecha2.png','./img/robot/compressed/derecha3.png','./img/robot/compressed/derecha4.png','./img/robot/compressed/derecha5.png','./img/robot/compressed/derecha6.png','./img/robot/compressed/derecha7.png');
        // this.robotIzquierda=loadAnimation('./img/robot/compressed/izquierda1.png','./img/robot/compressed/izquierda2.png','./img/robot/compressed/izquierda3.png','./img/robot/compressed/izquierda4.png','./img/robot/compressed/izquierda5.png','./img/robot/compressed/izquierda6.png','./img/robot/compressed/izquierda7.png');
        // this.robotGira=loadAnimation('./img/robot/compressed/giro1.png','./img/robot/compressed/giro2.png','./img/robot/compressed/giro3.png','./img/robot/compressed/giro4.png','./img/robot/compressed/giro5.png','./img/robot/compressed/giro6.png');
        
        /**ENGRASAR CUERPO */
        let direccion = './img/robots/engrasarCuerpo/';
        this.robotRodillas = loadAnimation(direccion + 'salto1.png', direccion + 'salto2.png', direccion + 'salto3.png', direccion + 'salto4.png', direccion + 'salto5.png', direccion + 'salto6.png', direccion + 'salto7.png', direccion + 'salto8.png', direccion + 'salto9.png');
        this.robotBrazos = loadAnimation(direccion + 'brazos1.png',direccion + 'brazos1.png', direccion + 'brazos2.png',  direccion + 'brazos2.png',direccion + 'brazos3.png', direccion + 'brazos3.png',direccion + 'brazos4.png',direccion + 'brazos4.png', direccion + 'brazos5.png',direccion + 'brazos5.png', direccion + 'brazos6.png',direccion + 'brazos6.png', direccion + 'brazos7.png',direccion + 'brazos7.png');
        this.robotIzquierda = loadAnimation(direccion + 'izquierda1.png', direccion + 'izquierda2.png', direccion + 'izquierda3.png', direccion + 'izquierda4.png', direccion + 'izquierda5.png', direccion + 'izquierda6.png', direccion + 'izquierda7.png', );
        this.robotDerecha = loadAnimation(direccion + 'derecha1.png', direccion + 'derecha2.png', direccion + 'derecha3.png', direccion + 'derecha4.png', direccion + 'derecha5.png', direccion + 'derecha6.png', direccion + 'derecha7.png');

        /**GOLPE ESPECIAL */
        direccion = './img/robots/golpeEspecial/';
        this.robotGolpeDirecto = loadAnimation(direccion + 'golpeDirecto1.png', direccion + 'golpeDirecto2.png', direccion + 'golpeDirecto3.png', direccion + 'golpeDirecto4.png', direccion + 'golpeDirecto5.png');
        this.robotGolpeHaciaAbajo = loadAnimation(direccion + 'golpeHaciaAbajo1.png', direccion + 'golpeHaciaAbajo2.png', direccion + 'golpeHaciaAbajo3.png', direccion + 'golpeHaciaAbajo4.png', direccion + 'golpeHaciaAbajo5.png', direccion + 'golpeHaciaAbajo6.png', direccion + 'golpeHaciaAbajo7.png', direccion + 'golpeHaciaAbajo8.png');
        this.robotGolpeHaciaArriba = loadAnimation(direccion + 'golpeHaciaArriba1.png', direccion + 'golpeHaciaArriba2.png', direccion + 'golpeHaciaArriba3.png', direccion + 'golpeHaciaArriba4.png', direccion + 'golpeHaciaArriba5.png', direccion + 'golpeHaciaArriba6.png')
        this.robotTransformarPunos = loadAnimation(direccion + 'transformarPunos1.png', direccion + 'transformarPunos2.png', direccion + 'transformarPunos3.png', direccion + 'transformarPunos4.png', direccion + 'transformarPunos5.png');
        /**PESAS */
        direccion = './img/robots/pesas/';
        this.robotBajarCuerpo = loadAnimation(direccion + 'bajarCuerpo1.png', direccion + 'bajarCuerpo2.png', direccion + 'bajarCuerpo3.png', direccion + 'bajarCuerpo4.png');
        this.robotBajarPesas = loadAnimation(direccion + 'bajarPesas1.png', direccion + 'bajarPesas2.png', direccion + 'bajarPesas3.png', direccion + 'bajarPesas4.png', direccion + 'bajarPesas5.png', direccion + 'bajarPesas6.png', direccion + 'bajarPesas6.png', direccion + 'bajarPesas6.png', direccion + 'bajarPesas6.png', direccion + 'bajarPesas6.png', direccion + 'bajarPesas6.png', direccion + 'bajarPesas6.png', direccion + 'bajarPesas6.png', direccion + 'bajarPesas6.png');
        this.robotEstandar = loadAnimation(direccion + 'estandar.png');
        this.robotLevantarPesas = loadAnimation(direccion + 'levantarPesas1.png', direccion + 'levantarPesas2.png', direccion + 'levantarPesas3.png', direccion + 'levantarPesas4.png', direccion + 'levantarPesas5.png', direccion + 'levantarPesas6.png', direccion + 'levantarPesas6.png', direccion + 'levantarPesas6.png', direccion + 'levantarPesas6.png', direccion + 'levantarPesas6.png', direccion + 'levantarPesas6.png', direccion + 'levantarPesas6.png', direccion + 'levantarPesas6.png');
        this.robotSujetarPesas = loadAnimation(direccion + 'sujetarPesas1.png', direccion + 'sujetarPesas2.png', direccion + 'sujetarPesas3.png', direccion + 'sujetarPesas4.png', direccion + 'sujetarPesas5.png', direccion + 'sujetarPesas5.png', direccion + 'sujetarPesas5.png', direccion + 'sujetarPesas5.png', direccion + 'sujetarPesas5.png', direccion + 'sujetarPesas5.png', direccion + 'sujetarPesas5.png', direccion + 'sujetarPesas5.png', direccion + 'sujetarPesas5.png');
        /**VUELO */
        direccion = './img/robots/vuelo/';
        this.robotActivarModoVuelo = loadAnimation(direccion + 'activarModoVuelo1.png', direccion + 'activarModoVuelo2.png', direccion + 'activarModoVuelo3.png', direccion + 'activarModoVuelo4.png');
        this.robotCalentarMotorPrincipal = loadAnimation(direccion + 'calentarMotorPrincipal1.png', direccion + 'calentarMotorPrincipal2.png', direccion + 'calentarMotorPrincipal3.png', direccion + 'calentarMotorPrincipal4.png', direccion + 'calentarMotorPrincipal5.png', direccion + 'calentarMotorPrincipal6.png');
        this.robotCalentarMotorSecundario = loadAnimation(direccion + 'calentarMotorSecundario1.png', direccion + 'calentarMotorSecundario2.png', direccion + 'calentarMotorSecundario3.png', direccion + 'calentarMotorSecundario4.png', direccion + 'calentarMotorSecundario5.png', direccion + 'calentarMotorSecundario6.png', direccion + 'calentarMotorSecundario7.png');
        this.robotRecargarBaterias = loadAnimation(direccion+'recargarBateria1.png',direccion+'recargarBateria1.png',direccion+'recargarBateria2.png',direccion+'recargarBateria2.png',direccion+'recargarBateria3.png',direccion+'recargarBateria3.png',direccion+'recargarBateria4.png',direccion+'recargarBateria4.png',direccion+'recargarBateria5.png',direccion+'recargarBateria5.png',direccion+'recargarBateria6.png',direccion+'recargarBateria6.png',direccion+'recargarBateria7.png',direccion+'recargarBateria7.png')



        //FONDO
        this.robotQuieto = loadImage('./img/robot/compressed/izquierda1.png');
        this.medioBuho = loadImage('./img/medioBuho.png');
        this.check = loadImage('./img/check.png');
        this.buhoExito = loadAnimation('./img/buhos/buhoExito1.png','./img/buhos/buhoExito2.png','./img/buhos/buhoExito3.png','./img/buhos/buhoExito4.png','./img/buhos/buhoExito5.png','./img/buhos/buhoExito6.png','./img/buhos/buhoExito7.png','./img/buhos/buhoExito8.png','./img/buhos/buhoExito9.png','./img/buhos/buhoExito10.png','./img/buhos/buhoExito11.png','./img/buhos/buhoExito12.png','./img/buhos/buhoExito13.png');
        this.buhoFail = loadAnimation('./img/buhos/buhoFail2.png','./img/buhos/buhoFail3.png','./img/buhos/buhoFail4.png');



    }

    textoGuia(contenido){
        textAlign(CENTER, CENTER);
        textSize(36)
        fill('red');
        text(contenido, 500-100, 250-50,200);
        textAlign(LEFT,BASELINE);
    }

    tutorialPantalla(myFont){
        //this.cargarArraySolucion();
        //console.log(this.arrayBotones)
        textAlign(CENTER);
        textFont(myFont);
        textSize(48);
        text('¿DESEAS VER EL TUTORIAL?', canvas.width/2 , canvas.height/2 -50);
        fill('red');
        noStroke();
        rectMode(CENTER);
        rect(canvas.width/2 - 200, canvas.height/2 +20, 100, 75);
        rect(canvas.width/2 + 200, canvas.height/2 +20,100, 75);
        fill('black');
        text('SÍ',canvas.width/2 - 200, canvas.height/2 +35);
        text('NO',canvas.width/2 + 200, canvas.height/2+35);

        if(mouse.x>canvas.width/2 - 200 -50 && mouse.x <canvas.width/2 - 200+ 100 -50&& mouse.y > canvas.height/2 +20 -35.5&& mouse.y < canvas.height/2 +20+75 -35.5){
            //console.log('Sí')
            mouse.x = 0;
            mouse.y = 0;
            mouseIsPressed = false;
            this.tutorial = true;
            this.firstExcecution = false;
        } 
        if(mouse.x>canvas.width/2 + 200 -50&& mouse.x <canvas.width/2 + 200+ 100 -50&& mouse.y > canvas.height/2 +20 -35.5&& mouse.y < canvas.height/2 +20+75-35.5){
            //console.log('NO')
            mouse.x = 0;
            mouse.y = 0;
            mouseIsPressed = false;
            this.tutorial = false;
            this.firstExcecution = false;
            this.endTime = true;
        } 

    }

    iniciarPatronTutorial(){
        if (this.GAME_START && this.cambio) {

            switch (this.niveles[this.nivelActual].arrayRespectivo[this.posAnimation].nombre) {
                case 'BRAZOS':
                    this.robot.changeImage('brazos')
                    break;
                case 'RODILLAS':
                    this.robot.changeImage('rodillas')
                    break;
                case 'MOV. IZQUIERDA':
                    this.robot.changeImage('izquierda')
                    break;
                case 'MOV. DERECHA':
                    this.robot.changeImage('derecha')
                    break;
                
            }
        }
        if(this.endMove){
            this.robot.changeImage('base');
        }

    }

    imagenes(img1){
        image(img1, 850, 370, 120, 120);
        
    }

    main(myFont,img1){
        
        console.log(this.nivelActual);
        //console.log(this.arrayBotones);

        if(this.firstExcecution){

            this.tutorialPantalla(myFont);
            this.buhoExitoImage.visible = false;
            this.buhoFailImage.visible = false;

            //this.firstExcecution = false;
        } else {
            
            if(this.tutorial){

                this.GAME_START = true;
                this.editarFuente(myFont);
                //this.tiempo();
                this.tiempoTutorial();
                this.mostrarSegundero(canvas.width/2,100)
                
                //juego.cargarArraySolucion();
                this.textos(230,100);
                this.botonesTutorial(80,430);
                if(this.endTutorial){
                    this.YANOPINTES = false;
                    this.posAnimation = 0;
                    // textAlign(CENTER,CENTER);
                    // textSize(48)
                    // fill('red');
                    // text('VAMOS!', 500, 260);

                    /**FUNCION TEXTO EN PANTALLA GUIA */
                    
                    this.textoGuia('VAMOS!');

                    // this.GAME_START = true;
                    textAlign(LEFT,BASELINE)
                    if(this.frecuenciaMovimiento % 90 == 0 && this.frecuenciaMovimiento!=0){
                        this.tutorial = false;
                        this.endTime = true;
                        this.endMove = true;
                        //this.cambio = true;
                        //this.iniciarPatron();
                    }
                    //this.botonesFunciones(500,200);
                    this.textoGuia(this.niveles[this.nivelActual].indicacionDelNivel);
                    this.mostrarEstatus(950,60);
                    //this.controlMouse();
                    this.iniciarPatronTutorial();
                    this.imagenes(img1);
                    //image(imgRobot1,650,150);
                    
                    drawSprites();


                } else {
                    //this.botonesFunciones(500,200); DETALLES
                    this.mostrarEstatus(950,60);
                this.controlMouse();
                this.iniciarPatronTutorial();
                this.imagenes(img1);
                //image(imgRobot1,650,150);
                drawSprites();

                }
                
                
            } else {
                if(!this.premiacion && !this.noPremiacion){
                    
                    this.editarFuente(myFont);
                    this.tiempo();
                    this.mostrarSegundero(canvas.width/2,100)
                    
                    //juego.cargarArraySolucion();
                    this.textos(230,100);
                    if(this.endMove){
                        this.botones(80,430);
                        //mouse.x = 0 ;
                        //mouse.y = 0 ;
                    } else {
                        this.botonesAccionesTutorial(80,430);
                        mouse.x = 0 ;
                        mouse.y = 0 ;
                    }
                    this.textoGuia(this.niveles[this.nivelActual].indicacionDelNivel);
                    //this.botonesFunciones(500,200);
                    this.mostrarEstatus(950,60);
                    this.controlMouse();
                    this.iniciarPatron();
                    this.imagenes(img1);
                    
                    //image(imgRobot1,650,150);
                    this.buhoExitoImage.visible = false
                    this.buhoFailImage.visible = false;
                    drawSprites();
                } else {
                    if(this.premiacion){
                        //console.log('BIEN WE');
                        //
                        if(this.cambioDeNivel){
                            this.nivelActual++;
                        }
                        
                        
                        this.buhoFailImage.visible =false;
                        this.robot.visible=false;
                        this.medioBuhoImage.visible=false;
                        this.checkImage.visible = true;



                        this.buhoExitoImage.visible = true;
                        //this.buhoExitoImage.scale =2.5;
                        //this.buhoExitoImage.velocity(0.5,0);
                        // this.buhoExitoImage.height = 1000;
                        
                        this.checkImage.position.x = 500+150;
                        this.checkImage.position.y = 280;
                        this.checkImage.scale = 2.5;


                        this.medioBuhoImage.position.x = 500+80;
                        this.medioBuhoImage.position.y = 200;
                        this.buhoExitoImage.position.y = 250;
                        textFont(myFont)
                        textSize(150);
                        fill('green');
                        text('+1', 500 - textWidth('+1')/2, 250+75);
                        // this.medioBuho.width =

                        this.tiempoPremiacion();

                    }
                    if(this.noPremiacion){
                        //console.log('FAIL WE');

//                        this.iniciarSpriteFail();
                        this.robot.visible=false;
                        this.checkImage.visible = false;        
                        this.buhoFailImage.visible = true;
                        this.buhoExitoImage.visible = false;

                        //this.buhoFailImage.scale = 2.5
                        this.buhoFailImage.position.y = 250;

                        this.medioBuhoImage.visible = true;
                        this.medioBuhoImage.position.x = 500+150;
                        this.medioBuhoImage.position.y = 280;
                        this.medioBuhoImage.scale = 2.5;

                        textFont(myFont)
                        textSize(150);
                        fill('red');
                        text('-1', 500 - textWidth('-1')/2, 250+75);
                        this.tiempoNoPremiacion();
                    }

                    drawSprites();
                }
                
            }
            

        }



    }
}