let userScore = 0;
let compScore = 0;

// here both computer and we should select any of rps for the game

const generateCompChoice = ()=>{
    const options = ["rock","paper","scissors"];  // computer is generating 
    const randId = Math.floor(Math.random()*3);
    return options[randId];
}


const msg = document.querySelector("#msg");
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");




const drawgame = ()=>{
    msg.innerText = "Game is Draw......."
    msg.style.backgroundColor= "#081b31";
    console.log("game is draw");
}



const showWinner=(userWin)=>{
    if(userWin){
    
        msg.innerText="User Wins!!!!"
        msg.style.backgroundColor="green";
        console.log("winner");
        userScore++;
        user_score.innerText = userScore;
    }
    else{
        
        msg.innerText="Looser :(";
        msg.style.backgroundColor="red";
        console.log("looser");
        compScore++;
        comp_score.innerText=compScore;
    }
}



const playGame=(userchoice)=>{
    console.log("Userchoice = ",userchoice);      // here we are trying to make userchoice and computer choice
    const compChoice = generateCompChoice();
    console.log("Computer Choice =", compChoice);

    if (userchoice===compChoice){
        // draw game
        drawgame();

    }

    else{
        userWin=true;

        if (userchoice == "rock"){
            // scissors,paper
            userWin=compChoice === "paper"? false:true;
        }
        else if(userchoice=="paper"){
            //rock, scissors
            userWin=compChoice === "scissors"? false:true;
        }
        else{
            // rock , paper
            userWin=compChoice === "rock"? false:true;

        }
        showWinner(userWin);
    }

    
}


// here we will use eventlisteners to perform clickable events for each choice for this we use foreach function 

const choices = document.querySelectorAll(".choice");  // this gives an array of choices containing rps
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{             // eventlistener added for clickable events
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);                         // here in this function we can see that we will be getting the both user choice
                                                      // as well as computer choice
    })

})



