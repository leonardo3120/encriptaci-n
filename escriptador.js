//-------Selección de Elementos-------//
const  btnEncriptar  =  documento.querySelector ( " . btn -encriptar" ) ;
const  txtEncriptar  =  documento.querySelector ( " . encriptar " ) ;
const  aviso  =  documento . querySelector ( ".texto-aviso" ) ;
 respuesta  constante =  documento . querySelector ( ".evaluar" ) ;
 contenido  constante =  documento . querySelector ( ".tarjeta-contenedor" ) ;
const  btnCopiar  =  documento.querySelector ( " . btn -copiar" ) ;
const  btnDesencriptar  =  documento . querySelector ( ".btn-desencriptar" ) ;

//-------Botón de Encriptar-------//
btnEncriptar .addEventListener ( "clic" , e = > { 
    mi . preventDefault ( ) ;
    let  texto  =  txtEncriptar . valor ;
    deje que  txt  =  texto . normalize ( "NFD" ) . replace ( / [$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f'] / g ,  "" ) ;

    si ( texto  ==  "" ) {
        aviso . style . background  =  "#0A3871" ;
        aviso . estilo . color  =  "#FFFF" ;
        aviso . style . fontWeight  =  "800" ;
        aviso . textContent  =  "El campo de texto no debe estar vacío" ;

        establecerTiempoDeEspera ( ( ) => {
            aviso . removeAttribute ( "style" ) ;
        } , 1500 ) ;
    }

    de lo contrario  si ( texto  !==  txt ) {
        aviso . style . background  =  "#0A3871" ;
        aviso . estilo . color  =  "#FFFF" ;
        aviso . style . fontWeight  =  "800" ;
        aviso . textContent  =  "No debe tener acentos y caracteres especiales" ;

        establecerTiempoDeEspera ( ( ) => {
            aviso . removeAttribute ( "style" ) ;
        } , 1500 ) ;
    }

    else  if ( texto  !  == texto.toLowerCase ( ) ) {​
        aviso . style . background  =  "#0A3871" ;
        aviso . estilo . color  =  "#FFFF" ;
        aviso . style . fontWeight  =  "800" ;
        aviso . textContent  =  "El texto debe ser todo en minúscula" ;

        establecerTiempoDeEspera ( ( ) => {
            aviso . removeAttribute ( "style" ) ;
        } , 1500 ) ;
    }

    demás {
        texto  =  texto . reemplazar ( / e / mg ,  "ingresar" ) ;
        texto  =  texto . reemplazar ( / i / mg ,  "veces" ) ;
        texto  =  texto . reemplazar ( / a / mg ,  "ai" ) ;
        texto  =  texto . reemplazar ( / o / mg ,  "ober" ) ;
        texto  =  texto . reemplazar ( / u / mg ,  "ufat" ) ;

        respuesta . HTML interno  =  texto ;
        btnCopiar . style . visibilidad  =  "heredar" ;
        contenido . remove ( ) ; 
    }
} ) ;

//-------Botón de Desencriptar-------//
btnDesencriptar .addEventListener ( "clic" , e = > { 
    mi . preventDefault ( ) ;
    let  texto  =  txtEncriptar . valor ;
    deje que  txt  =  texto . normalize ( "NFD" ) . replace ( / [$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f'] / g ,  "" ) ;

    si ( texto  ==  "" ) {
        aviso . style . background  =  "#0A3871" ;
        aviso . estilo . color  =  "#FFFF" ;
        aviso . style . fontWeight  =  "800" ;
        aviso . textContent  =  "El campo de texto no debe estar vacío" ;

        establecerTiempoDeEspera ( ( ) => {
            aviso . removeAttribute ( "style" ) ;
        } , 1500 ) ;
    }

    de lo contrario  si ( texto  !==  txt ) {
        aviso . style . background  =  "#0A3871" ;
        aviso . estilo . color  =  "#FFFF" ;
        aviso . style . fontWeight  =  "800" ;
        aviso . textContent  =  "No debe tener acentos y caracteres especiales" ;

        establecerTiempoDeEspera ( ( ) => {
            aviso . removeAttribute ( "style" ) ;
        } , 1500 ) ;
    }

    else  if ( texto  !  == texto.toLowerCase ( ) ) {​
        aviso . style . background  =  "#0A3871" ;
        aviso . estilo . color  =  "#FFFF" ;
        aviso . style . fontWeight  =  "800" ;
        aviso . textContent  =  "El texto debe ser todo en minúscula" ;

        establecerTiempoDeEspera ( ( ) => {
            aviso . removeAttribute ( "style" ) ;
        } , 1500 ) ;
    }

    demás {
        texto  =  texto . reemplazar ( / enter / mg ,  "e" ) ;
        texto  =  texto . reemplazar ( / imes / mg ,  "i" ) ;
        texto  =  texto . reemplazar ( / ai / mg ,  "a" ) ;
        texto  =  texto . reemplazar ( / ober / mg ,  "o" ) ;
        texto  =  texto . reemplazar ( / ufat / mg ,  "u" ) ;

        respuesta . HTML interno  =  texto ;
        btnCopiar . style . visibilidad  =  "heredar" ;
        contenido . remove ( ) ; 
    }
} ) ;

//-------Botón de Copiar-------//
btnCopiar .addEventListener ( "clic" , e = > { 
    mi . preventDefault ( ) ;
    dejar  copiar  =  respuesta ;
    copiar . select ( ) ;
    documento . execCommand ( "copiar" ) ; 
} ) ;