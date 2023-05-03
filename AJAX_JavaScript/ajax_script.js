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
//el = document.querySelector("img");
//el.src = "image2.jpg";

//btn.addEventListener("load", (e) => {
//el.classList.add("fadeIn");
//});

/*console.log("test start");
setTimeout(() => console.log("0 sec timer"), 3);
Promise.resolve().then(() => console.log("1 sec timer"));
console.log("test end");
Promise.resolve("resolved promise 2").then((res) => {
  for (let i = 0; i < 10000; i++) {}
  console.log(res);
});*/
//images create, hide, etc

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.scr = imgPath;
    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImg;
createImage("image2.jpg")
  .then((img) => {
    console.log(img, "image2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("image3.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log(img, "image3 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => {
    console.log(err, "image not found");
  });

/* const getCountries = async function () {
  try {
    const data = await getJSON("https://restcountries.eu/rest/v2/all");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const whereAmI = async function () {
  const res = await fetch("https://restcountries.eu/rest/v2/name/Afghanistan");
  console.log(res);
};
// source: https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#analyze


const getJSON = function (url, errorMsg = "Error") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(errorMsg);
    return response.json();
  });
};
const get3Countries = async function (c1, c2, c3) {
  try {
    const data1 = await getJSON("https://restcountries.eu/rest/v2/name/" + c1);
    const data2 = await getJSON("https://restcountries.eu/rest/v2/name/" + c2);
    const data3 = await getJSON("https://restcountries.eu/rest/v2/name/" + c3);
    console.log(data1, data2, data3);
  } catch (err) {
    console.log(err);
  }
};
get3Countries("Afghanistan", "Albania", "Algeria");

const wait = function (s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
};
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long!"));
    }, sec);
  });
};*/

//image loading async:
const imgArr = ["image2.jpg", "image3.jpg"];
const loadAll = async function (amgArr) {
  console.log(amgArr);
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach((img) => {
      img.classList.add("parallel");
    });
    //console.log(imgs);
  } catch (err) {
    console.log(err);
  }
};

loadAll(["image2.jpg", "image3.jpg"]);
