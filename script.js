let xTurn = true;

function changeMark(buttonId) {
    let button = document.getElementById(buttonId);
    
    if (!button.innerHTML) {
        if (xTurn) {
            button.innerHTML = "X";
            button.classList.add("x");
        } else {
            button.innerHTML = "O";
            button.classList.add("o");
        }
        
        xTurn = !xTurn;
        checkWin();
    }
}

function resetGame() {
    let buttons = document.querySelectorAll("button");
    
    buttons.forEach(button => {
        if (button.id !== "reset") {
            button.innerHTML = "";
            button.classList.remove("x", "o");
        }
    });

    document.getElementById("result").innerText = "";
    xTurn = true;
}

function checkWin() {
    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;
    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;

    let result = document.getElementById("result");

    let winningCombos = [
        [a1, b1, c1], [a2, b2, c2], [a3, b3, c3],  // Rows
        [a1, a2, a3], [b1, b2, b3], [c1, c2, c3],  // Columns
        [a1, b2, c3], [c1, b2, a3]                 // Diagonals
    ];

    for (let combo of winningCombos) {
        if (combo[0] !== "" && combo[0] === combo[1] && combo[1] === combo[2]) {
            result.innerText = `${combo[0]} Wins!`;
            return;
        }
    }

    let allFilled = [a1, b1, c1, a2, b2, c2, a3, b3, c3].every(cell => cell !== "");
    if (allFilled) {
        result.innerText = "It's a Draw!";
    }
}
