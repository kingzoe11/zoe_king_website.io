// Slideshow functionality
let slideIndexBreuer = 0;
let slideIndexSocha = 0;

function showSlidesBreuer() {
    let slides = document.querySelectorAll("#breuer-slideshow .slides");
    slides.forEach(slide => slide.style.display = "none");
    slideIndexBreuer++;
    if (slideIndexBreuer > slides.length) { slideIndexBreuer = 1 }
    slides[slideIndexBreuer - 1].style.display = "block";
    setTimeout(showSlidesBreuer, 3000); // Change image every 3 seconds
}

function showSlidesSocha() {
    let slides = document.querySelectorAll("#socha-slideshow .slides");
    slides.forEach(slide => slide.style.display = "none");
    slideIndexSocha++;
    if (slideIndexSocha > slides.length) { slideIndexSocha = 1 }
    slides[slideIndexSocha - 1].style.display = "block";
    setTimeout(showSlidesSocha, 3000); // Change image every 3 seconds
}

// Initialize slideshows
showSlidesBreuer();
showSlidesSocha();
