// Title name scroll animation
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const name = document.getElementById("name");

  const maxScroll = 200;
  const scale = Math.min(scrollY / maxScroll, 1);

  const newSize = 5 - scale * 2.5;

  name.style.fontSize = `${newSize}rem`;
});

// Add animation when section scrolls into view
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
});
