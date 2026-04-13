
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

const cvDownloadLinks = document.querySelectorAll("[data-cv-download]");

if (cvDownloadLinks.length) {
  fetch("cv/Vuyo-Makasana-CV.pdf", { method: "HEAD" })
    .then(response => {
      if (!response.ok) {
        throw new Error("CV PDF not found");
      }
    })
    .catch(() => {
      cvDownloadLinks.forEach(link => {
        link.removeAttribute("download");
        link.setAttribute("href", "cv.html");
        link.setAttribute("title", "PDF not uploaded yet. Opening the online CV instead.");
      });
    });
}






