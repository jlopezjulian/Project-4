/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//d

/*
declaring a phrase constructor with the parameter phrase that is converted to lower case
*/

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
/*
addPhraseToDisplay() adds letter placeholder to the display when game starts 
phrase element is selected and put into a variable unorderedListItem
a for loop is made to check if there is a letter in phrase, if there is a letter a template literal is made hiding the letter
else if there is a space, a template literal is used to indicate a space 
*/
  addPhraseToDisplay(){
    const phraseBox = document.getElementById("phrase");
    const unorderedListItem = phraseBox.firstElementChild;

    for(let i=0; i < this.phrase.length; i++) {
        if (/[a-z]/.test(this.phrase[i])) {
            let phrase_li = 
            `
                <li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>
            `
                unorderedListItem.insertAdjacentHTML("beforeend", phrase_li);
        } else {
            let space =
            `
            <li class="space"></li>
            `
                unorderedListItem.insertAdjacentHTML("beforeend", space);
            }
    }
  }
  /* 
    checkLetter method to check if passed letter is in the phrase 
  */
checkLetter(letter) {
    return this.phrase.includes(letter);
}

/*
    showMatchedLetter method to check if passed letter on screen after a match is found 
    @param(string) letter to display 
    https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
*/

showMatchedLetter(letter) {
    let phraseLetters = ul.children;
    for (let i = 0; i<phraseLetters.length; i++){
        if (letter === phraseLetters[i].textContent){
            phraseLetters[i].classList.add("show");
            phraseLetters[i].classList.remove("hide");
    }
   }
  }
 }



