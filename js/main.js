
var canvas;


/****/

var contadoDeTiempo = 0;
var tiempoCambio=90;
var procesoDeCambio = false;

var dialogo=0;

var divisor = {
    x: 307-20,
    y: 103,
    dx: 3,
    dy: 332
}

var seHaSeleccionado= false;


var img;
var titulos = [
    {
        texto: "INGENIERÍA DE SOFTWARE", //CARRERA
        tamano: 36
    }, {
        texto: "HABILIDADES QUE",
        tamano: 20
    }, {
        texto: "DESARROLLAREMOS",
        tamano: 20
    }, {
        texto: "DESAFIOS",
        tamano: 20
    }
];

var ramas = [
    {
        nombre : "BASICAS",
        x:385,
        y:240
    },{
        nombre : "MODELAMIENTO DE DATOS",
        x:520,
        y:140   
    },{
        nombre : "PROGRAMACIÓN",
        x:600,
        y:257
    },{
        nombre : "PROCESOS",
        x:630,
        y:398
    }
]


var ArraysMensajes = [];

var habilidades = [
    {
        nombre: "ANÁLISIS DE DATOS",
        archivo : "analisisdedatos",
        colorBorde:"rgb(153,22,28)",
        colorRelleno:"rgb(197,101,86)",
        avance:90, //VALOR EN PORCENTAJE
        x:87,
        y:166,
        dx:149,
        dy:18
    },{
        nombre: "PLANIFICACIÓN Y ORGANIZACIÓN",
        archivo : "planificacionyorganizacion",
        colorBorde:"rgb(38,123,200)",
        colorRelleno:"rgb(77,169,204)",
        avance:40, //VALOR EN PORCENTAJE
        x:87,
        y:230,
        dx:149,
        dy:18
    },{
        nombre: "GESTIÓN Y ADMINISTRACIÓN",
        archivo : "gestionyadministracion",
        colorBorde:"rgb(78,157,64)",
        colorRelleno:"rgb(168,192,109)",
        avance:80, //VALOR EN PORCENTAJE
        x:87,
        y:294,
        dx:149,
        dy:18
    },{
        nombre: "MANEJO DE CIENCIA Y TECNOLOGÍA",
        archivo : "manejodecienciaytecnologia",
        colorRelleno:"rgb(165,114,168)",
        colorBorde:"rgb(114,52,135)",
        avance:50, //VALOR EN PORCENTAJE
        x:87,
        y:358,
        dx:149,
        dy:18
    },{
        nombre: "DISEÑO Y FABRICACIÓN",
        archivo : "diseñoyfabricacion",
        colorRelleno:"rgb(54,140,178)",
        colorBorde:"rgb(13,108,132)",
        avance:60, //VALOR EN PORCENTAJE
        x:87,
        y:422,
        dx:149,
        dy:18
    }
];

var desafios = [
    {
        nombre: "basica1", //radioPortada 27
        titulo:"RETO BASICO",
        x:364-25,
        y:341,
        color:"rgb(224,184,47)",
        colorSeleccion:"rgb(81,157,90)"
    },{
        nombre: "basica2",
        titulo:"RETO BASICO",
        x:395-25,
        y:287,
        color:"rgb(224,184,47)",
        colorSeleccion:"rgb(81,157,90)"
    },{
        nombre: "produccion2",
        titulo:"RETO BASICO",
        x:453-25,
        y:293,
        color:"rgb(224,184,47)",
        colorSeleccion:"rgb(81,157,90)"
    },{
        nombre: "basica4",
        titulo:"RETO BASICO",
        x:516-25,
        y:294,
        color:"rgb(224,184,47)",
        colorSeleccion:"rgb(81,157,90)"
    },{
        nombre: "inteligArtificial",
        titulo:"RETO MODELADO",
        x:549-25,
        y:237,
        color:"rgb(180,69,61)",
        colorSeleccion:"rgb(92,172,219)"
    },{
        nombre: "finanzas2",
        titulo:"RETO MODELADO",
        x:583-25,
        y:182,
        color:"rgb(180,69,61)",
        colorSeleccion:"rgb(92,172,219)"
    },{
        nombre: "finanzas3",
        titulo:"RETO MODELADO",
        x:644-25,
        y:179,
        color:"rgb(180,69,61)",
        colorSeleccion:"rgb(92,172,219)"
    },{
        nombre: "produccion1",
        titulo:"PROGRAMACION",
        x:579-25,
        y:297,
        colorSeleccion:"rgb(180,69,61)",
        color:"rgb(92,172,219)"
    },{
        nombre: "produccion2",
        titulo:"PROGRAMACION",
        x:640-25,
        y:297,
        colorSeleccion:"rgb(180,69,61)",
        color:"rgb(92,172,219)"
    },{
        nombre: "produccion3",
        titulo:"PROGRAMACION",
        x:700-25,
        y:300,
        colorSeleccion:"rgb(180,69,61)",
        color:"rgb(92,172,219)"
    },{
        nombre: "logistica1",
        titulo : "RETO PROCESOS",
        x:549-25,
        y:352,
        colorSeleccion:"rgb(224,184,47)",
        color:"rgb(81,157,90)"
    },{
        nombre: "logistica2",
        titulo : "RETO PROCESOS",
        x:580-25,
        y:404,
        colorSeleccion:"rgb(224,184,47)",
        color:"rgb(81,157,90)"
    },{
        nombre: "logistica3",
        titulo : "RETO PROCESOS",
        x:618-25,
        y:455,
        colorSeleccion:"rgb(224,184,47)",
        color:"rgb(81,157,90)"
    },
    {
        nombre: "logistica4",
        titulo : "RETO PROCESOS",
        x:680-25,
        y:454,
        colorSeleccion:"rgb(224,184,47)",
        color:"rgb(81,157,90)"
    },
    {
        nombre: "MAL NECESARIO",
        x:10000,
        y:5000,
        colorSeleccion:"rgb(224,184,47)",
        color:"rgb(81,157,90)"
    }
];



var imagenesCargadasHabilidades = [];
var imagenesCargadasDesafios = [];
var desafioSeleccionado = desafios.length - 1;

var procesoDeCambio = {
  pantalla12:true,
  pantalla23:false,
  pantalla34:false,
  pantalla45:false,
  pantalla56:false,
  pantalla67:false,
  pantalla78:false,
  pantalla89:false,
  pantalla910:false,
  pantalla1011:false,
  pantalla1112:false}


  ////pantalla12 : /*
  // {pantalla23 : false},
  // {pantalla34 : false},
  // {pantalla45 : false},
  // {pantalla56 : false},
  // {pantalla67 : false},
  // {pantalla78 : false},
  // {pantalla89 : false},
  // {pantalla910 : false},
  // {pantalla1011 : false},
  // {pantalla1112 : false},
  // */




/*** */

robot1 = new Robot(320,212);

juego = new retoLogico1();

var start;
var posx;
// var vidaEntidad;
var finPantalla = false;
var textoPantalla1;
var pantallas = {
  pantalla1 : false, //LANZADOR
  pantalla2 : true, //STORY TELLING 1
  pantalla3 : false, // //STORY TELLING 2
  pantalla4 : false, //STORY TELLING 3
  pantalla5 : false, //STORY TELLING 4
  pantalla6 : false, //STORY TELLING 5
  pantalla7 : false, //STORY TELLING 6
  pantalla8 : false, //STORY TELLING 7
  pantalla9 : false, //STORY TELLING 8
  pantalla10 : false, //TUTORIAL DEL JUEGO
  pantalla11 : false, //JUEGO!
  pantalla12 : false, 
  
}
var juego;


var mouse = {
  x:0,
  y:0
};

var posYcaja;
var posXcaja;
var titulosEspeciales1;
var titulosEspeciales2;
var titulosEspeciales3;
var cajaTitulosEspeciales1;
var cajaTitulosEspeciales2;

function setup() {

  /* INICIALIZACIÓN CANVAS */
  canvas = createCanvas(1000,500);  
  // Assigns a CSS selector ID to
  // the canvas element.
  canvas.parent('contenedor');
  canvas.id('lienzo');
  console.log(procesoDeCambio.pantalla12);
  //canvas.parent('lienzo');
  /* -INICIALIZACIÓN CANVAS */

/** */


  ArraysMensajes.push(new textoEnPantalla("Mostrando BASICA 1/Lorem ipsum dolor sit./Lorem ipsum dolor sit./Lorem ipsum dolor sit./", 0));
  ArraysMensajes.push(new textoEnPantalla("Mostrando BASICA 2/Lorem ipsum dolor sit./Lorem ipsum dolor sit./", 0));
  ArraysMensajes.push(new textoEnPantalla("Mostrando BASICA 3/Lorem ipsum dolor sit./Lorem ipsum dolor sit./", 0));
  ArraysMensajes.push(new textoEnPantalla("Mostrando BASICA 4/Lorem ipsum dolor sit./Lorem ipsum dolor sit./", 0));
  ArraysMensajes.push(new textoEnPantalla("Mostrando MODELADO 1/Lorem ipsum dolor sit./Lorem ipsum dolor sit./", 0));
  ArraysMensajes.push(new textoEnPantalla("Mostrando MODELADO 2/Lorem ipsum dolor sit./Lorem ipsum dolor sit./", 0));
  ArraysMensajes.push(new textoEnPantalla("Mostrando MODELADO 3/Lorem ipsum dolor sit./Lorem ipsum dolor sit./", 0));
  ArraysMensajes.push(new textoEnPantalla("RETO LOGICO!!/Representar la realidad /en pequeños pasos es /parte de esta rama./", 0));
  ArraysMensajes.push(new textoEnPantalla("Mostrando PROGRAM 2/Lorem ipsum dolor sit./Lorem ipsum dolor sit./", 0));
  ArraysMensajes.push(new textoEnPantalla("Mostrando PROGRAM 3/Lorem ipsum dolor sit./Lorem ipsum dolor sit./", 0));
  ArraysMensajes.push(new textoEnPantalla("Mostrando PROCESOS 1/Lorem ipsum dolor sit./Lorem ipsum dolor sit./", 0));
  ArraysMensajes.push(new textoEnPantalla("Mostrando PROCESOS 2/Lorem ipsum dolor sit./Lorem ipsum dolor sit./", 0));
  ArraysMensajes.push(new textoEnPantalla("Mostrando PROCESOS 3/Lorem ipsum dolor sit./Lorem ipsum dolor sit./", 0));
  ArraysMensajes.push(new textoEnPantalla("Mostrando PROCESOS 4/Lorem ipsum dolor sit./Lorem ipsum dolor sit./", 0));

  for (q = 0; q < ArraysMensajes.length; q++) {
    ArraysMensajes[q].intro();
  }


/** */

  posx=0;
  posYcaja = 403;
  posXcaja = 197;
  titulosEspeciales1 = false;

  cajaTitulosEspeciales1 = 0;
  cajaTitulosEspeciales2 = 0;

  textoPantalla1 = new textoEnPantalla("UN ALGORITMO ES DAR UN ORDEN A ACTIVIDADES/PARA LOGRAR UN OBJETIVO./",0); //Para el es un slash para intro y al final siempre.
  textoPantalla1.intro();

  textoPantalla2 = new textoEnPantalla("POR EJEMPLO, SI EL OBJETIVO ES QUE JAIRO MUEVA/EL PAQUETE DE UN EXTREMO A OTRO,/ ¿CUAL SERÍA EL ALGORIMO?/",0); //Para el es un slash para intro y al final siempre.
  textoPantalla2.intro();

  textoPantalla3 = new textoEnPantalla("UNA SOLUCIÓN POSIBLE SERÍA ... /    1.- MOVERSE A LA IZQUIERDA 2 PASOS/",0); //Para el es un slash para intro y al final siempre.
  textoPantalla3.intro();

  
  textoPantalla4 = new textoEnPantalla("UNA SOLUCIÓN POSIBLE SERÍA ... /    1.- MOVERSE A LA IZQUIERDA 2 PASOS/   2.- AGARRAR EL PAQUETE/",2); //Para el es un slash para intro y al final siempre.
  textoPantalla4.intro();

  textoPantalla5 = new textoEnPantalla("UNA SOLUCIÓN POSIBLE SERÍA ... /    1.- MOVERSE A LA IZQUIERDA 2 PASOS/   2.- AGARRAR EL PAQUETE/   3.-LEVANTAR EL PAQUETE/",3); //Para el es un slash para intro y al final siempre.
  textoPantalla5.intro();

  textoPantalla6 = new textoEnPantalla("UNA SOLUCIÓN POSIBLE SERÍA ... /    1.- MOVERSE A LA IZQUIERDA 2 PASOS/   2.- AGARRAR EL PAQUETE/   3.-LEVANTAR EL PAQUETE/   4.-MOVERSE A LA DERECHA 10 PASOS/",4); //Para el es un slash para intro y al final siempre.
  textoPantalla6.intro();

  textoPantalla7 = new textoEnPantalla("UNA SOLUCIÓN POSIBLE SERÍA ... /    1.- MOVERSE A LA IZQUIERDA 2 PASOS/   2.- AGARRAR EL PAQUETE/   3.-LEVANTAR EL PAQUETE/   4.-MOVERSE A LA DERECHA 10 PASOS/   5.-DEJAR LA CAJA EN LA MESA/",5); //Para el es un slash para intro y al final siempre.
  textoPantalla7.intro();

  textoPantalla8 = new textoEnPantalla("¿LISTO PARA INICIAR EL RETO?/ / /",0); //Para el es un slash para intro y al final siempre.
  textoPantalla8.intro();

  textoPantalla9 = new textoEnPantalla("AL HACER CLICK EN INICIAR PATRON DEBES MIRAR /LO QUE HACE EL ROBOT, SOLO LO HARÁ UNA VEZ. /LUEGO DEBES BUSCAR EL ORDEN CORRECTO /HACIENDO CLICK EN LOS PAQUETES SALTAR ,/TIENES UN TIEMPO LÍMITE    . SUERTE!/ ",0); //Para el es un slash para intro y al final siempre.
  textoPantalla9.intro();
    //console.log(textoPantalla1.ArrayLineas);


    juego.iniciarSprite();
    juego.cargarArraySolucion();



}

function draw() {
  clear();
  background(150,255,255);  
  //console.log(juego.temporizador);
  if (mouseIsPressed) {
    mouse.x = mouseX;
    mouse.y = mouseY;
  }

  console.log("X: " + mouse.x   + " Y: " + mouse.y);

  /***CONDICIONES DE MOUSE */

  if(pantallas.pantalla1){
    condicionesMouse.p01();
  }

  if(pantallas.pantalla2){
    condicionesMouse.p02(); 
  }
  
  if(pantallas.pantalla3){
    condicionesMouse.p03();
  }

  if(pantallas.pantalla4){
    condicionesMouse.p04();
  }
  if(pantallas.pantalla5){
    condicionesMouse.p05();
  }
  if(pantallas.pantalla6){
    condicionesMouse.p06();
  }
  if(pantallas.pantalla7){
    condicionesMouse.p07();
  }
  if(pantallas.pantalla8){
    condicionesMouse.p08();
  }

  if(pantallas.pantalla9){
    condicionesMouse.p09();
  }
  if(pantallas.pantalla10){
    condicionesMouse.p10();
  }
  if(pantallas.pantalla11){
    condicionesMouse.p11();
  }

  if(pantallas.pantalla12){
    condicionesMouse.p12();
  }

}

/*
var condicionesMouse ={
    p01 :function(){
        cuerpoPantallas.p01();
        for( var q = 0 ; q< desafios.length; q++){
            if(Math.pow(Math.pow(mouse.x-desafios[q].x,2)+Math.pow(mouse.y-desafios[q].y,2),1/2)<30){
            mouse.x = 0;
            mouse.y = 0;
            mouseIsPressed = false;
            desafioSeleccionado = q;
            seHaSeleccionado = true;
            }
        }


        if(seHaSeleccionado){ 
            fill('white');
            triangle(884, 170, 849, 170+dialogo, 900, 170+dialogo);
            if(dialogo<98){
                dialogo+=5;
            }
            //console.log(dialogo)
            ArraysMensajes[desafioSeleccionado].size = 20;  
            ArraysMensajes[desafioSeleccionado].mostrar(760,300,'white',false,230);
            fill(255, 0, 0);
            textSize(36);
            rect(760+230/2-textWidth(' GO! ')/2,    300 + ArraysMensajes[desafioSeleccionado].ArrayLineas.length*(ArraysMensajes[desafioSeleccionado].size+ArraysMensajes[desafioSeleccionado].interlineado) , textWidth(' GO! ') ,36);
            if(mouse.x>760+230/2-textWidth(' GO! ')/2 && mouse.y>   300 + ArraysMensajes[desafioSeleccionado].ArrayLineas.length*(ArraysMensajes[desafioSeleccionado].size+ArraysMensajes[desafioSeleccionado].interlineado) 
        && mouse.x <760+230/2-textWidth(' GO! ')/2 + textWidth(' GO! ') && mouse.y<36+300 + ArraysMensajes[desafioSeleccionado].ArrayLineas.length*(ArraysMensajes[desafioSeleccionado].size+ArraysMensajes[desafioSeleccionado].interlineado)){
                
            pantallas.pantalla2 = true;
            pantallas.pantalla1 = false;

        }
            fill('black');
            text(' GO! ', 760+230/2-textWidth(' GO! ')/2,     300 + ArraysMensajes[desafioSeleccionado].ArrayLineas.length*(ArraysMensajes[desafioSeleccionado].size+ArraysMensajes[desafioSeleccionado].interlineado)+30);
        }
    },

   p02 : function(){

    cuerpoPantallas.p02();

    //PARA ATRÁS
      if(mouse.x>17 && mouse.x<103 && mouse.y>450 && mouse.y<481 && textoPantalla1.finDeEscitura){

      //console.log("BACK WE");
      mouse.x = 0;
      mouse.y = 0;
      mouseIsPressed = false;
      // pantallas.pantalla3=true;
      // pantallas.pantalla2=false;
     }

     if((mouse.x>900 && mouse.x<987 && mouse.y>450 && mouse.y<481 && textoPantalla1.finDeEscitura) || procesoDeCambio.pantalla12){

      mouse.x = 0;
      mouse.y = 0;
      procesoDeCambio.pantalla12 = true;
      //console.log("NEXT WE");
      if(contadoDeTiempo !=tiempoCambio){
        contadoDeTiempo++;
      } else {
        pantallas.pantalla3=true;
        pantallas.pantalla2=false;
        proceso
      }


      // pantallas.pantalla3=true;
      // pantallas.pantalla2=false;
      
      
      //console.log("SE CAMBIO EL MOUSE A " +mouse.x)
      mouseIsPressed = false;
     }
  },
  p03 : function(){

    cuerpoPantallas.p03();
     if(mouse.x>17 && mouse.x<103 && mouse.y>450 && mouse.y<481 && textoPantalla2.finDeEscitura){

      //console.log("BACK WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla3=false;
      pantallas.pantalla2=true;
      mouseIsPressed = false;
     }
     if(mouse.x>900 && mouse.x<987 && mouse.y>450 && mouse.y<481 && textoPantalla2.finDeEscitura){
      //console.log("NEXT WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla3=false;
      pantallas.pantalla4=true;
      mouseIsPressed = false;
     }

  },
  p04 : function(){
    cuerpoPantallas.p04();
     if(mouse.x>17 && mouse.x<103 && mouse.y>450 && mouse.y<481 && textoPantalla3.finDeEscitura){
      //console.log("BACK WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla3=true;
      pantallas.pantalla4=false;
      mouseIsPressed = false;
     }
     if(mouse.x>900 && mouse.x<987 && mouse.y>450 && mouse.y<481 && textoPantalla3.finDeEscitura){
      //console.log("NEXT WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla5=true;
      pantallas.pantalla4=false;
      mouseIsPressed = false;
     }

  },
  p05 : function(){
    cuerpoPantallas.p05();
     if(mouse.x>17 && mouse.x<103 && mouse.y>450 && mouse.y<481 && textoPantalla4.finDeEscitura){
      //console.log("BACK WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla5=false;
      pantallas.pantalla4=true;
      mouseIsPressed = false;
     }
     if(mouse.x>900 && mouse.x<987 && mouse.y>450 && mouse.y<481 && textoPantalla4.finDeEscitura){
      //console.log("NEXT WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla5=false;
      pantallas.pantalla6=true;
      mouseIsPressed = false;
     }

  },
  p06 : function(){
    cuerpoPantallas.p06();
     if(mouse.x>17 && mouse.x<103 && mouse.y>450 && mouse.y<481 && textoPantalla5.finDeEscitura){
      //console.log("BACK WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla5=true;
      pantallas.pantalla6=false;
      mouseIsPressed = false;
     }
     if(mouse.x>900 && mouse.x<987 && mouse.y>450 && mouse.y<481 && textoPantalla5.finDeEscitura){
      //console.log("NEXT WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla6=false;
      pantallas.pantalla7=true;
      mouseIsPressed = false;
     }

  },
  p07 : function(){
    cuerpoPantallas.p07();
     if(mouse.x>17 && mouse.x<103 && mouse.y>450 && mouse.y<481 && textoPantalla6.finDeEscitura && finPantalla){
      //console.log("BACK WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla7=false;
      pantallas.pantalla6=true;
      mouseIsPressed = false;
     }
     if(mouse.x>900 && mouse.x<987 && mouse.y>450 && mouse.y<481 && textoPantalla6.finDeEscitura && finPantalla){
      //console.log("NEXT WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla7=false;
      pantallas.pantalla8=true;
      mouseIsPressed = false;
      //console.log("CAMBIO!! ");
     }

  },
  p08 : function(){
    cuerpoPantallas.p08();
     if(mouse.x>17 && mouse.x<103 && mouse.y>450 && mouse.y<481 && textoPantalla7.finDeEscitura){
      //console.log("BACK WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla8=false;
      pantallas.pantalla7=true;
      mouseIsPressed = false;
     }
     if(mouse.x>900 && mouse.x<987 && mouse.y>450 && mouse.y<481 && textoPantalla7.finDeEscitura){
      //console.log("NEXT WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla8=false;
      pantallas.pantalla9=true;
      mouseIsPressed = false;
     }

  },
  p09 : function(){
    cuerpoPantallas.p09();
     if(mouse.x>17 && mouse.x<103 && mouse.y>450 && mouse.y<481 && textoPantalla8.finDeEscitura){
      //console.log("BACK WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla9=false;
      pantallas.pantalla8=true;
      mouseIsPressed = false;
     }
     if(mouse.x>500 && mouse.x<664 && mouse.y>132 && mouse.y<171 && textoPantalla8.finDeEscitura){
      //console.log("NEXT WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla9=false;
      pantallas.pantalla10=true;
      mouseIsPressed = false;

      //alert("INICIO DEL JUEGO WE, TRANQUILO");
     }

  },
  p10 : function(){
    cuerpoPantallas.p10();
    //alert("ESTMAOS EN PANTALLA 9 WE");
    
     //if(mouse.x>17 && mouse.x<103 && mouse.y>450 && mouse.y<481 && textoPantalla8.finDeEscitura){
      //console.log("BACK WE");
     // mouse.x = 0;
     // mouse.y = 0;
     // pantallas.pantalla9=false;
      //pantallas.pantalla8=true;
     // mouseIsPressed = false;
    // }
     if(mouse.x>900 && mouse.x<987 && mouse.y>450 && mouse.y<481 && textoPantalla9.finDeEscitura){
      //console.log("NEXT WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla10 = false;
      pantallas.pantalla11 = true;
      mouseIsPressed = false;
     }

  },
  p11 : function(){
    //console.log("EN PANTALLA 10 ")
    cuerpoPantallas.p11();
    //alert("ESTMAOS EN PANTALLA 9 WE");
    
    // if(mouse.x>17 && mouse.x<103 && mouse.y>450 && mouse.y<481 && textoPantalla8.finDeEscitura){
      //console.log("BACK WE");
     // mouse.x = 0;
      //mouse.y = 0;
      //pantallas.pantalla9=false;
     // pantallas.pantalla8=true;
     // mouseIsPressed = false;
    // }
     //if(mouse.x>500 && mouse.x<664 && mouse.y>132 && mouse.y<171 && textoPantalla8.finDeEscitura){
      //console.log("NEXT WE");
      // mouse.x = 0;
      // mouse.y = 0;
      // pantallas.pantalla5=false;
      // pantallas.pantalla6=true;
      // mouseIsPressed = false;

    //  alert("INICIO DEL JUEGO WE, TRANQUILO");
    // }

  },
  p12 : function(){

    cuerpoPantallas.p12();
    if(mouse.x !=0 || mouse.y !=0){
      pantallas.pantalla1 = true;
      pantallas.pantalla12 = false;
      mouseIsPressed = false;
    }

  }
}

*/

var condicionesMouse = {
  p02: function () {

    cuerpoPantallas.p02();

    if (procesoDeCambio.pantalla12 && textoPantalla1.finDeEscitura) {
      if (contadoDeTiempo != tiempoCambio) {
        contadoDeTiempo++;
      } else {
        pantallas.pantalla3 = true;
        pantallas.pantalla2 = false;
        procesoDeCambio.pantalla12 = false;
        procesoDeCambio.pantalla23 = true;
        contadoDeTiempo = 0;
      }
    }
  },
  p03: function(){
    cuerpoPantallas.p03();
    if(procesoDeCambio.pantalla23  && textoPantalla2.finDeEscitura){
      if(contadoDeTiempo !=tiempoCambio){
        contadoDeTiempo++;
      } else {
        pantallas.pantalla4=true;
        pantallas.pantalla3=false;
        procesoDeCambio.pantalla23 = false;
        procesoDeCambio.pantalla34 = true;
        contadoDeTiempo = 0;
      }
    }
  },
  p04: function(){
    cuerpoPantallas.p04();
    if(procesoDeCambio.pantalla34  && textoPantalla3.finDeEscitura){
      if(contadoDeTiempo !=tiempoCambio){
        contadoDeTiempo++;
      } else {
        pantallas.pantalla5=true;
        pantallas.pantalla4=false;
        procesoDeCambio.pantalla34 = false;
        procesoDeCambio.pantalla45 = true;
        contadoDeTiempo = 0;
      }
    }
  },
  p05: function(){
    cuerpoPantallas.p05();
    if(procesoDeCambio.pantalla45  && textoPantalla4.finDeEscitura){
      if(contadoDeTiempo !=tiempoCambio){
        contadoDeTiempo++;
      } else {
        pantallas.pantalla6=true;
        pantallas.pantalla5=false;
        procesoDeCambio.pantalla45 = false;
        procesoDeCambio.pantalla56 = true;
        contadoDeTiempo = 0;
      }
    }
  },
  p06: function(){
    cuerpoPantallas.p06();
    if(procesoDeCambio.pantalla56  && textoPantalla5.finDeEscitura){
      if(contadoDeTiempo !=tiempoCambio){
        contadoDeTiempo++;
      } else {
        pantallas.pantalla7=true;
        pantallas.pantalla6=false;
        procesoDeCambio.pantalla56 = false;
        procesoDeCambio.pantalla67 = true;
        contadoDeTiempo = 0;
      }
    }
  },
  p07: function(){
    cuerpoPantallas.p07();
    if(procesoDeCambio.pantalla67  && textoPantalla6.finDeEscitura){
      if(contadoDeTiempo !=tiempoCambio){
        contadoDeTiempo++;
      } else {
        pantallas.pantalla8=true;
        pantallas.pantalla7=false;
        procesoDeCambio.pantalla67 = false;
        procesoDeCambio.pantalla78 = true;
        contadoDeTiempo = 0;
      }
    }
  },
  p08: function(){
    cuerpoPantallas.p08();
    if(procesoDeCambio.pantalla78  && textoPantalla7.finDeEscitura){
      if(contadoDeTiempo !=tiempoCambio){
        contadoDeTiempo++;
      } else {
        pantallas.pantalla9=true;
        pantallas.pantalla8=false;
        procesoDeCambio.pantalla78 = false;
        procesoDeCambio.pantalla89 = true;
        contadoDeTiempo = 0;
      }
    }
  },
  p09 : function(){
    cuerpoPantallas.p09();
     if(mouse.x>17 && mouse.x<103 && mouse.y>450 && mouse.y<481 && textoPantalla8.finDeEscitura){
      //console.log("BACK WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla9=false;
      pantallas.pantalla8=true;
      mouseIsPressed = false;
     }
     if(mouse.x>500 && mouse.x<664 && mouse.y>132 && mouse.y<171 && textoPantalla8.finDeEscitura){
      //console.log("NEXT WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla9=false;
      pantallas.pantalla10=true;
      mouseIsPressed = false;

      //alert("INICIO DEL JUEGO WE, TRANQUILO");
     }

  },
  p10 : function(){
    cuerpoPantallas.p10();
    //alert("ESTMAOS EN PANTALLA 9 WE");
    
     //if(mouse.x>17 && mouse.x<103 && mouse.y>450 && mouse.y<481 && textoPantalla8.finDeEscitura){
      //console.log("BACK WE");
     // mouse.x = 0;
     // mouse.y = 0;
     // pantallas.pantalla9=false;
      //pantallas.pantalla8=true;
     // mouseIsPressed = false;
    // }
     if(mouse.x>900 && mouse.x<987 && mouse.y>450 && mouse.y<481 && textoPantalla9.finDeEscitura){
      //console.log("NEXT WE");
      mouse.x = 0;
      mouse.y = 0;
      pantallas.pantalla10 = false;
      pantallas.pantalla11 = true;
      mouseIsPressed = false;
     }

  },
  p11 : function(){
    //console.log("EN PANTALLA 10 ")
    cuerpoPantallas.p11();
    //alert("ESTMAOS EN PANTALLA 9 WE");
    
    // if(mouse.x>17 && mouse.x<103 && mouse.y>450 && mouse.y<481 && textoPantalla8.finDeEscitura){
      //console.log("BACK WE");
     // mouse.x = 0;
      //mouse.y = 0;
      //pantallas.pantalla9=false;
     // pantallas.pantalla8=true;
     // mouseIsPressed = false;
    // }
     //if(mouse.x>500 && mouse.x<664 && mouse.y>132 && mouse.y<171 && textoPantalla8.finDeEscitura){
      //console.log("NEXT WE");
      // mouse.x = 0;
      // mouse.y = 0;
      // pantallas.pantalla5=false;
      // pantallas.pantalla6=true;
      // mouseIsPressed = false;

    //  alert("INICIO DEL JUEGO WE, TRANQUILO");
    // }

  },
  p12 : function(){

    cuerpoPantallas.p12();
    if(mouse.x !=0 || mouse.y !=0){
      pantallas.pantalla1 = true;
      pantallas.pantalla12 = false;
      mouseIsPressed = false;
    }

  }
}



var cuerpoPantallas = {

  p01: function () {
    //image(img1, 16, 50, 154, 154);
    posx = 230;
    dialogo = 98;

    funciones.lineaDivisoria();
    funciones.mostrarTitulos();
    funciones.mostrarHabilidades();

    funciones.pintarRamas();
    funciones.mostrarDesafios();
    funciones.mostrarImagenes();


    image(imgBuho, 784, 102, 160, 110);



    //console.log('la entidad seleccionda es: ' + desafioSeleccionado);
},



  p02 : function(){ // NO ROBOT
    image(img1,16,50,154,154);
    textoPantalla1.mostrar(200,70,'rgb(255,204,0)',true,780);
    /*if(textoPantalla1.finDeEscitura){
      image(imgBack,15,446);
      image(imgNext,canvas.width-100,446);
    }*/
  },
  p03 : function(){ // APARECE ROBOT
    image(img1,16,50,154,154);
    textoPantalla2.mostrar(200,70,'rgb(255,204,0)',true,780);
    /*if(textoPantalla2.finDeEscitura){
      image(imgBack,15,446);
      image(imgNext,canvas.width-100,446);
    }*/
    robot1.dibujado(imgRobot1);
    fill(0,0,255)
    noStroke();
    rect(197, 403, 93, 60);
     /**MESA */
    fill(137,126,69);
    stroke(137,126,69);
    rect(712, 412, 203, 16.3);
    rect(750, 428.3, 20, 40);
    rect(860, 428.3, 20,40);
  },
  p04 : function(){ //SE MUEVE ROBOT
    image(img1,16,50,154,154);
    textoPantalla3.mostrar(200,70,'rgb(255,204,0)',true,780);
    /*if(textoPantalla3.finDeEscitura){
      image(imgBack,15,446);
      image(imgNext,canvas.width-100,446);
    }*/
    if(robot1.x != 172){
      robot1.movimiento(-1);
      
    }
    robot1.dibujado(imgRobot1);
    /**CAJITA */
    fill(0,0,255)
    noStroke();

    rect(197, 403, 93, 60); /**FIN CAJITA */

    /**MESA */
    fill(137,126,69);
    stroke(137,126,69);
    rect(712, 412, 203, 16.3);
    rect(750, 428.3, 20, 40);
    rect(860, 428.3, 20,40);

    // robot1 = new Robot(320,212);
  },
  p05 : function(){ // CAMBIA IMAGEN ROBOT
    image(img1,16,50,154,154);
    textoPantalla4.mostrar(200,70,'rgb(255,204,0)',true,780);
    /*if(textoPantalla4.finDeEscitura){
      image(imgBack,15,446);
      image(imgNext,canvas.width-100,446);
    }*/

    robot1.dibujado(imgRobot2);
    /**CAJITA */
    fill(0,0,255)
    noStroke();

    rect(197, 403, 93, 60); /**FIN CAJITA */  
    /**MESA */
    fill(137,126,69);
    stroke(137,126,69);
    rect(712, 412, 203, 16.3);
    rect(750, 428.3, 20, 40);
    rect(860, 428.3, 20,40);
    
  },
  p06 : function(){
    image(img1,16,50,154,154);
    textoPantalla5.mostrar(200,70,'rgb(255,204,0)',true,780);
    /*if(textoPantalla5.finDeEscitura){
      image(imgBack,15,446);
      image(imgNext,canvas.width-100,446);
    }*/
    robot1.dibujado(imgRobot2);
    /**CAJITA */
    fill(0,0,255)
    noStroke();
    if(posYcaja>339){
      posYcaja--;
    }
    rect(197, posYcaja, 93, 60); /**FIN CAJITA */  
    /**MESA */
    fill(137,126,69);
    stroke(137,126,69);
    rect(712, 412, 203, 16.3);
    rect(750, 428.3, 20, 40);
    rect(860, 428.3, 20,40);
  
  },
  p07 : function(){
    image(img1,16,50,154,154);
    textoPantalla6.mostrar(200,70,'rgb(255,204,0)',true,780);
    /*if(textoPantalla6.finDeEscitura){
      image(imgBack,15,446);
      image(imgNext,canvas.width-100,446);
    }*/
    if(robot1.x < 731){
      robot1.rx = 7
      robot1.movimiento(1);
      posXcaja+=7;
    } else {
      finPantalla = true;
    }
    robot1.dibujado(imgRobot2);
    /**CAJITA */
    fill(0,0,255)
    noStroke();
    rect(posXcaja, posYcaja, 93, 60); /**FIN CAJITA */  
    /**MESA */
    fill(137,126,69);
    stroke(137,126,69);
    rect(712, 412, 203, 16.3);
    rect(750, 428.3, 20, 40);
    rect(860, 428.3, 20,40);


  },
  p08 : function(){
    image(img1,16,50,154,154);
    
    textoPantalla7.mostrar(200,70,'rgb(255,204,0)',true,780);
    /*if(textoPantalla7.finDeEscitura){
      image(imgBack,15,446);
      image(imgNext,canvas.width-100,446);
    }*/
    robot1.dibujado(imgRobot1);
    /**CAJITA */
    fill(0,0,255)
    noStroke();
    if(posYcaja<347){
      posYcaja++;
    }
    rect(posXcaja, posYcaja, 93, 60); /**FIN CAJITA */  
    /**MESA */
    fill(137,126,69);
    stroke(137,126,69);
    rect(712, 412, 203, 16.3);
    rect(750, 428.3, 20, 40);
    rect(860, 428.3, 20,40);




  },
  p09 : function(){
    image(img1,16,50,154,154);
    textoPantalla8.mostrar(200,70,'rgb(255,204,0)',true,780);
    /*if(textoPantalla8.finDeEscitura){
      image(imgBack,15,446);
      //image(imgNext,canvas.width-100,446);
    }*/
    noStroke();
    fill(255, 0, 0);
    rect(500,131, 165, 42);
    fill(0,0,0);
    text("¡VAMOS!", 525, 165);

    robot1.dibujado(imgRobot1);
    /**CAJITA */
    fill(0,0,255)
    noStroke();
    rect(posXcaja, posYcaja, 93, 60); /**FIN CAJITA */  
    /**MESA */
    fill(137,126,69);
    stroke(137,126,69);
    rect(712, 412, 203, 16.3);
    rect(750, 428.3, 20, 40);
    rect(860, 428.3, 20,40);
  },
  p10 : function(){
    image(img1, 16, 300, 154, 154);
    textoPantalla9.mostrar(200, 240,'rgb(255,204,0)',true,780);
    if (textoPantalla9.finDeEscitura) {
      //image(imgBack,15,446);
      image(imgNext, canvas.width - 100, 446);
    }
    var texto = "RETO LÓGICO";
    textSize(80);
    fill(255, 0, 0);
    text(texto, canvas.width / 2 - textWidth(texto) / 2, 120);

    /**EJEMPLO DE BOTONES */
    textSize(36);
    if (textoPantalla9.ArrayLineas[0].mostrado === "AL HACER CLICK EN ") {

      titulosEspeciales1 = true;

    }
    if (textoPantalla9.ArrayLineas[3].mostrado === "HACIENDO CLICK EN LOS PAQUETES ") {
      titulosEspeciales2 = true;
    }

    if (textoPantalla9.ArrayLineas[4].mostrado === "TIENES UN TIEMPO LÍMITE ") {
      titulosEspeciales3 = true;
    }

    if (titulosEspeciales1) {
      if (cajaTitulosEspeciales1 < textWidth("INICIAR PATRÓN")) {
        rect(495, 243 - 36, cajaTitulosEspeciales1, 39);
        cajaTitulosEspeciales1 += 10;
      } else {
        rect(495, 243 - 36, cajaTitulosEspeciales1, 39);
      }

      fill(0, 0, 0);
      text("INICIAR PATRON", 497, 239);
    }
    if (titulosEspeciales2) {
      fill(84, 190, 195);
      textSize(36);

      if (cajaTitulosEspeciales2 < textWidth("SALTAR")) {
        rect(495 + 233, 243 - 36 + 123, cajaTitulosEspeciales2, 39);
        cajaTitulosEspeciales2 += 10;
      } else {
        rect(495 + 233, 243 - 36 + 123, cajaTitulosEspeciales2, 39);
      }

      //rect(, , textWidth("SALTAR")+7, 39);
      fill(0, 0, 0);
      text("SALTAR", 497 + 233, 239 + 123);
    }

    if (titulosEspeciales3) {
      image(imgReloj, 578, 380, 27, 27);
    }

  },
  p11:function(){
    //background(255,255,255);
    juego.main(myFont,img1);
    // if(juego.vidas == 0){
    //   alert("PERDISTE :(");
    // }

    if(juego.vidas == 0 ){
      pantallas.pantalla12 = true;
      pantallas.pantalla11 = false;
      mouse.x = 0;
      mouse.y = 0;
    }
    


  },
  p12:function(){

    textAlign(CENTER, CENTER);
    textFont(myFont);
    fill('red');
    textSize(72);
    text('HAS PERDIDO', width/2, height/2-50)
    textSize(30);
    text('(Toca para volver a la pantalla principal)', width/2, height/2 + 50)


  }

}


function preload() {
  img1 = loadImage('img/buho.png');
  myFont = loadFont('fuentes/edosz.ttf');
  myFont2 = loadFont('fuentes/FjallaOne-Regular.ttf');
  imgBack = loadImage('img/back.png');
  imgNext = loadImage('img/next.png');
  // imgRobot = loadImage('img/')
  imgRobot1 = loadImage('img/robot1.png');
  imgRobot2 = loadImage('img/robot2.png');
  imgReloj = loadImage('img/reloj.png');
  juego.carga();



  for (var q = 0; q < habilidades.length; q++) {
    imgTemp = loadImage('img/' + habilidades[q].archivo + '.png');
    imagenesCargadasHabilidades.push(imgTemp);
  }

  for (var q = 0; q < desafios.length - 1; q++) {
    imgTemp2 = loadImage('img/' + desafios[q].nombre + '.png');
    imagenesCargadasDesafios.push(imgTemp2);
  }
  imgBuho = loadImage('img/buho2.png')





}






funciones = {

  mostrarTitulos: function () {

      for (var q = 0; q < titulos.length; q++) {
          // ctx.beginPath();
          textFont(myFont);
          textSize(titulos[q].tamano);
          //ctx.font = "bold " + titulos[q].tamano + "px Fjalla One";
          fill(0, 0, 0);
          // ctx.fillStyle = "black";
          var cadena = titulos[q].texto;
          switch (q) {
              case 0: text(cadena, (canvas.width / 2) - textWidth(cadena) / 2, 50); break;
              case 1: text(cadena, (divisor.x / 2) - textWidth(cadena) / 2, 100); break;
              case 2: text(cadena, (divisor.x / 2) - textWidth(cadena) / 2, 100 + titulos[q].tamano + 10); break;
              case 3: text(cadena, (1000 - divisor.x - divisor.dx) / 2 + divisor.x - textWidth(cadena) / 2, 100); break;
          }

      }
  },

  lineaDivisoria: function () {
      fill(0, 0, 255);
      noStroke();
      rect(divisor.x, divisor.y, divisor.dx, divisor.dy, 20);
  },



  mostrarHabilidades: function () {

      for (var q = 0; q < habilidades.length; q++) {


          /* MOSTRANDO EL FONDO DE LOS INDICADORES */
          fill(255, 255, 255);
          stroke(habilidades[q].colorBorde);
          strokeWeight(2)
          rect(habilidades[q].x, habilidades[q].y, habilidades[q].dx, habilidades[q].dy, 20);


          // /* MOSTRANDO EL AVANCE EN LOS INDICADORES */
          fill(habilidades[q].colorRelleno);
          noStroke();
          rect(habilidades[q].x, habilidades[q].y, habilidades[q].dx * habilidades[q].avance / 100, habilidades[q].dy, 20);
          noFill();
          stroke(habilidades[q].colorBorde);
          rect(habilidades[q].x, habilidades[q].y, habilidades[q].dx, habilidades[q].dy, 20);

          /* MOSTRANDO FONDO DEL LOGO DEL INDICADOR */
          fill('white');
          strokeWeight(3)
          arc(habilidades[q].x, habilidades[q].y, 2 * habilidades[q].dy + 5, 2 * habilidades[q].dy + 5, 0, 2 * Math.PI);

          /* MOSTRANDO LOGO DENTRO DE LOS INDICADORES */

          image(imagenesCargadasHabilidades[q], habilidades[q].x - 20, habilidades[q].y - 20, 40, 40);
      }

  },
  polygon:function(x, y, radius, npoints) {
      var angle = TWO_PI / npoints;
      beginShape();
      for (var a = 0; a < TWO_PI; a += angle) {
          var sx = x + cos(a) * radius;
          var sy = y + sin(a) * radius;
          vertex(sx, sy);
      }
      endShape(CLOSE);
  },    

  mostrarDesafios: function () {

      for (var q = 0; q < desafios.length; q++) {
          push();
          if(q == desafioSeleccionado){
              stroke(desafios[q].colorSeleccion);
          } else {
              noStroke();
          }
          translate(desafios[q].x, desafios[q].y);
          rotate(PI / 2);
          fill(desafios[q].color);
          this.polygon(0, 0, 30, 6); 
          pop();
          
          
      }
  },

  mostrarImagenes :function(){

      for(var q = 0 ; q<desafios.length-1 ; q++){
          image(imagenesCargadasDesafios[q], desafios[q].x - 27.5, desafios[q].y - 27.5, 55, 55);
      }

  },

  
  pintarRamas:function(){
      for(var q=0; q<ramas.length ; q++){

          textFont(myFont);
          fill('black');
          noStroke();
          text(ramas[q].nombre, ramas[q].x, ramas[q].y);


      }
  }


}
