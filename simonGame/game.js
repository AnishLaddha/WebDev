var buttonColors = ["red", "blue", "green", "yellow"]
var level = 0;
var gamePattern = [];
var userClickedPattern = [];
function nextSequence(){
    userClickedPattern = [];
    level++;
    console.log(level);
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random() * 4); 
    var randomChosenColor = buttonColors[randomNumber];
    var btn_id = "#"+randomChosenColor;
    $(btn_id).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
    
}

function playSound(sfile){
    var audiofile = "sounds/"+sfile+".mp3";
    var sound = new Audio(audiofile);
    sound.play();
}
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed")
    
    setTimeout(function(){
        $("#"+currentColor).removeClass('pressed');
    }, 100);

}


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
              nextSequence();
            }, 1000);
    }
    } else {
        $("body").addClass("game-over")
    
        setTimeout(function(){
            $("body").removeClass('game-over');
        }, 200);
        startOver();
        console.log("wrong");
    }

}



$(".btn").click(function(event){
    var userChosenColour = event.currentTarget.id;
    userClickedPattern.push(userChosenColour);
    var btn_id = "#"+userChosenColour;
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);


})

$(document).keydown(function(){
    if(level === 0){
        nextSequence();
    }
})

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    $("#level-title").text("Incorrect! Press A Key To Start A New Game.");
}