// JavaScript to hide the loading screen after 5 seconds
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      hideLoadingScreen();
    }, 3000);
  });
  
  function hideLoadingScreen() {
    var loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.opacity = 0; // Set the opacity to 0 for fade-out effect
    loadingScreen.style.transform = "scale(1)"; // Set the scale to zoom-out effect
  
    // After the animation completes, remove the loading screen from the DOM
    setTimeout(function() {
      loadingScreen.remove();
    }, 3000); // Wait for the duration of the fade-out and zoom-out transition (1s) before removing the element
  }
  