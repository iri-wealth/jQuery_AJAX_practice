"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
/*const request = new XMLHttpRequest();
request.open(
  "GET",
  "https://api.countrylayer.com/v2/all?access_key=241f2d3a72f886e0b39c522b98ea1650"
);
request.send();
request.addEventListener("load", () => {
  const data = JSON.parse(request.responseText);
  console.log(data);
});*/
el = document.querySelector("img");
el.src = "image2.jpg";

btn.addEventListener("load", (e) => {
  el.classList.add("fadeIn");
});
