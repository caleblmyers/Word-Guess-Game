var wordBank = ["stark", "targaryen", "lannister", "baratheon", "greyjoy", "martell", "tyrell", "arryn", "tully"];

var wordAnswer = wordBank[Math.floor(Math.random() * wordBank.length)]
console.log(wordAnswer)


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
livesLeft.textContent = lives

var winScreen = document.getElementById("winScreen")

var instructions = document.getElementById("instructions")
var gameBox = document.getElementById("gameBox")
var replay = document.getElementById("replay")

var winCount = 0
var winText = document.getElementById("winText")
winText.textContent = winCount


function checkLetter (event) {
    var guess = event.key
    guess = guess.toLowerCase()

    var correct = false
    
    for (var j = 0; j < wordAnswer.length; j++) {
        if (answerBlanks[j] === "_") {
            if (wordAnswer[j] === guess) {
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
    }

    if (correct === false) {
        lives--
        livesLeft.textContent = lives
    }

    if (lives === 0) {
        winScreen.textContent = "You lost!!!"
        winScreen.style.color = "red"
        replay.style.display = "block"
    }

    if (remainingLetters > 0) {
        guesses.push(guess)
        guessArray.textContent = guesses
    }

    if (remainingLetters === 0) {
        winCount++
        winText.textContent = winCount
        winScreen.textContent = "You win!!!"
        winScreen.style.color = "green"
        replay.style.display = "block"
    }
}

function resetGame (event) {
    wordAnswer = wordBank[Math.floor(Math.random() * wordBank.length)]
    console.log(wordAnswer)

    if (wordAnswer === "arryn" || wordAnswer === "tully" || wordAnswer === "tyrell") {
        document.getElementById("imageHolder").src = "assets/images/" + wordAnswer + ".webp"
    }
    else {
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
}

function gameState (event) {
    gameBox.style.display = "block"
    winCounter.style.display = "block"
    instructions.style.display = "none"
    replay.style.display = "none"           

    document.onkeypress = function (event) {
        if (remainingLetters > 0 && lives > 0) {           
            checkLetter(event)     
        }
        
        else if (event.key === 'y' || event.key === 'Y') {
            resetGame(event)
        }
    }
}

document.onkeypress = function (event) {
    var userInput = event.key    
    userInput = userInput.toUpperCase()    

    if (userInput === 'S') {
        gameState(event)
    }
}