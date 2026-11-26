
const TWITCH_CHANNEL = "kachelytv";

const player = document.getElementById("twitch-player");
const placeholder = document.getElementById("player-placeholder");

if (player) {
  const parentDomain = window.location.hostname;

  player.src =
    `https://player.twitch.tv/?channel=${TWITCH_CHANNEL}` +
    `&parent=${encodeURIComponent(parentDomain)}` +
    `&autoplay=false&muted=false`;

  player.style.display = "block";

  if (placeholder) {
    placeholder.style.display = "none";
  }
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const menuButton = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });
}
