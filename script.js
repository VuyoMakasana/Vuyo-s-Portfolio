
// Select elements (guard: only run if nav exists on this page)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  // Toggle menu on click
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
  });

  // Close menu when a link is clicked (mobile UX)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("active");
    });
  });
}






