"use strict";
//default parameters
// we create a booking function:
const bookings = [];

const createBooking = function (
  flightnum,
  iataCode,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightnum,
    iataCode,
    numPassengers,
    price
  };
  console.log(bookings);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH234", 2);
createBooking("LK323", 4);

//how to pass arguments into functions: value versus reference:

const flight = "LH534";
const iataCode = "LH";
const jones = {
  name: "Jonas",
  passport: 23445634
};
const checkIn = function (flight, passenger) {
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passport === 23445634) {
    console.log("Check-in successful");
  } else {
    console.log("Wrong passport number");
  }
};
checkIn(flight, jones);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
  console.log(person);
};
newPassport(jones);

//first class and Higher Order functions:
//first class citizens - which are treated like first class. We can stor functions in variables, assign properties, etc. Function which recieves another function is called the higher-order function.
//Also function which returns another function  - higher order function
//example of higher order function:
const oneWord = function (str) {
  return str.replace(/ /g, " ").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return first.toUpperCase() + others.join(" ");
};
//higher-order function:
const transformer = function (str, fn) {
  console.log(`transformed string: ${fn(str)}`);
  console.log(`transformed by: ${fn.name}`);
};
transformer("JavaScript  is the best programming Language", upperFirstWord);

const hallo = function () {
  console.log("Hello friend");
};
["Adam", "Maria", "John"].forEach(hallo);

//functions which return a new function

const greet = function (greeting) {
  return function (name) {
    console.log(greeting + " " + name);
  };
};
const greeter = greet("Halooo");
greeter("Iri");
greeter("Jonas");

const greetArr = (greeting) => (name) =>
  console.log("greetArr", greeting + "welcome " + name);

//The Call and Apply methods

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  book(flightnum, name) {
    console.log(name + " has booked " + flightnum);
  }
};
lufthansa.book(234, "John Smoth");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: []
};

const book = lufthansa.book;
book(23, "Maria Schuer");

book.call(eurowings, 23, "Sharon Mouth");

const flightData = [583, "Goerge Cooper"];
book.apply(eurowings, flightData);

//The bind Method - does not immediately calls the function
const bookEW = book.bind(eurowings);
bookEW(23, "Steven Williams");
console.log(bookings);
const bookLH = book.bind(lufthansa);
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Konst");
bookEW23("Martha Kooper");

//methods with eventLiseners:
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  lufthansa.planes++;
  console.log(lufthansa.planes);
};
lufthansa.buyPlane();
document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);

//partial application relates to the bind Method:
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.2, 100));
const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

//practical exercise

const poll = {
  question: "What is your favourite programing language?",
  options: ["1: Python", "2: JavaScript", "3: Java", "4: C++"],
  answers: new Array(5).fill(0),
  registerNewAnswer() {
    const answer = Number(
      console.log(
        this.question + this.options.join(" \n") + "Write option number"
      )
    );
    console.log(answer);
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);
  },
  displayResults(type = "array") {
    if (type === "array") {
      HTMLFormControlsCollection.log(this.answers);
    } else if (type === "string") {
      console.log("Poll results are: ", this.answers.join(","));
    }
  }
};
poll.registerNewAnswer();
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [1, 2, 3, 4, 5] }, "string");

//immediately envoked functions IIFE - they are called only one time: this functions are not used anymore
const runOnce = function () {
  console.log("This function will be called only one time");
  const isPrivate = 23;
};
runOnce();
(function () {});

// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount + " passengers");
  };
};
const booker = secureBooking();
booker();
booker();
console.dir(booker); //dir gives opportunity to see the function properties and details

let f; //here we created an empty function
const g = function () {
  const a = 23;
  f = function () {
    //here we assign variable to the empty function
    console.log(a * 2);
  };
};
g(); //here we call the function
f();
console.dir(f);

const boardPassengers = function (n, wait) {
  //const perGroup = n / 3;
  setTimeout(function () {
    console.log("we are now boarding all " + perGroup + " passengers");
  }, 1000); //this function will be executed after 1000 mili-seconds or 1s
  console.log("will start calling in " + wait + " seconds");
};

const perGroup = 1000;

boardPassengers(180, 3);

//exercise:
(function () {
  const header = document.querySelector("h1");
  header.style.color = "violet";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "red";
  });
})();
