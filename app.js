let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let winnerElement = document.querySelector("#winner");

console.log(winner);

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    turnO = !turnO;
    if (!turnO) {
      box.innerHTML = "O";
    } else {
      box.innerHTML = "X";
    }
    box.disabled = true;

    checkWinner();
  });
});

function resetGame() {
  turnO = !turnO;
  enableBoxes();
  winnerElement.innerText = "";
}

function disableBoxes() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

function enableBoxes() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
}

function showWinner(winner) {
  console.log(winner);
  winnerElement.innerText = `Congratulations! ${winner} is the winner!`;
  disableBoxes();
}

function checkWinner() {
  for (let pattern of winPatterns) {
    let boxValue1 = boxes[pattern[0]].innerText;
    let boxValue2 = boxes[pattern[1]].innerText;
    let boxValue3 = boxes[pattern[2]].innerText;

    if (boxValue1 !== "" && boxValue2 !== "" && boxValue3 !== "") {
      if (
        boxValue1 == boxValue2 &&
        boxValue2 == boxValue3 &&
        boxValue3 == boxValue1
      ) {
        showWinner(boxValue1);
      }
    }
  }
}
