/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


/*
Game class constructor is made with the following properties:
-missed to keep track of the missed guesses 
-phrases that hold an array of phrases initialized by 
-active phrase that is the phrase object in play, starting with null
*/


class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase("I talk a lot, so I learned to tune myself out."),
            new Phrase("I’m not superstitious, but I am a little stitious"),
            new Phrase("The worst thing about prison was the dementors."),
            new Phrase("Bears. Beets. Battlestar Galactica."),
            new Phrase("I am Beyoncé, always")
        ];
        this.activePhrase = null;
 }

/*
getRandomPhrase returns a random phrase from the array pf phrases in Games class phrases properties
it is randomized by using the .random()
*/


    getRandomPhrase(){
        let index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    }
/*
startGame function begins game by selecting a random phrase and displaying it to user
this function selects overlay to none, then it sets an active phase to getRandomPhrase
finally, the activePhrase is added to the addPhrase to Display 
*/

    startGame(){
        let overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

/* 
checkForWin method checks to see if there are any letters hidden
if there are zero hidden letters then it wil return true (result in a win), else it would return false 
*/

    checkForWin(){
        const hiddenLetters = document.querySelectorAll(".hide");
        if(hiddenLetters.length === 0){
            return true;
        }else{
            return false;
        }
    }

/*
removeLife method removes a heart per player life lost and adds the count to missed
If there are more than 4 wrong selections (misses) than the gameOver method is called, finishing the game
*/


    removeLife(){
        lives[this.missed].src = "images/lostHeart.png";
        this.missed += 1;
        if (this.missed >= 5){
            this.gameOver();
        }
    }

/*
gameOver function shows the display screen for a winning score or a losing score dependant on lives lost 
classes are selected and "flex" is shorthand for CSS flexbox, instead of leaving an empty string on line 84, flex is used as a value for the display
*/
    gameOver(gameWon){
        const overlayGamePage = document.querySelector("#overlay")
        overlayGamePage.style.display = "flex";
            if(gameWon === true){
                document.querySelector("#game-over-message").textContent = "Congratulations, you have won the game!";
                overlayGamePage.className = ("win");
            }else{
                document.querySelector("#game-over-message").textContent = "Sorry, better luck next time!";
                overlayGamePage.className = ("lose");
        }
        this.resetGame();
    }


/*
The handleInteraction method is what connects the Phrase and Game Phrases to ultimately make the game work 
Initially, the button is disabled and through an if statement to check if the text content is found in the phrase 
If a letter does match in the phrase, a class chosen is added and a letter is shown 
Additionally, nested within the else statement, there is a check to see if the overall game is won and if so, the gameOver function is called (true)
Else if, if a letter is not found in the phrase the class wrong is added and a player life is removed
*/

handleInteraction(button) {
    button.disabled = true;
    if (this.activePhrase.checkLetter(button.innerHTML)) {
        this.activePhrase.showMatchedLetter(button.innerHTML);
        button.classList.add('chosen');
            if(this.checkForWin() === true) {
                this.gameOver(true);
            };
    } else {            
        button.classList.add('wrong');
        this.removeLife();
    }
}

/*
resetGame() removes the wrong, chosen, and disabled attributes and then a for each method is used to iterate a liveHeart image to a life

*/


    resetGame(){
                ul.innerHTML = '';
            keyboardKeys.forEach(button => {
                button.classList.remove('wrong');
                button.classList.remove('chosen');
                button.removeAttribute('disabled');
            })
                lives.forEach(lives =>{
                    lives.src = "images/liveHeart.png";
            })
    }}    