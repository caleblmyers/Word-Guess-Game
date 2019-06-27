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

var letterGuess = document.getElementById("letterGuess");

document.onkeypress = function (event) {
    letterGuess.textContent = event.key;
    var guess = event.key

    for (var j = 0; j < wordAnswer.length; j++) {
        if (guess === wordAnswer[j]) {
            console.log("Match!");

            remainingLetters--
            console.log(remainingLetters)

            answerBlanks[j] = guess
            console.log(answerBlanks)

            var noCommas = [answerBlanks.join("")];
            textBlanks.textContent = noCommas
        }
    }a

    if (remainingLetters === 0) {
        console.log("You win!!")
    }
}