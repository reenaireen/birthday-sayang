
// ======================================
// 1. GET HTML ELEMENTS
// ======================================

const welcome = document.getElementById("welcome");
const birthdayPage = document.getElementById("birthdayPage");

const openEnvelope = document.getElementById("openEnvelope");
const enterButton = document.getElementById("enterButton");

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

const confettiContainer = document.getElementById("confetti-container");


// ======================================
// 2. PREVENT DOUBLE CLICK
// ======================================

let entered = false;


// ======================================
// 3. CONFETTI ANIMATION - BABY BLUE
// ======================================

function createConfetti() {

    const colors = [
        "#DCEEFF",  // Baby blue
        "#B9D9F5",  // Soft blue
        "#86B8DF",  // Pastel blue
        "#5689B5",  // Deep baby blue
        "#FFFFFF",  // White
        "#E5F2FF",  // Ice blue
        "#C5DDF3",  // Powder blue
        "#A9CDEB"   // Sky blue
    ];

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("span");

        piece.classList.add("confetti");

        // Random horizontal position
        piece.style.left = Math.random() * 100 + "%";

        // Random baby blue colour
        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        // Random animation speed
        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        // Random shape
        piece.style.borderRadius =
            Math.random() > 0.5 ? "50%" : "2px";

        confettiContainer.appendChild(piece);

        // Remove confetti after animation
        setTimeout(() => {
            piece.remove();
        }, 7000);

    }

}


// ======================================
// 4. ENTER BIRTHDAY SURPRISE
// ======================================

async function enterBirthdaySurprise() {

    // Prevent clicking multiple times
    if (entered) return;

    entered = true;

    // Open envelope animation
    openEnvelope.classList.add("opening");

    enterButton.disabled = true;

    enterButton.textContent = "BUKA KEJUTANNYA... ♡";


    // Wait for envelope animation
    window.setTimeout(async () => {

        // Hide welcome page
        welcome.style.display = "none";

        // Show birthday page
        birthdayPage.hidden = false;

        // Start from the top
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });


        // Start baby blue confetti
        createConfetti();


        // Start background music
        bgMusic.volume = 0.35;

        try {

            await bgMusic.play();

            musicToggle.textContent = "♫ Music ON";

        } catch (error) {

            console.log("Music could not autoplay:", error);

            musicToggle.textContent = "♫ Play Music";

        }

    }, 650);

}


// ======================================
// 5. ENVELOPE AND ENTER BUTTON
// ======================================

openEnvelope.addEventListener(
    "click",
    enterBirthdaySurprise
);

enterButton.addEventListener(
    "click",
    enterBirthdaySurprise
);


// ======================================
// 6. MUSIC ON / OFF BUTTON
// ======================================

musicToggle.addEventListener("click", async () => {

    if (bgMusic.paused) {

        try {

            await bgMusic.play();

            musicToggle.textContent = "♫ Music ON";

        } catch (error) {

            console.log("Unable to play music:", error);

        }

    } else {

        bgMusic.pause();

        musicToggle.textContent = "♫ Music OFF";

    }

});
