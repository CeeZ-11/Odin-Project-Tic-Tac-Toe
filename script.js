var gameBoard = (function () {
  const player = {};

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
  });

  const addPlayer = () => {
    const playerOne = document.getElementById("player-one");
    const playerTwo = document.getElementById("player-two");
    player.name = playerOne.value;
    player.symbol = "X";
    console.log(playerOne.value);
    console.log(playerTwo.value);
    console.log(player.name);
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
