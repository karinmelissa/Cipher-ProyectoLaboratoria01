import cipher from './cipher.js';

const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");
const click = document.getElementById("click");
const show = document.getElementById("eye-show");
const mensajeDefault = document.getElementById("saludo");
const showInfo = document.getElementById("info-show");
const hiddeInfo = document.getElementById("info-out");

function cifrado() {
  mensajeDefault.value = "Krod frpr hvwdv?";
  document.getElementById("saludo").innerHTML = mensajeDefault.value;
  const textoIngresado = texto.value;
  const valorDesplazamiento = parseInt(desplazamiento.value);
  if (valorDesplazamiento > 0) {
    const textoCifrado = document.getElementById("cifrado");
    textoCifrado.value = cipher.encode(valorDesplazamiento, textoIngresado);
    document.getElementById("cifrado").innerHTML = textoCifrado.value;
  }
  else {
    textoCifrado.value = cipher.decode(valorDesplazamiento, textoIngresado);
    document.getElementById("cifrado").innerHTML = textoCifrado.value;
  }
}

function desifrar() {
  const textoADecifrar = document.getElementById("cifrado");
  const textoDecifrado = textoADecifrar.value;
  const valorDesplazamiento = - parseInt(desplazamiento.value);
  textoADecifrar.value = cipher.decode(valorDesplazamiento, textoDecifrado);
  document.getElementById("cifrado").innerHTML = textoADecifrar.value;
  mensajeDefault.value = cipher.decode(-3, mensajeDefault.value);
  document.getElementById("saludo").innerHTML = mensajeDefault.value;
}

function mostrar() {
  const textoIngresado = texto.value;
  if (textoIngresado == '') {
    alert('Olvidaste ingresar tu mensaje');
  }
  else {
    if (document.getElementById('burbuja').style.display == 'none') {
      document.getElementById('burbuja').style.display = 'flex';
    }
    else {
      document.getElementById('burbuja').style.display = 'flex';
    }
  }
}
function mostrarInfo(){
  if(document.getElementById("informacion").style.display = 'none'){
    document.getElementById('informacion').style.display = 'block';
  }
  else{
    document.getElementById("informacion").style.display = 'none';
  }
}
function ocultarInfo(){
  if(document.getElementById("informacion").style.display = 'block'){
    document.getElementById('informacion').style.display = 'none';
  }
  else{
    document.getElementById("informacion").style.display = 'none';
  }
}

click.addEventListener("click", mostrar);
click.addEventListener("click", cifrado);
show.addEventListener("mousedown", desifrar);
show.addEventListener("mouseup", cifrado);
showInfo.addEventListener("click",mostrarInfo);
hiddeInfo.addEventListener("click",ocultarInfo);
