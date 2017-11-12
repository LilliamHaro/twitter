// load cuando se usa como parametro de la funcion
// onload cuando se usa propiedad de un elemento-objeto (?)
window.onload = function() {
	var boton = document.getElementsByClassName("button"); // poner el boton en una variable
  var tweet = document.getElementById("text-area").value; //creando un avriable con el value del text-area(texto del tweet
	boton.addEventListener("click", function() { // si se hace click en el boton se realiza la función
		newTweet(tweet);
	});
	function newTweet(tweet) {
		var newTweetP = document.createElement("p"); //creando parrafo cpntenedor
    var newTweetText = document.createTextNode(tweet); // creando nodo texto
    newTweetP.appendChild(newTweetText); // haciendo padre al parraf contenedor del nodo texto
    var contenedor =document.getElementById("newTweets"); // contendedor donde se ubicara el parrafo
    contenedor.appendChild(newTweetP); //
		}
}
