window.onload = function() {
var buttonTweet = document.getElementById('button');//definiendo el elemento que desencadenara el evento
buttonTweet.addEventListener('click',tweeting); //agregando evento y llamando a la fucnión que se efectuará
}
//Creando la funcion
function  tweeting(event) {
 var contenedor = document.querySelector('.published'); //ubicando el luagr donde aparecerá el nuevo tweet
 var texto = document.form.text.value; // obteniendo el texto que escribiremos en el tweet
 // validando si el campo de texto esta vacio
   if(texto == 0){
     document.getElementById('button').disable = true; //desabilitando el boton
   }
   else {
     contenedor.innerHTML = texto; // dandole texto al contenedor
     // document.getElementById('button').style.backgroundColor= '#6ad2f3 ';
     document.form.text.value = ""; //vaciando el contenedor de texto una vez se haya publicado

   }
}
var tweet = document.form.text; //definiendo el elemento que escuchara el evento key down

//agregando la el evento y la funcion para el conteo de caracteres
tweet.addEventListener("keydown",function(){
 document.getElementById("countingNums").innerHTML = tweet.value.length;
});
