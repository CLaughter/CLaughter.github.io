const oMBtn = document.querySelector("#open-modal-btn");
const cMBtn = document.querySelector(".close-button");
const cModBtn = document.querySelector("#close-modal-btn");
const mod = document.querySelector("#modal");
const oL = document.querySelector("#overlay");

oMBtn.addEventListener("click", () => {
  mod.classList.add("open");
  oL.classList.add("open");
});

cMBtn.addEventListener("click", closeModal);
cModBtn.addEventListener("click", closeModal);

oL.addEventListener("click", closeModal);

function closeModal() {
  mod.classList.remove("open");
  oL.classList.remove("open");
}
