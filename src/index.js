import cipher from './cipher.js';

document.getElementById('final').style.display = 'none';
const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");
const click = document.getElementById("click");

function cifrado(){
    const textoIngresado = texto.value;
    const valorDesplazamiento = parseInt(desplazamiento.value);
    if(valorDesplazamiento>0){
      textoCifrado.value = cipher.encode(valorDesplazamiento, textoIngresado);
    }
    else{
      textoCifrado.value = cipher.decode(valorDesplazamiento, textoIngresado);
    }
}

function mostrar(){
    const textoIngresado = texto.value;
  if (textoIngresado == '') {
    alert('Olvidaste ingresar tu mensaje');
  }
  else {
    if (document.getElementById('final').style.display == 'none') {
      document.getElementById('final').style.display = 'block';
      document.getElementById('principal').style.display = 'none';
    }
  }
}

texto.addEventListener("keyup",cifrado);
click.addEventListener("click",mostrar);
desplazamiento.addEventListener("change", cifrado);


//console.log(cipher);