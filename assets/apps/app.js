const aboutMe = document.querySelectorAll(".sub-title");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const textBody = document.querySelectorAll(".text-bodyModal");
const closeHome = document.querySelectorAll("#close-modal-btn");
// This is where we want to open the modal
aboutMe[0].addEventListener("click", () => {
  modal.style.display = "block";
  backdrop.style.display = "block";
});

closeHome[0].addEventListener("click", () => {
  modal.style.display = "none";
  backdrop.style.display = "none";
});
