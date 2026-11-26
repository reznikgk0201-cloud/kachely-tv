// Укажи Twitch-ник канала латиницей в кавычках.
const TWITCH_CHANNEL = "kachelytv";

document.getElementById("year").textContent = new Date().getFullYear();

const channel = TWITCH_CHANNEL.trim();
const player = document.getElementById("twitch-player");
const placeholder = document.getElementById("player-placeholder");

if (channel && channel !== "YOUR_TWITCH_CHANNEL") {
  const parentDomain = window.location.hostname;
  player.src = `https://player.twitch.tv/?channel=${encodeURIComponent(channel)}&parent=${encodeURIComponent(parentDomain)}&autoplay=false`;
  player.style.display = "block";
  placeholder.style.display = "none";
}
