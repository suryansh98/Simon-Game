// alert("hello");

buttonColors = ["red", "blue", "green", "yellow"];

gamePattern = [];

// console.log(buttonColors)



function nextSequence(){

    var randomNumber = Math.floor(4 * Math.random());
    // console.log(randomNumber);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    //console.log(gamePattern);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/"+randomChosenColor +".mp3");
    audio.play();
    
}

nextSequence();


