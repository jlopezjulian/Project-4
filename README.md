# Project-4
 Phrase word guesser 


A fun, interactive phrase guesser! 

The following project created two classes: Game and Phrase. 

The Phrase class had the following methods:
1. addPhraseToDisplay which acted as placeholder to display when the game started
2. showMatchedLetter() reveals the letters on the board based on the selected letter 
3. checkLetter: this method checked to see if the letter selected by the player matched a letter in the phrase


The Game class had the following methods:
1. getRandomPhrase: randomized the phrases
2. startGame: displayed the random phrase
3. checkforWin: if there were 0 hidden letters, game was won 
4. removeLife: if a player life was lost, a heart image was hidden from the page
5. gameOver: displayed a screen for losing or winning score 
6. handleInteraction: connected Phrase and Game phrase with and else if statement 
8. resetGame: reset the phrase game by removing the wrong, chosen and disabled attributes

In a seperate app.js file, the event listeners for keyboard button use was made available. 



