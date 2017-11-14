window.onload = function() {
var buttonTweet = document.getElementById('buttonT');//definiendo el elemento que desencadenara el evento
buttonTweet.addEventListener('click',tweeting); //agregando evento y llamando a la fucnión que se efectuará
}
//Creando la funcion
function  tweeting(event) {
 var contenedor = document.querySelector('.published'); //ubicando el luagr donde aparecerá el nuevo tweet
 var texto = document.form.text.value; // obteniendo el texto que escribiremos en el tweet
 // validando si el campo de texto esta vacio
   if(texto == 0){
     document.getElementById('buttonT').disabled = true; //desabilitando el boton
   }
   else {
		 var newTweetBox = document.createElement('p'); //creando elemento contenedor
     // newTweetBox.innerHTML = firstLine + '<br>' + seconLine + '<br>' + thirdLine; // dandole el texto que escribimos al elemento contenedor
     newTweetBox.innerHTML = texto;
		 document.getElementById('newTweets').appendChild(newTweetBox); //agregando el contenedor con el texto al a la caja de nuevos tweets
     document.form.text.value = ""; //vaciando el contenedor de texto una vez se haya publicado
   }
}
var tweet = document.form.text; //definiendo el elemento que escuchara el evento key down

//agregando la el evento y la funcion para el conteo de caracteres
tweet.addEventListener("keydown",function(){
  var numsOfCharacters = tweet.value.length;
  var limit = 140;

 document.getElementById("countingNums").innerHTML = limit - numsOfCharacters;
 if(numsOfCharacters > 140){
	 document.getElementById('buttonT').disabled = true;
	 document.getElementById('buttonT').style.backgroundColor = 'gray';
	 document.getElementById("countingNums").style.color = 'gray';


 }
 else if(numsOfCharacters > 130 && numsOfCharacters < 140) {
	 document.getElementById("countingNums").style.color = 'red';
	 document.getElementById('buttonT').disabled = false;
	 document.getElementById('buttonT').style.backgroundColor = '#6ad2f3';
 }
 else if(numsOfCharacters > 120) {
	document.getElementById("countingNums").style.color = 'green';
	document.getElementById('buttonT').disabled = false;
	document.getElementById('buttonT').style.backgroundColor = '#6ad2f3';
 }
 else if(numsOfCharacters < 120){
	 document.getElementById("countingNums").style.color = '#6ad2f3';
	 document.getElementById('buttonT').disabled = false;
 }
});
