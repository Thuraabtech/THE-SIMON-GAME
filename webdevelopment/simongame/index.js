var userPath = [];
var gamePath = [];
var level = 0;
var start =false;
$(document).keypress(function(){
  if(!start){
    $("h1").text("level "+level);
    nextSequence();
    start=true;
    $("body").css("background-color","#483d8b");

  }
});
$(".squarein").click(function(){
  var userchoice = $(this).attr("id");
  console.log(userchoice);
  userPath.push(userchoice);
  animate(userchoice);
  playSound(userchoice);
  check(userPath.length-1);
});
function check(currentLevel){
  if(userPath[currentLevel]===gamePath[currentLevel]){
    if (userPath.length === gamePath.length){
    setTimeout(function(){
      nextSequence();
    },2000);
  }
}else {
    $("h1").text("Game Over !!, enter any key to restart");
    $("body").css("background-color","red");
     startAgain();

  }
}
function nextSequence(){
  var randomNumber=Math.floor(Math.random()*4);
  var colors=["red","blue","yellow","green"];
  var randomChosenColour=colors[randomNumber];
  $("h1").text("level "+level);
  userPath=[];
  level++;
  gamePath.push(randomChosenColour);
  console.log(randomNumber);
  animate(randomChosenColour);
  playSound(randomChosenColour);

}
function playSound(name){

  var music = new Audio(name+".mp3");
  music.play();
}
function animate(name){
$("#"+name).addClass("press");
setTimeout(function(){
  $("#"+name).removeClass("press");
},1000);
}
function startAgain(){
  level=0;
  gamePath=[];
  userPath=[];
  start=false;

}
