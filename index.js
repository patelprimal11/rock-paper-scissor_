const choice= ['rock','paper','scissor'];
const userDisplay=document.getElementById("userDisplay");
const comDisplay=document.getElementById("comDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerscore =document.getElementById("playerscore");
const computerscore =document.getElementById("computerscore");
var playerscore1= 0;
var computerscore1 =0;

function playgame(playerchoice){

    const comchoice=choice[Math.floor(Math.random()*3)];
    let result="";

    if(playerchoice===comchoice){
        result="IT'S A TIE !.."
    }
    else{
        switch(playerchoice){
            case "rock":
                result=(comchoice==="scissor")? "YOU WIN ..!":"YOU LOSE ..!";
                break;
            case "paper":
                result=(comchoice==="rock")? "YOU WIN ..!":"YOU LOSE ..!";
                break;
            case "scissor":
                result=(comchoice==="paper")? "YOU WIN ..!":"YOU LOSE ..!";
                break;
        }
    }
    userDisplay.textContent="PLAYER :"+playerchoice
    comDisplay.textContent="COMPUTER :"+comchoice
    resultDisplay.textContent="RESULT:"+result;
    resultDisplay.classList.remove("green","red");

    switch(result){
        case "YOU WIN ..!":
            playerscore1++;
            playerscore.textContent=playerscore1
            resultDisplay.classList.add("green");
            break;
        case "YOU LOSE ..!":
            computerscore1++;
            computerscore.textContent=computerscore1
            resultDisplay.classList.add("red");
            break;
    }

}