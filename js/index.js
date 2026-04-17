let index = 0;

function showSlide() {
  const slides = document.getElementById("slides");
  const width = document.querySelector(".slide-container").clientWidth;

  slides.style.transform = `translateX(-${index * width}px)`;
}

function nextSlide() {
  const total = document.querySelectorAll("#slides img").length;

  if (index < total - 1) {
    index++;   // only go forward
  }

  showSlide();
}

function prevSlide() {
  if (index > 0) {
    index--;   // only go backward
  }

  showSlide();
}