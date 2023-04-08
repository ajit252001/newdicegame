function show1(){
    document.querySelector(".row").style.background = "none";
    document.getElementById("head1").innerHTML = "GoodLuck";
     document.getElementById("playbtn").innerHTML = "PLAY";
    var c = document.getElementById("im2"); 
  c.setAttribute("style","visibility:visible")

  var k = document.getElementById("im1"); 
  k.setAttribute("style","visibility:visible")

  document.getElementById("pl1").innerHTML = "you";
 document.getElementById("pl2").innerHTML = "computer";

 var k = document.getElementById("playbtn"); 
 k.setAttribute("style","visibility:visible")
 k.setAttribute("onclick", "roll1();")

 

}

function roll1() {
    var audio = new Audio('sounds/MOREDICE.wav');
audio.play();
    document.getElementById("playbtn").innerHTML = "PLAY AGAIN";
    var n = document.getElementById("resetbtn"); 
    n.setAttribute("style","visibility:visible")

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImage1 = "images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage2 = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomImage2);

    switch (true) {
        case randomNumber1 > randomNumber2:
            document.querySelector("h1").innerHTML = "You win! ";
            break;
        case randomNumber1 < randomNumber2:
            document.querySelector("h1").innerHTML = "You lost! ";
            break;
        case randomNumber1 == randomNumber2:
            document.querySelector("h1").innerHTML = "It's a draw! ";
            break;
    }

}

function show2(){
    document.querySelector(".row").style.background = "none";
    document.getElementById("head1").innerHTML = "GoodLuck";
    document.getElementById("playbtn").innerHTML = "PLAY";

    var c = document.getElementById("im2"); 
  c.setAttribute("style","visibility:visible")

  var k = document.getElementById("im1"); 
  k.setAttribute("style","visibility:visible")

  document.getElementById("pl1").innerHTML = "player 1";
    document.getElementById("pl2").innerHTML = "Player 2";
  var m = document.getElementById("im3"); 
   m.setAttribute("style","visibility:hidden")

 var k = document.getElementById("playbtn"); 
 k.setAttribute("style","visibility:visible")
 k.setAttribute("onclick", "roll2();")
 
 
}



function roll2() {
    var audio = new Audio('sounds/MOREDICE.wav');
audio.play();
    document.getElementById("playbtn").innerHTML = "PLAY AGAIN";
    var n = document.getElementById("resetbtn"); 
    n.setAttribute("style","visibility:visible")

    

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImage1 = "images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage2 = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomImage2);

    switch (true) {
        case randomNumber1 > randomNumber2:
            document.querySelector("h1").innerHTML = "player 1 wins ";
            break;
        case randomNumber1 < randomNumber2:
            document.querySelector("h1").innerHTML = "player 2 wins ";
            break;
        case randomNumber1 == randomNumber2:
            document.querySelector("h1").innerHTML = "It's a draw! ";
            break;
    }

}

function show3(){
    document.querySelector(".row").style.background = "none";
    document.getElementById("head1").innerHTML = "GoodLuck";
     document.getElementById("playbtn").innerHTML = "PLAY";
    var c = document.getElementById("im2"); 
  c.setAttribute("style","visibility:visible")

  var k = document.getElementById("im1"); 
  k.setAttribute("style","visibility:visible")

  
  var k = document.getElementById("im3"); 
   k.setAttribute("style","visibility:visible")

document.getElementById("pl1").innerHTML = "player 1";
document.getElementById("pl2").innerHTML = "Player 2";

 var k = document.getElementById("playbtn"); 
 k.setAttribute("style","visibility:visible")
 k.setAttribute("onclick", "roll3();")
    
}

function roll3() {
    var audio = new Audio('sounds/MOREDICE.wav');
audio.play();
    document.getElementById("playbtn").innerHTML = "PLAY AGAIN";
    var n = document.getElementById("resetbtn"); 
    n.setAttribute("style","visibility:visible")

    

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImage1 = "images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage2 = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomImage2);

    var randomNumber3 = Math.floor(Math.random() * 6) + 1;
    var randomImage3 = "images/dice" + randomNumber3 + ".png";
    document.querySelector(".img3").setAttribute("src", randomImage3);

    if(randomNumber1 > randomNumber2 && randomNumber1>randomNumber3)
     {
            document.querySelector("h1").innerHTML = "player 1 wins ";
     }
     
     else if(randomNumber2 > randomNumber1 && randomNumber2>randomNumber3)
    {
           document.querySelector("h1").innerHTML = "player 2 wins ";
    }
    
     else if(randomNumber3 > randomNumber2 && randomNumber3>randomNumber1)
     {
            document.querySelector("h1").innerHTML = "player 3 wins ";
     }
     else{
        document.querySelector("h1").innerHTML = "oops no one wins,PLAY AGAIN";
     }
        
    }



function refreshPage(){
    window.location.reload();
} 