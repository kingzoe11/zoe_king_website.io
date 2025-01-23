window.addEventListener("scroll", function () {
  const titleBox = document.querySelector('.title-box');
  //const body = document.body;
  const directoryBox = document.querySelector(".directory-box");

  // When the page is scrolled more than 50px
  if (window.scrollY > 50) {
      //body.classList.add("scrolled"); // Add 'scrolled' class to body
      titleBox.style.transform = "translateY(-100%)"; // Slide the title box up
  } else {
      //body.classList.remove("scrolled"); // Remove 'scrolled' class
      titleBox.style.transform = "translateY(0)"; // Reset title box to its original position
  }

  // When the page is scrolled more than 100px
  if (window.scrollY > 15000) { 
      directoryBox.style.transform = "translateY(0)";  // Slide the directory box in
  } else {
      directoryBox.style.transform = "translateY(100%)";  // Keep the directory box hidden
  }
});


// Slideshow Functionality
const slideshowImages = document.querySelectorAll('.slideshow img');
let currentImageIndex = 0;

function showNextImage() {
  slideshowImages[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
  slideshowImages[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 3000);
