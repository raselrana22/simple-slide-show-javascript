 /*This is the manual changing slide show 
   Create date: 22-02-2023 */ 

let slideIndex = 1;
showSlide(slideIndex);

 /* Change slide show by clicking next or prev button */
function changeImage(n) {
    showSlide(slideIndex = slideIndex + n);
}

/* Change slide show by clicking dot */
function currentSlide(n) {
  showSlide(slideIndex = n);
}


/* Slide show function */
function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlideShow");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }  // set image next to first one
    if (n < 1) { slideIndex = slides.length }  // set image first to last one
    
    // set default all image display none
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    // set default all dots are not active and not background change effect
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";  // Display single image
    dots[slideIndex - 1].className += " active"; // active a dot background effect
}