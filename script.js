var botonEncriptar = document.querySelector('.btn-encriptar');
var botonDesencriptar = document.querySelector('.btn-desencriptar');
var section2Contenido = document.querySelector('.section2-contenido');
var section2Contenido2 = document.querySelector('.section2-contenido2');
var contenedor = document.querySelector('.contenedor-parrafo');
var resultado = document.querySelector('.texto-resultado');

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar() {
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto() {
    var cajaTexto = document.querySelector('.caja-texto');
    return cajaTexto.value
}

function ocultarAdelante() {
    section2Contenido.classList.add('ocultar');
    section2Contenido2.classList.remove('ocultar');
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] == 'a') {
            textoFinal = textoFinal + 'ai'
        }
        else if(texto[i] == 'e') {
            textoFinal = textoFinal + 'enter'
        }
        else if(texto[i] == 'i') {
            textoFinal = textoFinal + 'imes'
        }
        else if(texto[i] == 'o') {
            textoFinal = textoFinal + 'ober'
        }
        else if(texto[i] == 'u') {
            textoFinal = textoFinal + 'ufat'
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = '';

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] == 'a') {
            textoFinal = textoFinal + 'a'
            i = i + 1;
        }
        else if(texto[i] == 'e') {
            textoFinal = textoFinal + 'e'
            i = i + 4;
        }
        else if(texto[i] == 'i') {
            textoFinal = textoFinal + 'i'
            i = i + 3;
        }
        else if(texto[i] == 'o') {
            textoFinal = textoFinal + 'o'
            i = i + 3;
        }
        else if(texto[i] == 'u') {
            textoFinal = textoFinal + 'u'
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector('.btn-copiar');

btnCopiar.addEventListener('click', copiar = () => {
    var contenido = document.querySelector('.texto-resultado').textContent;
    navigator.clipboard.writeText(contenido);
})