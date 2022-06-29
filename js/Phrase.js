/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//declaring a phrase class 

/*

*/

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

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
*/

showMatchedLetter(letter) {
    let phraseLetters = ul.children;
    for (let i = 0; i<phraseLetters.length; i++){
        if (letter === phraseLetters[i].textContent){
            phraseLetters[i].classList.add("show");
            phraseLetters[i].classList.remove("hide");// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    }
   }
  }
 }

 console.log("hello");

