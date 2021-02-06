const toggleSwitch = document.getElementById("toggle-checkbox");
const nav = document.querySelector(".nav");
const toggleIcon = document.getElementById("toggle-icon");
console.log(toggleIcon);

const switchTheme = (event) => {
  const { checked } = event.target;
  if (checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
};

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

toggleSwitch.addEventListener("change", switchTheme);

// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].classList.replace("fa-sun", "fa-moon");
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].classList.replace("fa-moon", "fa-sun");
}

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}
