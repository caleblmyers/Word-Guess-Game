var wordBank = ["stark", "targaryan", "lannister", "baratheon", "greyjoy", "martell", "tyrell", "arryn"];

var wordAnswer = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log(wordAnswer);

var answerBlanks = document.getElementById("answerBlanks");

for (var i = 0; i < wordAnswer.length; i++) {
    answerBlanks.textContent += "_ ";
}

var letterGuess = document.getElementById("letterGuess");

document.onkeypress = function (event) {
    letterGuess.textContent = event.key;

    console.log(event.key);

    for (var j = 0; j < wordAnswer.length; j++) {
        if (event.key === wordAnswer[j]) {
            console.log("Match!");

            
        }
    }
}



// letterGuess = ...

//  for (i = 0; i < wordAnswer.length; i++) {
//      if (letterGuess === wordAnswer[i]) {

//      }
//  }