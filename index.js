
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "images/dice" + randomNumber1 + ".png"; 


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";


document.addEventListener("keypress",function(event){

  if (event.key==="Enter"){

    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else {
      document.querySelector("h1").innerHTML = "Draw!";
    }
    setTimeout(function(){
      var heading=document.querySelector("h1")
      heading.style.fontSize="7rem";
      heading.innerHTML="Refresh to play again";
    },1500);
  }

  else{
    
    document.querySelector("h1").innerHTML = "press only Enter button to play";
    setTimeout(function(){
      var heading=document.querySelector("h1")
      heading.style.fontSize="7rem";
      heading.innerHTML="Refresh to play again";
    },1500);
  }
  

})
