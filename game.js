// alert("hello");

buttonColors = ["red", "blue", "green", "yellow"];

gamePattern = [];

userClickedPattern = [];

level = 1;
// console.log(buttonColors)

function playSound(color){
    var audio = new Audio("sounds/"+color +".mp3");
    audio.play();
}

function animatePress(currentColor){

    console.log(currentColor);
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);

}

function nextSequence(){

    userClickedPattern = [];
    $("h1").text("Level " + level);
    level++;

    var randomNumber = Math.floor(4 * Math.random());
    // console.log(randomNumber);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    //console.log(gamePattern);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

   playSound(randomChosenColor);
   
    
}

$(".btn").on("click", function(){

    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    //console.log(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
})

function oneClick(){
    $(document).one("keypress", (function(){
    nextSequence();
}));
}


function checkAnswer(index){
    
    if(gamePattern[index] === userClickedPattern[index]){
        console.log("Success");

        if(userClickedPattern.length === gamePattern.length){

            setTimeout(function(){
                nextSequence()
            }, 1000);
        }

    }
    else
        {
            console.log("wrong");

            startOver();
        }

}


function startOver(){

    $("h1").text("Game Over, press any key to restart!");

            playSound("wrong");

            $("body").addClass("game-over");

            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 200);

            level = 1;
            gamePattern = [];

            oneClick();
}


oneClick();


