// ===============================
// SCROLL REVEAL ANIMATIONS
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
  });
});

/* =====================
   IMAGE LIGHTBOX
===================== */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", () => {
    if (!img.closest(".logo-img")) {
      lightboxImg.src = img.src;
      lightbox.classList.add("active");
    }
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});
