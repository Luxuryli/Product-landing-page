let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

showSlides();
function currentSlide(index) {
     slideIndex = index;
     showSlides();
}
function plusSlides(step) {
  
  if(step < 0) {
      slideIndex -= 2;
      
      if(slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
  }
  
  showSlides();
}
function showSlides() {
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove('active');
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add('active');
   if(timeoutId) {
      clearTimeout(timeoutId);
   }
  timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
}



// let slideIndexs = 0;
// let timeoutIds = null;
// const slidess = document.getElementsByClassName("mySlidess");
// const dotss = document.getElementsByClassName("dott");

// showSlides();
// function currentSlide(index) {
//      slideIndexs = index;
//      showSlides();
// }
// function plusSlides(step) {
  
//   if(step < 0) {
//       slideIndexs -= 2;
      
//       if(slideIndexs < 0) {
//         slideIndexs = slidess.length - 1;
//       }
//   }
  
//   showSlides();
// }
// function showSlides() {
//   for(let i = 0; i < slides.length; i++) {
//     slidess[i].style.display = "none";
//     dotss [i].classList.remove('active');
//   }
//   slideIndexs++;
//   if(slideIndexs > slidess.length) {
//     slideIndexs = 1
//   }
//   slidess[slideIndexs - 1].style.display = "block";
//   dotss[slideIndexs - 1].classList.add('active');
//    if(timeoutId) {
//       clearTimeout(timeoutId);
//    }
//   timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
// }


const form = document.querySelector('form');
const thankYouMessage = document.querySelector('#submission');
form.addEventListener('submit', (e) => {
  e.preventDefault();
submission.classList.add('show');
});

