const cartLink = document.querySelector(".button-to-cart");
const cartPopup = document.querySelector(".modal-checkout");
const cartClose = cartPopup.querySelector(".modal-close");
const cartButtonCheckout = cartPopup.querySelector(".button-modal-checkout");

cartLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-show");
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

cartButtonCheckout.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});