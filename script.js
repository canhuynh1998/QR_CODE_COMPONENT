'use strict';



const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const message = document.querySelector(".message");
const actualNumber = document.querySelector(".number");
const guessedNumberField = document.querySelector(".guess");
let targetNumber = NaN;
let currentScore = document.querySelector(".score");
let highestScore = document.querySelector(".highscore");

const initialCondition = () =>{
  
    let min = Number(document.querySelector("#from").value);
    let max = Number(document.querySelector("#to").value);
    if(!min || !max || min >= max ){
       min = 1;
       max = 30;
       message.textContent = "No Range Specified, Range from 1 to 30 inclusive by default!"
    }
        message.textContent = "Start guessing...";
        targetNumber = randomIntGenerator(min, max);
        console.log(targetNumber);
      
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

initialCondition();

console.log(targetNumber);

checkBtn.addEventListener("click", () =>{
    console.log("Check was clicked!");
    let guessedNumber = Number(guessedNumberField.value);

    if(!guessedNumber){
        message.textContent = "Value is not valid!!!!!";
    } else if(guessedNumber === targetNumber){
        message.textContent = "Correct!!!"
        actualNumber.textContent = targetNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = '30rem';

        updateHighscore(currentScore, highestScore);

    } else{
        if(guessedNumber > targetNumber){
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