const openButton = document.getElementById("openPopup");
const closeButton = document.getElementById("closePopup");
const imageContainer = document.getElementById("imageContainer");
const imageContainer2 = document.getElementById("imageContainer2");
const popup = document.getElementById("popup");

openButton.addEventListener("click", () => {
  popup.style.display = "block";
  document.body.style.overflow = "hidden"; // Disable scrolling
});

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
  document.body.style.overflow = "auto"; // Enable scrolling
});

imageContainer.addEventListener("click", () => {
  popup.style.display = "block";
  document.body.style.overflow = "hidden"; // Disable scrolling
});
imageContainer2.addEventListener("click", () => {
  popup.style.display = "block";
  document.body.style.overflow = "hidden"; // Disable scrolling
});
