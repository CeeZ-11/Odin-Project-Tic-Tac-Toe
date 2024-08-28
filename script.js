const showModal = () => {
  dialog.showModal();
};

const dialog = document.querySelector("dialog");
const gameStart = document.getElementById("start-game"); // Button with id "Submit"

showModal();
gameStart.addEventListener("click", () => {
  dialog.close();
  dialog.classList.remove("inactive");
});
