var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var img1= document.getElementsByClassName("img1")[0];
img1.setAttribute("src", "images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img2= document.getElementsByClassName("img2")[0];
img2.setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1 == randomNumber2){
    document.getElementById("h1-tag").innerHTML = "Draw!";
}else if(randomNumber1>randomNumber2){
    document.getElementById("h1-tag").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
    document.getElementById("h1-tag").innerHTML = "Player 2 Wins!🚩";
}