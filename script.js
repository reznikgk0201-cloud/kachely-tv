const TWITCH_CHANNEL = "kachelytv";

// Twitch требует указать домен сайта в параметре parent.
// hostname берётся автоматически, поэтому подходит и адрес Render, и подключённый домен.
const player = document.getElementById("twitch-player");
const placeholder = document.getElementById("player-placeholder");

if (player) {
  const parentDomain = window.location.hostname;
  player.src = `https://player.twitch.tv/?channel=${encodeURIComponent(TWITCH_CHANNEL)}&parent=${encodeURIComponent(parentDomain)}&autoplay=false&muted=false`;
  player.addEventListener("load", () => {
    player.style.display = "block";
    if (placeholder) placeholder.style.display = "none";
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }));
}
