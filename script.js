'use strict';

// DOM elements
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const tutBtn = document.querySelector(".tutorial");
const closeTutBtn = document.querySelector(".close-modal");
const tutorialSteps = document.querySelector(".modal");
const tutorialBackground =  document.querySelector(".overlay");
const message = document.querySelector(".message");
const actualNumber = document.querySelector(".number");
const guessedNumberField = document.querySelector(".guess");
let currentScore = document.querySelector(".score");
let highestScore = document.querySelector(".highscore");

// Random Generated number
let generatedNumber = NaN; 

// Helper Methods
const initialCondition = () =>{
    let min = Number(document.querySelector("#from").value);
    let max = Number(document.querySelector("#to").value);
    if(!min || !max || min >= max ){
       min = 1;
       max = 30;
       message.textContent = "No Range Specified, Range from 1 to 30 inclusive by default!"
    }
        message.textContent = "Start guessing...";
        generatedNumber = randomIntGenerator(min, max);
        console.log(generatedNumber);
        actualNumber.textContent = "?";
        currentScore.textContent = 20;
        guessedNumberField.value = "";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = '15rem';
    
}

const randomIntGenerator = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

const updateHighscore = (currentScore, highestScore) =>{
    if( Number(currentScore.textContent) > Number(highestScore.textContent)){
        highestScore.textContent = currentScore.textContent;
    }
}

const openTutorial = () =>{
    tutorialSteps.classList.remove("hidden");
    tutorialBackground.classList.remove("hidden");
}

const closeTutorial = () =>{
    tutorialSteps.classList.add("hidden");
    tutorialBackground.classList.add("hidden");
}


initialCondition();
console.log(generatedNumber);

checkBtn.addEventListener("click", () =>{
    console.log("Check was clicked!");
    let guessedNumber = Number(guessedNumberField.value);

    if(!guessedNumber){
        message.textContent = "Value is not valid!!!!!";
    } else if(guessedNumber === generatedNumber){
        message.textContent = "Correct!!!"
        actualNumber.textContent = generatedNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = '30rem';

        updateHighscore(currentScore, highestScore);

    } else{
        if(guessedNumber > generatedNumber){
            message.textContent = "Too High!";
        }else{
            message.textContent = "Too Low!";
        }
        let newScore =  Number(currentScore.textContent)-1;
        currentScore.textContent = newScore;
    }

})

againBtn.addEventListener("click", ()=>{
    initialCondition();
})

tutBtn.addEventListener("click", () => {
    console.log("Tutorial Clicked!");
    if(tutorialSteps.classList.contains('hidden')){
        console.log("Should open tutorial!");
        openTutorial();
    }
})

closeTutBtn.addEventListener("click", closeTutorial);
tutorialBackground.addEventListener("click", closeTutorial);

document.addEventListener('keydown', (e) =>{
    if(e.key === "Escape" && !tutorialSteps.classList.contains('hidden')){
        closeTutorial();
    }
})


