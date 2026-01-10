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
(() => {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return; // do nothing if no lightbox in HTML
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  // Open lightbox for all images except logos
  document.querySelectorAll("img").forEach(img => {
    if (!img.classList.contains("logo-img")) {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden"; // prevent background scroll
      });
    }
  });

  // Close lightbox
  const closeLightbox = () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
})();
