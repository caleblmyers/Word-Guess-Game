var winSound = new Audio("assets/audio/coinSound.wav")
var loseSound = new Audio("assets/audio/loseSound.mp3")

var wordBank = ["stark", "targaryen", "lannister", "baratheon", "greyjoy", "martell", "tyrell", "arryn", "tully"];
var wordAnswer = wordBank[Math.floor(Math.random() * wordBank.length)]
if (wordAnswer === "arryn" || wordAnswer === "tully" || wordAnswer === "tyrell") {
    $("#imageHolder").attr("src", "assets/images/" + wordAnswer + ".webp")
} else {
    $("#imageHolder").attr("src", "assets/images/" + wordAnswer + ".png")
}

var answerBlanks = []
var textBlanks = document.getElementById("textBlanks")
for (var i = 0; i < wordAnswer.length; i++) {
    answerBlanks[i] = "_"
    textBlanks.textContent += "_"
}

var guesses = []
var remainingLetters = wordAnswer.length
var winCount = 0
var lives = 10
var roundOver = false

$("#winText").text(winCount)
$("#livesLeft").text(lives)

function checkLetter (event) {
    var correct = false
    var guess = event.key
    guess = guess.toLowerCase()
    
    if (!roundOver) {
        for (var i = 0; i < wordAnswer.length; i++) {
            if (wordAnswer[i] === guess && answerBlanks[i] === "_") {
                if (i === 0) {
                    guess = guess.toUpperCase()
                }           
                answerBlanks[i] = guess
                var noCommas = [answerBlanks.join("")];
                textBlanks.textContent = noCommas
                remainingLetters--
                correct = true
            }
        }
    
        if (correct === false) {
            lives--
            $("#livesLeft").text(lives)
        }
        if (lives === 0) {
            roundOver = true
            loseSound.play()
            $("#winScreen").text("You lost!").css("color", "red")
            $("#replay").css("display", "block")
        }
        if (remainingLetters >= 0) {
            guesses.push(guess)
            $("#guessArray").text(guesses)
        }
        if (remainingLetters === 0) {
            roundOver = true
            winSound.play()
            winCount++
            $("#winText").text(winCount)
            $("#winScreen").text("You win!").css("color", "green")
            $("#replay").css("display", "block")
        }
    }
}

function resetGame (event) {
    lives = 10
    guesses = []
    $("#livesLeft").text(lives)
    $("#guessArray").text("")
    $("#winScreen").text("")
    $("#replay").css("display", "none")
    roundOver = false
    wordAnswer = wordBank[Math.floor(Math.random() * wordBank.length)]
    remainingLetters = wordAnswer.length
    if (wordAnswer === "arryn" || wordAnswer === "tully" || wordAnswer === "tyrell") {
        $("#imageHolder").attr("src", "assets/images/" + wordAnswer + ".webp")
    } else {
        $("#imageHolder").attr("src", "assets/images/" + wordAnswer + ".png")
    }
    answerBlanks = []
    textBlanks.textContent = ""
    for (var i = 0; i < wordAnswer.length; i++) {
        answerBlanks[i] = "_"
        textBlanks.textContent += "_"
    }
}

function gameState (event) {
    $("#instructions").css("display", "none")
    $("#startDiv").css("display", "none")
    $("#replay").css("display", "none")
    $("#winCounter").css("display", "block")
    $("#gameBox").css("display", "block")
    
    $(document).keypress(checkLetter)
    $("#resetBtn").on("click", resetGame)
}

$(document).ready(function() {
    $("#startBtn").on("click", gameState)
})