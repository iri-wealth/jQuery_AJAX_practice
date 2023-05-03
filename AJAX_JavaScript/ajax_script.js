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
