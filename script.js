const themeSwitchBtn = document.querySelector(".toggle__switch-btn");
const themeModeText = document.querySelector(".toggle__switch-text");
const sunIcon = document.querySelector(".toggle__switch-icon--sun");
const moonIcon = document.querySelector(".toggle__switch-icon--moon");
const aboutImgs = document.querySelectorAll(".about__img");

// Mine is beter simplify code
let mode;
// helper function

function toggleHiddenClass(target) {
  target.classList.toggle("hidden");
}

function toggleIcons() {
  toggleHiddenClass(sunIcon);
  toggleHiddenClass(moonIcon);
}

function toggleImgs() {
  let change = ["dark", "light"];

  if (mode !== "light") change = ["light", "dark"];

  [...aboutImgs].forEach((mov) => {
    const src = mov.getAttribute("src").replace(...change);
    mov.setAttribute("src", src);
  });
}
function toggleSwitchBtn() {
  themeSwitchBtn.classList.toggle("toggle__switch-btn--darkMode");
}

function saveThemeMode() {
  console.log(mode);
  localStorage.setItem("theme", mode);
}

function toggleComponents() {
  toggleSwitchBtn();
  toggleIcons();
  toggleImgs();
}

function toggleTheme() {
  // setting mode and setting text
  const html = document.documentElement;
  html.classList.toggle("darkMode");
  if (html.classList.contains("darkMode")) mode = "dark";
  else mode = "light";
  themeModeText.textContent = mode === "dark" ? "Dark Mode" : "Light Mode";

  toggleComponents();
  saveThemeMode();
}

function controlTheme() {
  // dark --> white || white --> dark
  themeSwitchBtn.addEventListener("click", toggleTheme);
}

function setInitialState() {
  const theme = localStorage.getItem("theme");
  const html = document.querySelector("html");
  themeModeText.textContent = theme === "dark" ? "Dark Mode" : "Light Mode";

  // default is white bro
  if (theme === "light") {
    html.classList.remove("darkMode");
    return;
  }

  html.classList.add("darkMode");
  toggleSwitchBtn();
  toggleComponents();
}

function init() {
  setInitialState();
  controlTheme();
}

window.addEventListener("load", init);
