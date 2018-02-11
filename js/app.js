
window.addEventListener('load', function() {
  var myUbication = '';
  function ubicacion() {
    if (navigator.geolocation) {
      function localizacion(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        console.log(lat + '' + lng);
        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(lat, lng);
        geocoder.geocode({'location': latlng}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            myUbication = results[0].formatted_address;
          } else {
            alert('ocurrio un error inesperado');
          }
        });
      };
      function error() {
        alert('ocurrio un error inesperado');
      }
      navigator.geolocation.getCurrentPosition(localizacion, error);
    }
  };
  ubicacion();
  var buttonTweet = document.getElementById('buttonT');
  var textArea = document.getElementById('text-area');
  textArea.addEventListener('keydown', function() {
    var numsOfCharacters = textArea.value.length;
    var limit = 139;
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
    if (event.keyCode === 13) {
      textArea.style.height = (textArea.scrollHeight) + 'px';
    }
  });
  buttonTweet.addEventListener('click', function(event) {
    var container = document.getElementById('newTweets');
    // definiendo variables para obtener la hora -- usando el objeto date
    var fecha = new Date();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    // condicionales para evitar que las horas y los minutos no aparezcan como unidades
    if (minuto < 10) {
      minuto = '0' + minuto;
    }
    if (hora < 10) {
      hora = '0' + hora;
    }
    var hours = 'Publicado a las ' + hora + ':' + minuto + ' horas';

    if (textArea.value != 0) {
      var newTweetsHour = document.createElement('p');
      newTweetsHour.innerHTML = hours + ' en ' + myUbication;
      var newTweetBox = document.createElement('div');
      newTweetBox.innerHTML = textArea.value;
      newTweetBox.appendChild(newTweetsHour);

      if (!container.children) {
        container.appendChild(newTweetBox);
      } else {
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
