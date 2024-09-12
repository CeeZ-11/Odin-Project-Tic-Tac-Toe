var gameBoard = (function () {
  const player = {
    one: {},
    two: {},
  };
  var round = 1;
  const turnDisplay = document.getElementById("turn");
  const dialog = document.querySelector("dialog");
  const gameInitiate = document.getElementById("startGame");

  const closeModal = () => {
    dialog.close();
  };

  gameInitiate.addEventListener("click", () => {
    dialog.classList.add("inactive");
    closeModal();
    addPlayer();
    createGameBoard();
    renderGameBoard();
    displayPlayerTurn();
    displayRound();
    displayPlayerScore();
  });

  function renderGameBoard() {
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        if (!cell.classList.contains("active")) {
          cell.classList.add("active");
          displaySymbol(cell);
          changePlayerTurn();
          checkWin();
        }
      });
    });
  }

  const checkWin = () => {
    const cells = document.querySelectorAll(".cell");
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winningCombinations.forEach((combination) => {
      const [a, b, c] = combination;
      if (
        cells[a].querySelector("button").innerText === player.one.symbol &&
        cells[b].querySelector("button").innerText === player.one.symbol &&
        cells[c].querySelector("button").innerText === player.one.symbol
      ) {
        alert(`${player.one.name} wins!`); // change to dialog box
        resetGameboard();
      } else if (
        cells[a].querySelector("button").innerText === player.two.symbol &&
        cells[b].querySelector("button").innerText === player.two.symbol &&
        cells[c].querySelector("button").innerText === player.two.symbol
      ) {
        alert(`${player.two.name} wins!`); // change to dialog box
        resetGameboard();
      }
    });
    const allCellsFilled = Array.from(cells).every(
      (cell) => cell.querySelector("button").innerText !== ""
    );
    if (allCellsFilled) {
      alert("It's a draw!"); // change to dialog box
      resetGameboard();
    }
  };

  const resetGameboard = () => {
    displayRound();
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.querySelector("button").innerText = "";
      cell.classList.remove("active");
    });
  };

  const displayRound = () => {
    const roundDisplay = document.getElementById("round");
    roundDisplay.innerText = `Round ${round}`;
    round++;
  };

  const displaySymbol = (cell) => {
    if (turnDisplay.innerText === `${player.one.name}'s turn`) {
      cell.querySelector("button").innerText = player.one.symbol;
    } else {
      cell.querySelector("button").innerText = player.two.symbol;
    }
  };

  const displayPlayerTurn = () => {
    turnDisplay.innerText = `${player.one.name}'s turn`;
  };

  const displayPlayerScore = () => {
    const playerOneScore = document.getElementById("player1-score");
    const playerTwoScore = document.getElementById("player2-score");
    playerOneScore.innerText = `${player.one.score}`;
    playerTwoScore.innerText = `${player.two.score}`;
  };

  const changePlayerTurn = () => {
    if (turnDisplay.innerText === `${player.one.name}'s turn`) {
      turnDisplay.innerText = `${player.two.name}'s turn`;
    } else {
      turnDisplay.innerText = `${player.one.name}'s turn`;
    }
  };

  const addPlayer = () => {
    const playerOne = document.getElementById("player-one");
    const playerTwo = document.getElementById("player-two");
    player.one.name = playerOne.value;
    player.one.symbol = "X";
    player.one.score = 0;
    player.two.name = playerTwo.value;
    player.two.symbol = "O";
    player.two.score = 0;
    console.log(playerOne.value);
    console.log(playerTwo.value);
    console.log(player.one);
    console.log(player.two);
    console.log(player);
  };

  const createGameBoard = () => {
    const board = document.getElementById("game-board");

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      const cellButton = document.createElement("button");
      cell.classList.add("cell");
      cellButton.classList.add("cell-button");
      cell.id = `cell-${i + 1}`;
      board.appendChild(cell);
      cell.appendChild(cellButton);
    }
  };
})();
