// JavaScript to hide the loading screen after  seconds
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    hideLoadingScreen();
  }, 3000);
});

function hideLoadingScreen() {
  var loader = document.getElementById("preloader");
  loader.classList.add("scale-down-bottom");

  var content = document.getElementById("main");
  content.style.display = "block";

  // After the animation completes, remove the loading screen from the DOM
  setTimeout(function () {
    loader.remove();
  }, 3000); // Wait for the duration of the fade-out and zoom-out transition (1s) before removing the element
}
