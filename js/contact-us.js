const contactUsButton = document.querySelector(".contacts button");
const contactUsPopup = document.querySelector(".modal-contact-us");
const contactUsClose = contactUsPopup.querySelector(".modal-close");
const contactUsForm = contactUsPopup.querySelector(".contact-us-form");
const contactUsName = contactUsPopup.querySelector(".name-contact");
const contactUsEmail = contactUsPopup.querySelector(".email-contact");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("contactUs");
} catch (err) {
  isStorageSupport = false;
}

contactUsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactUsPopup.classList.add("modal-show");

    if (storage) {
    contactUsName.value = storage;
  
 contactUsEmail.focus();}
  else {
    contactUsName.focus();
  }
});

contactUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactUsPopup.classList.remove("modal-show");
  contactUsPopup.classList.remove("modal-error");
});

contactUsForm.addEventListener("submit", function (evt) {
	if (!contactUsName.value || !contactUsEmail.value) {
    evt.preventDefault();
     contactUsPopup.classList.remove("modal-error");
    
    contactUsPopup.classList.add("modal-error");
}	else {
	if (isStorageSupport) {
    localStorage.setItem("contactUs", contactUsName.value);
}
}
}
);

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactUsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactUs.classList.remove("modal-show");
      contactUsPopup.classList.remove("modal-error");
    }
  }
});