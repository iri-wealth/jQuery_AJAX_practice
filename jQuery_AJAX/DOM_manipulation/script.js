"use strict";
// Selecting, Creating, and Deleting Elements

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

//document.getElementById("section--1");
//const allButtons = document.getElementsByTagName("button");
//console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

//Creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent =
  "We use cookied for improved functionality and analytics.";
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

//Style
message.style.backgroundColor = "lightviolet";
message.style.color = "black";
message.style.width = "120%";
message.style.borderRadius = "25px";

//Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.src);
console.log(logo.getAttribute("designer"));
const link = document.querySelector(".nav__link--btn");
console.log(link.href);

//smooth scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");
console.log(btnScrollTo);

btnScrollTo.addEventListener("click", function () {
  window.scrollTo({
    top: 100,
    right: 100,
    behavior: "smooth"
  });
});
//Event Listeners - this is the old way
const h1 = document.querySelector("h1");
h1.onmouseenter = function (e) {
  window.scrollTo({
    bottom: 1000,
    left: 100,
    behavior: "smooth"
  });
};

//
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  "rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})";

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  //console.log("LINK", e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

//sticky navigation

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});
