var game = (function () {
  const dialog = document.querySelector("dialog");
  const gameInitiate = document.getElementById("startGame"); // Button with id "Submit"
  const playerOne = document.getElementById("player1");
  const playerTwo = document.getElementById("player2");

  const closeModal = () => {
    dialog.close();
  };

  gameInitiate.addEventListener("click", () => {
    dialog.classList.add("inactive");
    closeModal();
  });
})();
