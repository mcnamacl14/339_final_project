
// for the slideshow thing

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous rols
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my_slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//end of slideshow thing

let navs = document.getElementsByClassName(".navigation");
let pages = document.querySelectorAll('.pages .text')

for (var index = 0; index < pages.length; index++) {
    console.log("adding mouse over")
    console.log(pages[index])
    pages[index].addEventListener('mouseenter', function(){
        document.querySelector('.text').style.color = "black"
    })
}
	
