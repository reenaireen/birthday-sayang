
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
        "#DCEEFF",
        "#B9D9F5",
        "#86B8DF",
        "#5689B5",
        "#FFFFFF",
        "#E5F2FF",
        "#C5DDF3",
        "#A9CDEB"
    ];

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("span");

        piece.classList.add("confetti");

        piece.style.left = Math.random() * 100 + "%";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        piece.style.borderRadius =
            Math.random() > 0.5 ? "50%" : "2px";

        confettiContainer.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 7000);

    }

}


// ======================================
// 4. ENTER BIRTHDAY SURPRISE
// ======================================

async function enterBirthdaySurprise() {

    if (entered) return;

    entered = true;

    // Disable both buttons
    openEnvelope.disabled = true;
    enterButton.disabled = true;

    // Open envelope animation
    openEnvelope.classList.add("opening");

    // Wait for envelope animation
    window.setTimeout(async () => {

        // Hide welcome page
        welcome.style.display = "none";

        // Show birthday page
        birthdayPage.hidden = false;

        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });

        // Baby blue confetti
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
// 5. ENVELOPE CLICK EVENT
// ======================================

openEnvelope.addEventListener(
    "click",
    enterBirthdaySurprise
);


// ======================================
// 6. ENTER BUTTON CLICK EVENT
// ======================================

enterButton.addEventListener(
    "click",
    enterBirthdaySurprise
);


// ======================================
// 7. MUSIC ON / OFF BUTTON
// ======================================

musicToggle.addEventListener("click", async () => {

    if (bgMusic.paused) {

        try {

            await bgMusic.play();

            musicToggle.textContent = "♫ Music ON";

        } catch (error) {

            console.log("Unable to play music:", error);

            musicToggle.textContent = "♫ Play Music";

        }

    } else {

        bgMusic.pause();

        musicToggle.textContent = "♫ Music OFF";

    }

});
