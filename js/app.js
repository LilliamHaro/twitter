window.addEventListener('load', function() {
  // definiendo el elemento que escuchara en el evento click
  var buttonTweet = document.getElementById('buttonT');
  // definiendo el elemento que escuchara en el evento keydown
  var textArea = document.getElementById('text-area');
  // -------------------------------------------------EVENTO KEYDOWN---------------------------------------
  // podríamos haber usado el evento keyup pero el contador no se hubiera mostrado como deseamos
  textArea.addEventListener('keydown', function() {
    // definiendo el numero de caracteres que se han tecleado en el text-area
    var numsOfCharacters = textArea.value.length;
    // limite de caracteres posibles en nuestro tweet contando desde el primer caracter
    var limit = 139;
    // dandole valor al contador
    // contador = limit - numsOfCharacters -- le hará saber al usauro cuantos carateres le quedan
    document.getElementById('countingNums').innerHTML = limit - numsOfCharacters;
    // codicionando contador
    if (numsOfCharacters >= 0 && numsOfCharacters <= 120) {
      buttonTweet.disabled = false;
      buttonTweet.setAttribute('class', 'buttonTweet sky-bg');
      document.getElementById('countingNums').setAttribute('class', 'characters-nums');
    } else if (numsOfCharacters > 120 && numsOfCharacters <= 130) {
      buttonTweet.disabled = false;
      buttonTweet.setAttribute('class', 'buttonTweet sky-bg');
      document.getElementById('countingNums').setAttribute('class', 'characters-nums green-nums');
    } else if (numsOfCharacters > 130 && numsOfCharacters < 140) {
      buttonTweet.disabled = false;
      buttonTweet.setAttribute('class', 'buttonTweet sky-bg');
      document.getElementById('countingNums').setAttribute('class', 'characters-nums red-nums');
    } else if (numsOfCharacters >= 140) {
      buttonTweet.disabled = true;
      buttonTweet.setAttribute('class', 'buttonTweet');
      document.getElementById('countingNums').setAttribute('class', 'characters-nums gray-nums');
    }
    // Condicionando el evento key para cambiar el tamaño del textarea al dar enter
    // 13 ---> código ascii de la tecla enter
    if (event.keyCode === 13) {
      // para darle el tamaño del scroll a la altura del textarea
      textArea.style.height = (textArea.scrollHeight) + 'px';
    }
  });
  // ----------------------------------------------------EVENTO CLICK-----------------------------------------------

  // volveremos a usar las variables   buttonTweet y textArea definidas en la parte superior
  buttonTweet.addEventListener('click', function(event) {
    // definimos el contenedor donde aparecerán los nuesvos tweets
    var container = document.getElementById('newTweets');
    // definiendo variables para obtener la hora -- usando el objeto date
    var fecha = new Date();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    // condicionales para evitar que las horas y los minutos no aparezcan como unidades ej: '9'--> '09'
    if (minuto < 10) {
      minuto = '0' + minuto;
    }
    if (hora < 10) {
      hora = '0' + hora;
    }
    var hours = 'Publicado a las ' + hora + ':' + minuto + ' horas';

    // validamos que el textarea no este vacío ni este hecho de solo espacios
    if (textArea.value != 0) {
      // creando nuevo tweet
      // creando contenedor para la hora
      var newTweetsHour = document.createElement('p');
      // dandole el texto escrito en el textarea al contenedor del tweet
      newTweetsHour.innerHTML = hours;
      // creando contenedor para el uevo tweet
      var newTweetBox = document.createElement('div');
      // dandole el valor del texto escrito en el textarea al contenedor del tweet
      newTweetBox.innerHTML = textArea.value;
      // uniendo el contenedor con la hora al tweet
      newTweetBox.appendChild(newTweetsHour);
      // Condicionando la posicion del nuevo tweet
      // si no hay tweets anteriores se agregara normalmente
      if (!container.children) {
        container.appendChild(newTweetBox);
      } else {
        // si hay tweets anteriores el nuevo tweet se agregará antes que estos
        container.insertBefore(newTweetBox, container.firstElementChild);
      }
      // reiniando el textarea
      textArea.value = '';
      // reiniciando el contador
      document.getElementById('countingNums').innerHTML = 140;
      // regresamos al boton y al contador a su clase original
      buttonTweet.setAttribute('class', 'buttonTweet');
      document.getElementById('countingNums').setAttribute('class', 'characters-nums');
      // reiniciando el tamaño del textarea en el caso de que el contenido haya sobrepasado su altura
      document.getElementById('text-area').style = 'initial';
    }
  });
});
