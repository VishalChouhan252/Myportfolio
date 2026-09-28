// Typing Effect for title
const title = document.getElementById("title");
const text = "Vishal Chouhan";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    title.textContent = text.slice(0, index + 1);
    index++;
    setTimeout(typeEffect, 120);
  }
}
window.onload = typeEffect;

// Contact Button
const btn = document.getElementById("contactBtn");
btn.addEventListener("click", () => {
  alert("Thank you for visiting my portfolio! 😊\nYou can contact me via Email or LinkedIn.");
});

// Smooth scroll highlight (optional)
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
