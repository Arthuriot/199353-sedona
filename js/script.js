
var link = document.querySelector(".search-btn");
var popup = document.querySelector(".booking-form");

link.addEventListener("click", function(event) {
if (popup.classList.contains("booking-form-show")) {
event.preventDefault();
popup.classList.remove("booking-form-show");
}
else {
event.preventDefault();
popup.classList.add("booking-form-show");
}

});
