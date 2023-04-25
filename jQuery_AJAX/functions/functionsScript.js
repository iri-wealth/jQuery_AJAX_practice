"use strict";
//default parameters
// we create a booking function:
const bookings = [];

const createBooking = function (
  flightnum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightnum,
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
//first class citizens - which are treated like first class. We can stor functions in variables, assign properties, etc
