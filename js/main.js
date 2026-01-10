// ===============================
// SCROLL REVEAL ANIMATIONS
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // reveal once
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});

// ===============================
// IMAGE LIGHTBOX
// ===============================

// Ensure your HTML has this structure somewhere (usually at the end of body):
// <div id="lightbox" class="lightbox">
//   <button class="lightbox-close">&times;</button>
//   <img id="lightbox-img" src="" alt="Expanded image">
// </div>

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

// Open lightbox when any image (except logo) is clicked
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", () => {
    if (!img.classList.contains("logo-img")) {
      lightboxImg.src = img.src;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden"; // prevent background scroll
    }
  });
});

// Close lightbox when clicking the close button
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// ===============================
// OPTIONAL: Close lightbox with ESC key
// ===============================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("active")) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});
