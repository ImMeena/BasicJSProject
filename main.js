const inputs = document.querySelectorAll("input");
let clicks = 0;
const restartButton = document.getElementById("but");
let printMsg = document.getElementById("print");
printMsg.innerHTML = "  Welcome to the Adventure";
printMsg.style.fontWeight = "bold";
restartButton.addEventListener('click', (evt) => {
    location.reload();
})

// Assign an array for winning pattern
let winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//To check the winner
class CheckWinner{
    checkWinner(){
        for(let i of winningPattern){
            let [cell1, cell2, cell3] = [
                inputs[i[0]].value,
                inputs[i[1]].value,
                inputs[i[2]].value
            ];
    
            if ((cell1 != "") && (cell2 != "") && (cell3 != "")){ 
                if (cell1 === cell2 && cell2=== cell3) {
                    const displayWinner = new WinFunction(cell1); 
                    displayWinner.win();
                    cell1.style.background = "Green";
                }
            }
        }      
    }
}


// Disable all the buttons after getting winning pattern
const disabledButtons = () =>{
    inputs.forEach((input) => (input.disabled = true));
}

// Dispaly winner

class WinFunction {
    constructor(val){
        this.val = val;
    }
    win(){
        disabledButtons();
        if(this.val === 'X'){
            printMsg.innerHTML = "🏆🏆🏆🏆Wohooo........ Player X Won🏆🏆🏆🏆";
            printMsg.style.color = "Green"; 
        }
        else{
            printMsg.innerHTML = "🏆🏆🏆🏆 Wohooo........  Player O Won 🏆🏆🏆🏆";
            printMsg.style.color = "Green"; 
        }
    }
}

// Dispaly Game draw if there is no winning pattern found
const drawFunction = () =>{
    disabledButtons();
    printMsg.innerHTML = "OOOOpsiiii......  Its a Draw";
    printMsg.style.color = "Red";
}

// Display input value andplayer name
for (let input of inputs) {
    input.addEventListener('click', (evt) => {
        const id = evt.target.id;

        // Display Player X
        if (clicks % 2 === 0) { 
            input.value = "X";
            input.disabled = true;  
            printMsg.innerHTML = "Player X Turn";            
        }
        // Display Player O
        else{
            input.value = "O";
            input.disabled = true; 
            printMsg.innerHTML = "Player O Turn";            
        }
        clicks++;

        if(clicks === 9){
            drawFunction();        
        }
        const winnerCheck = new CheckWinner();
        winnerCheck.checkWinner();
    })
}   