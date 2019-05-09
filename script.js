// CONTACT FORM
function contactFunction() {
   document.getElementById("contact").classList.toggle("contact-show");
   document.getElementById("contactForm").classList.toggle("contact-content");
   document.getElementById("navHide").classList.toggle("nav-hide");
}



// PORTFOLIO CAROUSEL
// setting slideIndex to 1 = first image
var slideIndex = 1;
// show first image
showDivs(slideIndex);

// when buttons are clicked, show next (add 1) or previous img (subtract 1)
function plusDivs(n) {
  showDivs(slideIndex += n);
}

// the indicator will take user to connnected img when clicked
function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  var indicator = document.getElementsByClassName("indicator");
  // if current img is the last one, start slides over on click to right
  if (n > x.length) {
    slideIndex = 1;
  }
  // if current img is the first, show last img when left button is clicked
  if (n < 1) {
    slideIndex = x.length;
  }
  // to always hide the other images
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // remove fill class (white bg) from all indicators
  for (i = 0; i < indicator.length; i++) {
    indicator[i].className = indicator[i].className.replace(" fill", "");
  }
  // to show current image only
  x[slideIndex-1].style.display = "block";
  // to fill the current indicator
  indicator[slideIndex-1].className += " fill";
}
