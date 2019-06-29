# JavaScript Assignment 1

Caleb Myers

### Overview

I created a Game of Thrones themed hangman game for this assignment. 

The user sees a brief introduction and set of instructions upon entering the site. As noted on screen, pressing the 'S' key will begin the game.

When the user enters the 'S' key, the game begins and the instructions become hidden. 

In the game, the name of a randomly selected Great House of Westeros is chosen and their House Sigil is displayed on screen. Counters appear for total number of wins, and amount of lives (guesses) left. A set of underscores are also generated based on the length of the target word.

The user is then able to guess letters by typing them. All guesses are shown on the screen. If a guess is correct, it replaces the corresponding underscore on screen. 

* The game is **not** case sensitive.
* If the word has more than one instance of a single letter, a correct guess will reveal them all.

The user will lose if they run out of lives by making incorrect guesses.
The user will win if they correctly guess all letters without running out of lives.

Upon winning or losing, a new prompt appears above the game box. The prompt asks the user if they would like to play again, and allows them to do so by pressing the 'Y' key.

When a new game is called, a new word is chosen randomly, the corresponding sigil is shown, and the game contents are reset (lives left, set of underscores, previous guesses).

A win counter keeps track of how many wins the user has until they refresh the page.

**P.S. You can check the console if you're feeling stumped :)**