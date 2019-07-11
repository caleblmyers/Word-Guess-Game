var wordBank = ["stark", "targaryen", "lannister", "baratheon", "greyjoy", "martell", "tyrell", "arryn", "tully"];
var wordAnswer = wordBank[Math.floor(Math.random() * wordBank.length)]
if (wordAnswer === "arryn" || wordAnswer === "tully" || wordAnswer === "tyrell") {
    document.getElementById("imageHolder").src = "assets/images/" + wordAnswer + ".webp"
}
else {
    document.getElementById("imageHolder").src = "assets/images/" + wordAnswer + ".png"
}
var answerBlanks = []
var textBlanks = document.getElementById("textBlanks")
for (var i = 0; i < wordAnswer.length; i++) {
    answerBlanks[i] = "_"
    textBlanks.textContent += "_"
}
var remainingLetters = wordAnswer.length
var guesses = []
var guessArray = document.getElementById("guessArray")
var lives = 10
var livesLeft = document.getElementById("livesLeft")
var winScreen = document.getElementById("winScreen")
var replay = document.getElementById("replay")
var winCount = 0
var winText = document.getElementById("winText")
var winSound = new Audio("assets/audio/coinSound.wav")
var loseSound = new Audio("assets/audio/loseSound.mp3")
livesLeft.textContent = lives
// winText.textContent = winCount
$("#winText").text(winCount)

function checkLetter (event) {
    var guess = event.key
    guess = guess.toLowerCase()
 
    var correct = false

    for (var j = 0; j < wordAnswer.length; j++) {
        if (wordAnswer[j] === guess && answerBlanks[j] === "_") {
            if (j === 0) {
                guess = guess.toUpperCase()
            }           
            answerBlanks[j] = guess
            var noCommas = [answerBlanks.join("")];
            textBlanks.textContent = noCommas
            remainingLetters--
            correct = true
        }
    }

    if (correct === false) {
        lives--
        livesLeft.textContent = lives
    }
    if (lives === 0) {
        loseSound.play()
        winScreen.textContent = "You lost!!!"
        winScreen.style.color = "red"
        replay.style.display = "block"
        $("#resetRow").css("display", "block")
    }
    if (remainingLetters > 0) {
        guesses.push(guess)
        guessArray.textContent = guesses
    }
    if (remainingLetters === 0) {
        winSound.play()
        winCount++
        $("#winText").text(winCount)
        // winText.textContent = winCount
        winScreen.textContent = "You win!!!"
        winScreen.style.color = "green"
        replay.style.display = "block"
        $("#resetRow").css("display", "block")
    }
}

function resetGame (event) {
    wordAnswer = wordBank[Math.floor(Math.random() * wordBank.length)]
    if (wordAnswer === "arryn" || wordAnswer === "tully" || wordAnswer === "tyrell") {
        document.getElementById("imageHolder").src = "assets/images/" + wordAnswer + ".webp"
    } else {
        document.getElementById("imageHolder").src = "assets/images/" + wordAnswer + ".png"
    }
    answerBlanks = []
    textBlanks.textContent = ""
    for (var i = 0; i < wordAnswer.length; i++) {
        answerBlanks[i] = "_"
        textBlanks.textContent += "_"
    }
    guesses = []
    guessArray.textContent = ""
    remainingLetters = wordAnswer.length
    lives = 10
    livesLeft.textContent = lives
    winScreen.textContent = ""
    replay.style.display = "none"
    $("#resetRow").css("display", "none")
}

function gameState (event) {
    replay.style.display = "none"  
    $("#instructions").css("display", "none")
    $("#startDiv").css("display", "none")
    $("#winCounter").css("display", "block")
    $("#gameBox").css("display", "block")
    
    if (remainingLetters > 0 && lives > 0) {
        $(document).keypress(checkLetter)
    }
    
    $("#resetBtn").on("click", resetGame)
    // document.onkeypress = function (event) {
    //     if (remainingLetters > 0 && lives > 0) {           
    //         checkLetter(event)     
    //     }    
    //     else if (event.key === 'y' || event.key === 'Y') {
    //         resetGame(event)
    //     }
    // }
}

$(document).ready(function() {
    $("#startBtn").on("click", gameState)
})


/*

TODO:
- Fix reset button



*/