var audio;
var select = document.querySelectorAll(".drum").length;
for (var i = 0; i < select; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonsHtml = this.innerHTML;
    makesound(buttonsHtml);
    buttonanimation(buttonsHtml)
  });
}
document.addEventListener("keypress", function (event) {
  makesound(event.key);
  buttonanimation(event.key)
});
function makesound(key) {
  switch (key) {
    case "a":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "t":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "h":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "q":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "f":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "z":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "w":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "g":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "y":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "u":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "x":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "e":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "r":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "v":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "c":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "b":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "i":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "o":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "n":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "p":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "m":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log();
  }
}
function buttonanimation(currentkey){
  var activebutton=document.querySelector("."+currentkey)
  activebutton.classList.add("pressed")
  setTimeout(() => {
    activebutton.classList.remove("pressed")  
  },100);
}
