let Gameboard = {
    board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
};

let player = "X"
let winnerScense = document.getElementById("winner")
let winnerText = document.getElementById("winnerText")
let resetButton = document.getElementById("Retry")

resetButton.addEventListener("click", () => {
    winnerScense.style.display = "none"
    Gameboard.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    showGameBoard()
    console.log(Gameboard.board)
})


function showGameBoard() {
    let container = document.getElementById("container");
    for (let i in Gameboard.board) {
        for (let j in Gameboard.board[i]) {
            let celdaGato = document.createElement("div");
            celdaGato.classList.add("gatocube");
            celdaGato.innerHTML = Gameboard.board[i][j];
            container.appendChild(celdaGato);
            celdaGato.addEventListener("click", () => {
                if (Gameboard.board[i][j] == "") {
                    if (player !== "X") {
                        player = "X"
                    } else { player = "O" }
                    Gameboard.board[i][j] = player;
                    while (container.firstChild) {
                        container.removeChild(container.firstChild)
                    }
                    showGameBoard()
                    if (Gameboard.board[0][0] === "X" &&
                        Gameboard.board[1][1] === "X" &&
                        Gameboard.board[2][2] === "X" ||
                        Gameboard.board[2][0] === "X" &&
                        Gameboard.board[1][1] === "X" &&
                        Gameboard.board[0][2] === "X" ||
                        Gameboard.board[2][0] === "X" &&
                        Gameboard.board[1][1] === "X" &&
                        Gameboard.board[0][2] === "X" ||
                        Gameboard.board[0][0] === "X" &&
                        Gameboard.board[1][0] === "X" &&
                        Gameboard.board[2][0] === "X" ||
                        Gameboard.board[0][1] === "X" &&
                        Gameboard.board[1][1] === "X" &&
                        Gameboard.board[2][1] === "X" ||
                        Gameboard.board[0][2] === "X" &&
                        Gameboard.board[1][2] === "X" &&
                        Gameboard.board[2][2] === "X" ||
                        Gameboard.board[0][0] === "X" &&
                        Gameboard.board[0][1] === "X" &&
                        Gameboard.board[0][2] === "X" ||
                        Gameboard.board[1][0] === "X" &&
                        Gameboard.board[1][1] === "X" &&
                        Gameboard.board[1][2] === "X" ||
                        Gameboard.board[2][0] === "X" &&
                        Gameboard.board[2][1] === "X" &&
                        Gameboard.board[2][2] === "X"
                    ) {
                        console.log("Gano X!!!")
                        winnerText.textContent = "The winner is X!!"
                        winnerScense.style.display = "inline"

                    } else if (Gameboard.board[0][0] === "O" &&
                        Gameboard.board[1][1] === "O" &&
                        Gameboard.board[2][2] === "O" ||
                        Gameboard.board[2][0] === "O" &&
                        Gameboard.board[1][1] === "O" &&
                        Gameboard.board[0][2] === "O" ||
                        Gameboard.board[2][0] === "O" &&
                        Gameboard.board[1][1] === "O" &&
                        Gameboard.board[0][2] === "O" ||
                        Gameboard.board[0][0] === "O" &&
                        Gameboard.board[1][0] === "O" &&
                        Gameboard.board[2][0] === "O" ||
                        Gameboard.board[0][1] === "O" &&
                        Gameboard.board[1][1] === "O" &&
                        Gameboard.board[2][1] === "O" ||
                        Gameboard.board[0][2] === "O" &&
                        Gameboard.board[1][2] === "O" &&
                        Gameboard.board[2][2] === "O" ||
                        Gameboard.board[0][0] === "O" &&
                        Gameboard.board[0][1] === "O" &&
                        Gameboard.board[0][2] === "O" ||
                        Gameboard.board[1][0] === "O" &&
                        Gameboard.board[1][1] === "O" &&
                        Gameboard.board[1][2] === "O" ||
                        Gameboard.board[2][0] === "O" &&
                        Gameboard.board[2][1] === "O" &&
                        Gameboard.board[2][2] === "O") {
                        console.log("Gano O!!")
                        winnerText.textContent = "The winner is O!!"
                        winnerScense.style.display = "inline"

                    } else if (Gameboard.board[0][0] !== "" && Gameboard.board[0][1] !== "" && Gameboard.board[0][2] !== "" &&
                        Gameboard.board[1][0] !== "" && Gameboard.board[1][1] !== "" && Gameboard.board[1][2] !== "" &&
                        Gameboard.board[2][0] !== "" && Gameboard.board[2][1] !== "" && Gameboard.board[2][2] !== "") {
                        console.log("es un empate")
                        winnerText.textContent = "The game is a tie!!"
                        winnerScense.style.display = "inline"

                    }


                } else { }

            });
        }
    }
}

showGameBoard();