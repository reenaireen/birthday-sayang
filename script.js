const welcome = document.getElementById("welcome");
const birthdayPage = document.getElementById("birthdayPage");
const openEnvelope = document.getElementById("openEnvelope");
const enterButton = document.getElementById("enterButton");

function enterBirthdaySurprise() {
  openEnvelope.classList.add("opening");
  enterButton.disabled = true;
  enterButton.textContent = "OPENING... ♡";

  window.setTimeout(() => {
    welcome.classList.add("fade-out");
    welcome.style.display = "none";
    birthdayPage.hidden = false;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 650);
}

openEnvelope.addEventListener("click", enterBirthdaySurprise);
enterButton.addEventListener("click", enterBirthdaySurprise);
