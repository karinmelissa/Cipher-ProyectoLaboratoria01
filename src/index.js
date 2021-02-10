import cipher from './cipher.js';

//document.getElementById('final').style.display = 'none';
const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");
const click = document.getElementById("click");
const show = document.getElementById("eye-show");

function cifrado(){
    const textoIngresado = texto.value;
    const valorDesplazamiento = parseInt(desplazamiento.value);
    if(valorDesplazamiento>0){
      const textoCifrado = document.getElementById("cifrado");
      textoCifrado.value = cipher.encode(valorDesplazamiento, textoIngresado);
      document.getElementById("cifrado").innerHTML = textoCifrado.value;
    }
    else{
      textoCifrado.value = cipher.decode(valorDesplazamiento, textoIngresado);
      document.getElementById("cifrado").innerHTML = textoCifrado.value;
    }
}

function desifrar(){
  const textoADecifrar = document.getElementById("cifrado");
  const textoDecifrado = textoADecifrar.value;
  const valorDesplazamiento = - parseInt(desplazamiento.value);
  textoADecifrar.value = cipher.decode(valorDesplazamiento, textoDecifrado);
  document.getElementById("cifrado").innerHTML = textoADecifrar.value;
  console.log(textoADecifrar);
  console.log(textoDecifrado);
}

function mostrar(){
  const textoIngresado = texto.value;
  if (textoIngresado == '') {
    alert('Olvidaste ingresar tu mensaje');
  }
  else {
    if (document.getElementById('burbuja').style.display == 'none') {
      document.getElementById('burbuja').style.display = 'flex';
    }
    else{
      document.getElementById('burbuja').style.display = 'flex';

    }
  }
}

//texto.addEventListener("keyup",cifrado);
click.addEventListener("click",mostrar);
click.addEventListener("click",cifrado);
show.addEventListener("click",desifrar);

//desplazamiento.addEventListener("change", cifrado);


//console.log(cipher);