const openBtn = document.querySelector(".open-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".modal-close");

// OPEN MODAL
openBtn.addEventListener("click", handleOpenModal);
function handleOpenModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}

// CLOSE MODAL WHEN CLICK AT CLOSE-BTN AND CLICK OUTSIDE
document.addEventListener("click", handleCloseModal);
function handleCloseModal(e) {
  console.log(e.target);
  if (e.target.matches(".modal") || e.target.matches(".modal-close")) {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
}
