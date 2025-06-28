/*document.querySelector("button").addEventListener("click",handleClick);

//document.querySelector("button").addEventListener("click",handleClick()); 
    //it is not used as function will be called at once..before clicking

// works when a button is clicked
function handleClick()
{
    alert("I got clicked");
}*/

/*
https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
*/
console.log("hi");

var n = document.querySelectorAll(".drum").length;
//it means select all the queries with tag button

var drumButtons = document.querySelectorAll(".drum");

//DETECTS BUTTON PRESS
for (var i = 0; i < n; i++) {
  drumButtons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

/*can add this addEventListener to the entire document so that entire document page listens to keyboard stroked

like prev we add addEventListener to query selector..see up
document.addEventListener("keypress", function (event) {
  //alert("Key was pressed");
  console.log(event);
});

//on clicking any key on keyboard..alert comes
*/

//detects keyboard press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(key)
{
  var activeButton = document.querySelector("."+ key); //to find the button to add animation

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

  //in style.css->.pressed is a class used to add animation to this function
}

/*
syntax of setTimeout()
setTimeout(funtion,milliseconds,para1,para2,...)
*/

/*
 
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio
 */
