/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Step 2 testing
// const phrase = new Phrase();
// const game = new Game();

//Step 3 Testing
// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

//Step 4 Testing
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

//Step 6 Testing
// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

//Step 7 Testing
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);


/*
variables used in Game class
*/
const lives = document.querySelectorAll(".tries img"); 
const ul = document.getElementById("phrase").firstElementChild;


 /*
 event listener is created to start a new game by calling the startGame function 
*/
const startGameButton = document.getElementById("btn__reset"); 
let game;

startGameButton.addEventListener("click", () =>{
    game = new Game();
    game.startGame();
})


/*
event listener is created to show displayed keys on screen
*/

const keyboardKeys = document.querySelectorAll('.key');

keyboardKeys.forEach(button => {
    button.addEventListener('click', () =>{
        game.handleInteraction(button)
        console.log(button);
        }
    )
})

