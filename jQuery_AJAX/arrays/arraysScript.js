"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300, 777],
  interestRate: 1.2, // %
  pin: 1111
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements">
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"]
]);

currencies.forEach(function (value, key, map) {
  console.log(key, value);
});

const currenciesUnique = new Set(["USD", "EUR", "GBP"]);
currenciesUnique.forEach(function (value, key, set) {
  console.log(key, value);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = movements.map(function (mov) {
  const movementsUSD = mov * 1.1;
  console.log("This is the amounts in USD: " + movementsUSD);
  return movementsUSD;
});
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * 1.1)
  .reduce((acc, mov) => acc + mov, 0);
console.log("These are total deposits in USD: " + totalDepositsUSD);

const totalWithdrawalsUSD = movements
  .filter((mov) => mov < 0)
  .map((mov) => mov * 1.1)
  .reduce((acc, mov) => acc + mov, 0);
console.log("These are total Withdrawals in USD: " + totalWithdrawalsUSD);

for (const [i, movement] of movements.entries()) {
  //for (const movement of movements) {
  if (movement > 0) {
    console.log("Movement: " + (i + 1) + " You deposited $" + movement);
  } else {
    console.log("You withdrawn $" + movement);
  }
}

movements.forEach(function (movement, i) {
  if (movement > 0) {
    console.log("Movement: " + (i + 1) + " You deposited $" + movement);
  } else {
    console.log("Movement: " + (i + 1) + "You withdrawn $" + movement);
  }
});

const movementsDescription = movements.map((mov, i) => {
  if (mov > 0) {
    return (
      i +
      1 +
      " Your transaction: $ " +
      mov +
      (mov > 0 ? " deposited" : " withdrawn")
    );
    //return i + 1 + " You deposited: $" + mov;
  } else {
    return i + 1 + " You withdrawn: $" + mov;
  }
});
console.log(movementsDescription);

const deposits = movements.filter((mov) => mov > 0);

//below is the alternative way of code to display the same result for deposits:
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

console.log(depositsFor);
const withdrawals = movements.filter((mov) => mov < 0);
console.log("these are your withdrawals: " + withdrawals);

//console.log("this are only deposits: " + deposits);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.user = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1));
    //return username;
  });
};
createUsernames(accounts); //stw
console.log(accounts);

//accumulator = acc; cur = current element; acc is like a sum of all the previous values on the account

//console.log("This is the sum of all the movements from the account1: " + balance);

//let balance2 = 0;
//for (const mov of movements) balance2 += mov;
//console.log(balance2);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = balance + "€";
};
calcDisplayBalance(account1.movements);

const max = movements.reduce((acc, mov) => Math.max(acc, mov), 0);
console.log("this is the maximum amount deposited: " + max);

const min = movements.reduce((acc, mov) => Math.min(acc, mov), 0);
console.log(min);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes + "€";

  const out = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = out + "€";

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.03) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = interest + "€";
};
calcDisplaySummary(account1.movements);

/*const sumIn = movements.reduce(function (acc, cur) {
  return acc + cur;
}, 0);*/

/////////////////////////////////////////////////
// Slice method
/*let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(-1)); //to get the very last parameter e
console.log([...arr]); //here we create a simple copy of the array (a shallow copy)

//Splice method:
console.log(arr.splice(2));

//splice method does chanes the original array and returns a new array
console.log(arr);

//Reverse method
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
const array1 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];

console.log(array1.reverse());
console.log(array1.splice(-1));
console.log(array1);

//Concat means to join two arrays
const letters = arr.concat(arr2);
console.log(letters);
console.log(letters.join("-"));

//At method returns the elements of the array at the specified index
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0)); //returns the 23
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1)); //useful when i do not know the end index number of the array

//Loop method forEach

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr4.forEach(function (item, index) {
  console.log(item, index);
});

//Map method gives new array with the results of the function
const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];*/

/*Maximum value in an array we use reduce Method

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Math.max(...arr5));*/
