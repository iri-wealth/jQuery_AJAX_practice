"use strickt";
Julia = [3, 5, 2, 12, 7];
Kate = [4, 1, 15, 8, 3];

//create a shallow copy of Julia array

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
