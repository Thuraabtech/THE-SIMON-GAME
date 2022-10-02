var randomNumber1=Math.floor(Math.random()*6)+1;
var randomSource1="/Users/soha/Desktop/web development/Dicee/dice"+randomNumber1+".png";
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomSource2="/Users/soha/Desktop/web development/Dicee/dice"+randomNumber2+".png";
var dice=document.querySelectorAll(".playerdice")[0].setAttribute("src",randomSource1);
var dice=document.querySelectorAll(".playerdice")[1].setAttribute("src",randomSource2);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent=" 🚩 Player1 wins!!!!";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").textContent="Player2 wins!!!! 🚩";
}
else{
  document.querySelector("h1").textContent="nobody wins!! , nobodys looses!!";
}
