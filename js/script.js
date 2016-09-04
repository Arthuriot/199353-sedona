
var link = document.querySelector(".search-btn");
var popup = document.querySelector(".booking-form");
var datein = popup.querySelector("[name = datein]");
var dateout = popup.querySelector("[name = dateout]");

link.addEventListener("click", function(event) {
  if (popup.classList.contains("booking-form-show")) {
    event.preventDefault();
    popup.classList.remove("booking-form-show");
    popup.classList.remove("booking-form-error");
  }
  else {
    event.preventDefault();
    popup.classList.add("booking-form-show");
  }
  datein.focus();
});

popup.addEventListener("submit", function(event) {
  if (!datein.value || !dateout.value || !adult.value || !kids.value) {
    event.preventDefault();
    popup.classList.remove("booking-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("booking-form-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("booking-form-show")) {
      popup.classList.remove("booking-form-show");
      popup.classList.remove("booking-form-error");
    }
  }
});
