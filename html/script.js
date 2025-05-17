const backgroundDiv = document.getElementById("background");
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
const musicIcon = document.getElementById("music-icon");

const images = [
    "images/background1.png",
    "images/background2.png",
    "images/background3.png",
    "images/background4.png",
    "images/background5.png",
    "images/background6.png",
    "images/background7.png",
    "images/background8.png",
    "images/background9.png",
    "images/background10.png"
];

let index = 0;
let isPlaying = true;

function changeBackground() {
    backgroundDiv.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicIcon.classList.remove("fa-volume-up");
        musicIcon.classList.add("fa-volume-mute");
    } else {
        music.play();
        musicIcon.classList.remove("fa-volume-mute");
        musicIcon.classList.add("fa-volume-up");
    }
    isPlaying = !isPlaying;
}

function backgroundLoop() {
    changeBackground();
    setTimeout(backgroundLoop, 5000);
}

backgroundLoop();

musicToggle.addEventListener("click", toggleMusic);

document.addEventListener("keyup", function(e) {
    if (e.code === "Space") {
        e.preventDefault();
        toggleMusic();
    }
});