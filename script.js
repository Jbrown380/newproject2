var buttons = document.querySelectorAll("button");
        for (let i = 0 ; i < buttons.length ; i++){
            buttons[i].addEventListener("click", startGame);
        }
function startGame(g){
    let wins = 0;
    let loss = 0;
    let ties = 0;
        for(let i = 0; i < wins + loss + ties; i++) {
            let playerChoice = g.target.innerText;
        let computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice === 0 ) {
          computerChoice = "Rock";
        } else if (computerChoice === 1) {
          computerChoice = "Paper";
        } else  {
          computerChoice = "Scissors";
        }
    
let result = playerScore(playerChoice, computerChoice);
        
        if (result === "Player choice"){
            result += "wins";
            wins++
        }
        if (result === "Computer choice"){
         result += "wins";
            loss++
        }

        if (result === "Draw"){
            result += "It is a tie";
            ties++
        }

function playerScore(player, computer){
            if (player === computer){
                return "Draw";
            } 
                
            if (player === "Rock"){
                if(computer === "Paper"){
                    return "Computer choice";
                } else {
                    return "Player choice";
                }
            }  

            if (player === "Paper"){
                if (computer === "Scissors"){
                    return "Computer choice";
                } else {
                    return "Player choice";
                }
            }
            if (player ==="'Scissors"){
                if (computer === "Rock"){
                    return "Computer choice";
                } else {
                    return "Player choice";
                }
            }
            var bodyEl = document.querySelector("body");
            var temp = `
            <h2>Wins:${wins}</h2>
            <h2>Loss:${loss}</h2>
            <h2>Ties:${ties}</h2>
            `;
            bodyEl.appendChild(temp);
        }
    }
}