document.getElementById("year").textContent = new Date().getFullYear();
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
document.addEventListener("pointermove", e => {
  const glow = document.querySelector(".cursor-glow");
  glow.style.left = (e.clientX - 150) + "px";
  glow.style.top = (e.clientY - 150) + "px";
});