// Navigation Bar
const navBar = document.getElementById("navbar");
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
// End of Navigation Bar

// The Navigation Bar Links
const homeEl = document.getElementById("home-el");
const servicesEl = document.getElementById("services-el");
const aboutEl = document.getElementById("about-el");
const skillsEl = document.getElementById("skills-el");
const portfolioEl = document.getElementById("portfolio-el");
const contactEl = document.getElementById("contact-el");

homeEl.addEventListener("click", function () {
  if (homeEl.id === "home-el-not") {
    homeEl.id = "home-el";
    servicesEl.id = "services-el";
    aboutEl.id = "about-el";
    skillsEl.id = "skills-el";
    portfolioEl.id = "portfolio-el";
    contactEl.id = "contact-el";
  }
});

servicesEl.addEventListener("click", function () {
  if (servicesEl.id === "services-el") {
    homeEl.id = "home-el-not";
    servicesEl.id = "services-el-clicked";
    aboutEl.id = "about-el";
    skillsEl.id = "skills-el";
    portfolioEl.id = "portfolio-el";
    contactEl.id = "contact-el";
  }
});

aboutEl.addEventListener("click", function () {
  if (aboutEl.id === "about-el") {
    homeEl.id = "home-el-not";
    servicesEl.id = "services-el";
    aboutEl.id = "about-el-clicked";
    skillsEl.id = "skills-el";
    portfolioEl.id = "portfolio-el";
    contactEl.id = "contact-el";
  }
});

skillsEl.addEventListener("click", function () {
  if (skillsEl.id === "skills-el") {
    homeEl.id = "home-el-not";
    servicesEl.id = "services-el";
    aboutEl.id = "about-el";
    skillsEl.id = "skills-el-clicked";
    portfolioEl.id = "portfolio-el";
    contactEl.id = "contact-el";
  }
});

portfolioEl.addEventListener("click", function () {
  if (portfolioEl.id === "portfolio-el") {
    homeEl.id = "home-el-not";
    servicesEl.id = "services-el";
    aboutEl.id = "about-el";
    skillsEl.id = "skills-el";
    portfolioEl.id = "portfolio-el-clicked";
    contactEl.id = "contact-el";
  }
});

contactEl.addEventListener("click", function () {
  if (contactEl.id === "contact-el") {
    homeEl.id = "home-el-not";
    servicesEl.id = "services-el";
    aboutEl.id = "about-el";
    skillsEl.id = "skills-el";
    portfolioEl.id = "portfolio-el";
    contactEl.id = "contact-el-clicked";
  }
});
// The Navigation Bar Links

// Services Div
const htmlDiv = document.getElementById("html-div");
const htmlRead = document.getElementById("html-read");
const htmlLine = document.getElementById("html-line");
htmlDiv.addEventListener("mouseover", appearHtmlRead);
htmlDiv.addEventListener("mouseout", disappearHtmlRead);
function appearHtmlRead() {
  htmlRead.style.animation = "readMore 1s forwards 1";
  htmlLine.style.animation = "lineWidthDecrease 1s forwards 1";
}
function disappearHtmlRead() {
  htmlRead.style.animation = "readMoreDisappear 0.5s forwards 1";
  htmlLine.style.animation = "lineWidthIncrease 1s forwards 1";
}

const cssDiv = document.getElementById("css-div");
const cssRead = document.getElementById("css-read");
const cssLine = document.getElementById("css-line");
cssDiv.addEventListener("mouseover", appearCssRead);
cssDiv.addEventListener("mouseout", disappearCssRead);
function appearCssRead() {
  cssRead.style.animation = "readMore 1s forwards 1";
  cssLine.style.animation = "lineWidthDecrease 1s forwards 1";
}
function disappearCssRead() {
  cssRead.style.animation = "readMoreDisappear 0.5s forwards 1";
  cssLine.style.animation = "lineWidthIncrease 1s forwards 1";
}

const uiuxDiv = document.getElementById("uiux-div");
const uiuxRead = document.getElementById("uiux-read");
const uiuxLine = document.getElementById("uiux-line");
uiuxDiv.addEventListener("mouseover", appearUiuxRead);
uiuxDiv.addEventListener("mouseout", disappearUiuxRead);
function appearUiuxRead() {
  uiuxRead.style.animation = "readMore 1s forwards 1";
  uiuxLine.style.animation = "lineWidthDecrease 1s forwards 1";
}
function disappearUiuxRead() {
  uiuxRead.style.animation = "readMoreDisappear 0.5s forwards 1";
  uiuxLine.style.animation = "lineWidthIncrease 1s forwards 1";
}
// End of Services Div
