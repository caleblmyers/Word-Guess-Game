var wordBank = ["stark", "targaryan", "lannister", "baratheon", "greyjoy", "martell", "tyrell", "arryn"];
var wordAnswer = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log(wordAnswer);

var answerBlanks = [];
var textBlanks = document.getElementById("textBlanks")

for (var i = 0; i < wordAnswer.length; i++) {
    answerBlanks[i] = "_"
    textBlanks.textContent += "_"
}

var remainingLetters = wordAnswer.length;
var guessArray = document.getElementById("guessArray");
var guesses = []
var lives = 12
var livesLeft = document.getElementById("livesLeft")
livesLeft.textContent = lives
var winScreen = document.getElementById("winScreen")


document.onkeypress = function (event) {
    if (remainingLetters > 0 && lives > 0) {
        var guess = event.key
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
        }

        if (remainingLetters > 0) {        
            guesses.push(guess)
            guessArray.textContent = guesses
        }

        if (remainingLetters === 0) {
            winScreen.textContent = "You win!!!"
        }
    }
}