let board;
let currentPlayer;

function startGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    renderBoard();
}

function renderBoard() {
    const boardDiv = document.getElementById("board");
    boardDiv.innerHTML = "";
    board.forEach((cell, index) => {
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.textContent = cell;
        cellDiv.addEventListener("click", () => makeMove(index));
        boardDiv.appendChild(cellDiv);
    });
}

function makeMove(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        renderBoard();
        checkWinner();
    }
}

function checkWinner() {
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`${board[a]} wins!`);
            startGame();
            break;
        }
    }
}

startGame();
