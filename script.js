var gameBoard = (function () {
  const player = {
    one: {},
    two: {},
  };
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
  });

  function renderGameBoard() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        if (!cell.classList.contains("active")) {
          cell.classList.add("active");
          displaySymbol();
          changeDisplayPlayerTurn();
          //checkWin();
        }
      });
    });
  }

  const displaySymbol = () => {
    const activeCell = document.querySelector(".active");
    activeCell.querySelector("button").innerText = player.one.symbol;
  };

  const displayPlayerTurn = () => {
    turnDisplay.innerText = `${player.one.name}'s turn`;
  };

  const changeDisplayPlayerTurn = () => {
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
    player.two.name = playerTwo.value;
    player.two.symbol = "Y";
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
