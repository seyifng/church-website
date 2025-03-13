document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const leftBtn = document.getElementById("left");
  const rightBtn = document.getElementById("right");
  const cardWidth = document.querySelector(".card").offsetWidth + 25; // Card width + gap

  rightBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
  });

  leftBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });

  // Auto-hide buttons when reaching the start or end
  function updateButtons() {
      leftBtn.style.display = carousel.scrollLeft > 0 ? "block" : "none";
      rightBtn.style.display =
          carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth
              ? "block"
              : "none";
  }

  carousel.addEventListener("scroll", updateButtons);
  updateButtons(); // Initial check
});
