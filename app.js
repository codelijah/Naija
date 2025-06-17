// const toggler = document.querySelector(".custom-toggler");
// toggler.addEventListener("click", () => {
//   toggler.classList.toggle("active");
// });

const toggler = document.querySelector(".custom-toggler");
const navMenu = document.querySelector("#navmenu");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  navMenu.classList.toggle("open"); // You’ll style this
});

// logo scroll code
const marquee = document.getElementById("marquee");
let position = 0;

function scrollMarquee() {
  position -= 1; // Adjust speed
  marquee.style.transform = `translateX(${position}px)`;

  // Reset position to create a looping effect
  if (position < -marquee.scrollWidth) {
    position = window.innerWidth;
  }

  requestAnimationFrame(scrollMarquee);
}

scrollMarquee();

// Customer Review scroll code
const scrollContainer = document.getElementById("scrollContainer");
const prevIcon = document.getElementById("prevIcon");
const nextIcon = document.getElementById("nextIcon");

function getCardWidth() {
  // Get the first card element
  const firstCard = scrollContainer.querySelector(".col-12");
  return firstCard ? firstCard.offsetWidth + 25 : 300; // +16 for margin/gap
}

nextIcon.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: getCardWidth(), behavior: "smooth" });
});

prevIcon.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -getCardWidth(), behavior: "smooth" });
});

// Pricing toggle change
const toggleIcon = document.getElementById("toggleIcon");
const row1 = document.getElementById("rowWidth1"); // Monthly
const row2 = document.getElementById("rowWidth2"); // Yearly

const monthlyLabel = document.getElementById("monthlyLabel");
const yearlyLabel = document.getElementById("yearlyLabel");

toggleIcon.addEventListener("click", () => {
  const isMonthly = row1.style.display !== "none";

  if (isMonthly) {
    // Show Yearly
    row1.style.display = "none";
    row2.style.display = "flex";
    toggleIcon.classList.remove("bi-toggle2-off");
    toggleIcon.classList.add("bi-toggle2-on");

    // Highlight Yearly (white)
    yearlyLabel.classList.add("toggle-white-color");
    yearlyLabel.classList.remove("toggle-dark-color");

    // Monthly inactive (dark gray)
    monthlyLabel.classList.remove("toggle-white-color");
    monthlyLabel.classList.add("toggle-dark-color");
  } else {
    // Show Monthly
    row1.style.display = "flex";
    row2.style.display = "none";
    toggleIcon.classList.remove("bi-toggle2-on");
    toggleIcon.classList.add("bi-toggle2-off");

    // Highlight Monthly (white)
    monthlyLabel.classList.add("toggle-white-color");
    monthlyLabel.classList.remove("toggle-dark-color");

    // Yearly inactive (dark gray)
    yearlyLabel.classList.remove("toggle-white-color");
    yearlyLabel.classList.add("toggle-dark-color");
  }
});
