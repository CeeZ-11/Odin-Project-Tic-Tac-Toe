var gameBoard = (function () {
  const player = {
    one: {},
    two: {},
  };
  var round = 0;
  const turnDisplay = document.getElementById("turn");
  const gameInitiate = document.getElementById("startGame");
  const nextRound = document.getElementById("nextRound");
  const resetRound = document.getElementById("resetRound");
  const resetGame = document.getElementById("resetGame");

  const createPlayerModalToggle = () => {
    const createPlayerModal = document.getElementById("createPlayer");
    createPlayerModal.classList.toggle("inactive");
  };

  const displayModalRoundWinnerToggle = (rWinner) => {
    const roundWinner = document.getElementById("roundWinner");
    const displayRoundWinner = document.getElementById("displayRoundWinner");

    if (rWinner === player.one.name || rWinner === player.two.name) {
      roundWinner.innerText = `${rWinner} wins the Round!`;
    } else {
      roundWinner.innerText = "It's a tie!";
    }
    displayRoundWinner.classList.remove("inactive");
    toggleGameboard();
    displayRound();
  };

  resetRound.addEventListener("click", () => {
    resetGameboard();
  });

  nextRound.addEventListener("click", () => {
    resetGameboard();
    displayPlayerTurn();
    displayPlayerScore();
    toggleGameboard();
    displayRoundWinner.classList.add("inactive");
  });

  const displayGameWinner = (gameWinner) => {
    const gWinner = document.getElementById("gameWinner");
    const displayGameWinner = document.getElementById("displayGameWinner");

    gWinner.innerText = `${gameWinner} wins the Game!`;

    displayGameWinner.classList.remove("inactive");
  };

  const toggleGameboard = () => {
    const board = document.getElementById("game-board");
    if (board.style.pointerEvents === "none") {
      board.style.pointerEvents = "auto"; // Enable clicks
    } else {
      board.style.pointerEvents = "none"; // Disable clicks
    }
  };

  gameInitiate.addEventListener("click", () => {
    createPlayerModalToggle();
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
        player.one.score++;
        if (player.one.score === 3) {
          displayGameWinner(player.one.name);
        } else if (player.one.score < 3) {
          displayModalRoundWinnerToggle(player.one.name);
        }
      } else if (
        cells[a].querySelector("button").innerText === player.two.symbol &&
        cells[b].querySelector("button").innerText === player.two.symbol &&
        cells[c].querySelector("button").innerText === player.two.symbol
      ) {
        player.two.score++;
        if (player.two.score === 3) {
          displayGameWinner(player.two.name);
        } else if (player.two.score < 3) {
          displayModalRoundWinnerToggle(player.two.name);
        }
      }
    });
    const allCellsFilled = Array.from(cells).every(
      (cell) => cell.querySelector("button").innerText !== ""
    );
    if (allCellsFilled) {
      displayModalRoundWinnerToggle();
    }
  };

  const resetGameboard = () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.querySelector("button").innerText = "";
      cell.classList.remove("active");
    });
  };

  const displayRound = () => {
    round++;
    const roundDisplay = document.getElementById("round");
    roundDisplay.innerText = `Round ${round}`;
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
