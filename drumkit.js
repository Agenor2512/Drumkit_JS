var numberOfButtons = document.querySelectorAll(".button").length;

for (var b = 0; b < numberOfButtons; b++){

  document.querySelectorAll(".button")[b]
  .addEventListener('click', function(){
    var buttonStyle = this.innerHTML;
    sound(buttonStyle);
    animation(buttonStyle);
  });
}

document.addEventListener('keypress', function(event){ /** keypress is an event related to the keyboard and corresponding to an input key **/
  sound(event.key);
  animation(event.key); /** key() is an object, refer to an array containing names of specific properties linked to an object **/
});

function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("animation");

  setTimeout(function() { /** Defined time of animation **/
    activeButton.classList.remove("animation");
  }, 100);
}

function sound(key) { /** Insert audio samples with switch{} **/
  switch (key){
    case "w" :
     var sound1 = new Audio("HitHat.mp3");
     sound1.play();
     break;

     case "a" :
      var sound2 = new Audio("Snare.mp3");
      sound2.play();
      break;

    case "s" :
      var sound3 = new Audio("Crash.mp3");
      sound3.play();
      break;

    case "d" :
      var sound4 = new Audio("HighTom.mp3");
      sound4.play();
      break;

    case "j" :
      var sound5 = new Audio("BassDrum.mp3");
      sound5.play();
      break;

    case "k" :
      var sound6 = new Audio("MidTom.mp3");
      sound6.play();
      break;

    case "l" :
      var sound7 = new Audio("Ride.mp3");
      sound7.play();
      break;

    case "h" :
      var sound8 = new Audio("LowTom.mp3");
      sound8.play();
      break;

    default: console.log(key);
  }
}
