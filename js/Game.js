/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


//declaring a game class 
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase("I talk a lot, so I've learned to tune myself out."),
            new Phrase("I’m not superstitious, but I am a little stitious"),
            new Phrase("The worst thing about prison was the dementors."),
            new Phrase("Bears. Beets. Battlestar Galactica."),
            new Phrase("I am Beyoncé, always")
        ];
        this.activePhrase = null;
 }

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
removelife method removes a heart per player life lost and adds the count to missed
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
completely stuck here....
*/
    gameOver(gameWon){
        const overlayGamePage = document.querySelector("overlay")
        overlayGamePage.style.display = " ";
            if(gameWon){
            document.querySelector("game-over-message").textContent = "Congratulations, you have won the game!";
            overlayGamePage.className.add("win");
        }else{
            document.querySelector("game-over-message").textContent = "Sorry, better luck next time!";
            overlayGamePage.className.add("lose");
        }
    }



    //     // game.resetGame() eventually comes into play 
    //     }}

/*
The handleInteraction method is what connects the Phrase and Game Phrases to ultimately make the game work 
Initially, the button is disabled and through an if statement to check if the text content is found in the phrase 
If the letter is not found in the phrase the class wrong is added and a player life is removed
Else if, a letter does match in the phrase, a class chosen is added and a letter is shown 
Finally, nested within the else statement, there is check to see if the overall game is won and if so, the gameOver function is called (true)
*/
        
    handleInteraction(button){
        button.disabled = true;
        const clickedButton = button.textContent;
            if (this.activePhrase.checkLetter(clickedButton) === false){
                button.classList.add('wrong');
                this.removeLife();
            } else {
                button.classList.add('chosen');
                this.activePhrase.showMatchedLetter(clickedButton);
                if(this.checkForWin()){
                this.gameOver(); //function does not work yet 
                }
            }
    }}

