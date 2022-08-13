// Navigation Bar responsiveness
const navBar = document.querySelector(".navbar");
const menuBar = document.querySelector(".icon-menu");

menuBar.addEventListener("click", function () {
  if (navBar.className === "navbar") {
    navBar.className = "responsive";
  } else if (navBar.className === "responsive") {
    navBar.className = "navbar";
  }
});
// End of Navigation Bar responsiveness

// Navigation Bar Links Clicked
const homeEl = document.querySelector(".home-el");
const servicesEl = document.querySelector(".services-el");
const aboutEl = document.querySelector(".about-el");
const skillsEl = document.querySelector(".skills-el");
const portfolioEl = document.querySelector(".portfolio-el");
const contactEl = document.querySelector(".contact-el");

servicesEl.addEventListener("click", function () {
  if (servicesEl.className === "services-el") {
    homeEl.classList.add("home-el-not");
    servicesEl.classList.add("link-el-clicked");
    aboutEl.classList.remove("link-el-clicked");
    skillsEl.classList.remove("link-el-clicked");
    portfolioEl.classList.remove("link-el-clicked");
    contactEl.classList.remove("link-el-clicked");
  }
  navBar.className = "navbar";
});

aboutEl.addEventListener("click", function () {
  if (aboutEl.className === "about-el") {
    homeEl.classList.add("home-el-not");
    servicesEl.classList.remove("link-el-clicked");
    aboutEl.classList.add("link-el-clicked");
    skillsEl.classList.remove("link-el-clicked");
    portfolioEl.classList.remove("link-el-clicked");
    contactEl.classList.remove("link-el-clicked");
  }
  navBar.className = "navbar";
});

skillsEl.addEventListener("click", function () {
  if (skillsEl.className === "skills-el") {
    homeEl.classList.add("home-el-not");
    servicesEl.classList.remove("link-el-clicked");
    aboutEl.classList.remove("link-el-clicked");
    skillsEl.classList.add("link-el-clicked");
    portfolioEl.classList.remove("link-el-clicked");
    contactEl.classList.remove("link-el-clicked");
  }
  navBar.className = "navbar";
});

portfolioEl.addEventListener("click", function () {
  if (portfolioEl.className === "portfolio-el") {
    homeEl.classList.add("home-el-not");
    servicesEl.classList.remove("link-el-clicked");
    aboutEl.classList.remove("link-el-clicked");
    skillsEl.classList.remove("link-el-clicked");
    portfolioEl.classList.add("link-el-clicked");
    contactEl.classList.remove("link-el-clicked");
  }
  navBar.className = "navbar";
});

contactEl.addEventListener("click", function () {
  if (contactEl.className === "contact-el") {
    homeEl.classList.add("home-el-not");
    servicesEl.classList.remove("link-el-clicked");
    aboutEl.classList.remove("link-el-clicked");
    skillsEl.classList.remove("link-el-clicked");
    portfolioEl.classList.remove("link-el-clicked");
    contactEl.classList.add("link-el-clicked");
  }
  navBar.className = "navbar";
});
// End of Navigation Bar Links Clicked

// Scroll Effect of the Divs
let screenPosition = window.innerHeight / 1.3;

function servicesScrolled() {
  servicesDiv = document.querySelector(".services-div");
  servicesPosition = servicesDiv.getBoundingClientRect().top;

  if (servicesPosition < screenPosition) {
    servicesDiv.classList.add("services-div-scrolled");
  } else if (servicesPosition > screenPosition) {
    servicesDiv.classList.remove("services-div-scrolled");
  }
}

function aboutScrolled() {
  aboutDiv = document.querySelector(".about-div");
  aboutPosition = aboutDiv.getBoundingClientRect().top;

  if (aboutPosition < screenPosition) {
    aboutDiv.classList.add("about-div-scrolled");
  } else if (aboutPosition > screenPosition) {
    aboutDiv.classList.remove("about-div-scrolled");
  }
}

function skillsScrolled() {
  skillsDiv = document.querySelector(".skills-div");
  skillsPosition = skillsDiv.getBoundingClientRect().top;

  if (skillsPosition < screenPosition) {
    skillsDiv.classList.add("skills-div-scrolled");
  } else if (skillsPosition > screenPosition) {
    skillsDiv.classList.remove("skills-div-scrolled");
  }
}

function portfolioScrolled() {
  portfolioDiv = document.querySelector(".portfolio-div");
  portfolioPosition = portfolioDiv.getBoundingClientRect().top;

  if (portfolioPosition < screenPosition) {
    portfolioDiv.classList.add("portfolio-div-scrolled");
  } else if (portfolioPosition > screenPosition) {
    portfolioDiv.classList.remove("portfolio-div-scrolled");
  }
}

function contactScrolled() {
  contactDiv = document.querySelector(".contact-div");
  contactPosition = contactDiv.getBoundingClientRect().top;

  if (contactPosition < screenPosition) {
    contactDiv.classList.add("contact-div-scrolled");
  } else if (contactPosition > screenPosition) {
    contactDiv.classList.remove("contact-div-scrolled");
  }
}

window.addEventListener("scroll", servicesScrolled);
window.addEventListener("scroll", aboutScrolled);
window.addEventListener("scroll", skillsScrolled);
window.addEventListener("scroll", portfolioScrolled);
window.addEventListener("scroll", contactScrolled);
// End of Scroll Effect of the Divs
