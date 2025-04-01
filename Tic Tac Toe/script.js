const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".gameInfo");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//intialization function

function initGame() {
    currentPlayer = "X"
    gameGrid = ["","","","","","","","",""];
    //UI Update
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        
        
    })
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
    //removing green color
    boxes.forEach((box) => {
        box.classList.remove("win", "red");
    })

}

initGame();

//function ofr swapping turn
function swapTurn() {
    if(currentPlayer === "X") {
        currentPlayer ="O"
    }
    else {
        currentPlayer = "X"
    }

    //UI Update
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

//checking if game is over 
function checkGameOver() {
   let answer = "";


   winningPositions.forEach((position) => {
    // all 3 boxes should be non-empty and same in value
    if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "")
    && (gameGrid[position[0]] === gameGrid[position[1]]) && ( gameGrid[position[1]] === gameGrid[position[2]] )) 
    
    {
        //check if winner is X or O
        if(gameGrid[position[0]] === "X")
            answer = "X"
        else
            answer = "O"

        //disable pionter event
        boxes.forEach((box) => {
            box.style.pointerEvents = "none";
        })
        //now we know the winner
        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");

        
    }

   });

   if (answer !== "") {
    gameInfo.innerText = `Winner is - ${answer}`;
    newGameBtn.classList.add("active"); 
    return;
   }

   //let's check if game tied
   let fillCount = 0;
   gameGrid.forEach((box) => {
    if(box !== "")
        fillCount++;    
   });

   //board is filled, game is tied
   if(fillCount === 9){
    gameInfo.innerText = "Game Tied ! "
    newGameBtn.classList.add("active");
    boxes.forEach((box) => {
        box.classList.add("red");
    })
   }

}

//adding Event Listner on Boxes;
function handleClick(index) {
    if(gameGrid[index] === "" ) {
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        // swap the turn
        swapTurn();

        //check if game is over or not
        checkGameOver();

    }
    
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});

// adding event listner on newgame button
newGameBtn.addEventListener("click", initGame);

// New Code 

