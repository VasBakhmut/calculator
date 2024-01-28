const action = ["-", "+", "*", "/"];
let a;
let b;
function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function devide(a, b) {
  return a / b;
}

function numBtn(btn) {
  switch (btn) {
    case sevenBtn:
      result = 7;

    case eightBtn:
      result = 8;
    case nineBtn:
      result = 9;
    case fourBtn:
      result = 4;
    case fiveBtn:
      result = 5;
    case sixBtn:
      result = 6;
    case oneBtn:
      result = 1;
    case twoBtn:
      result = 2;
    case threeBtn:
      result = 3;
    case zeroBtn:
      result = 0;
    case dotBtn:
      result = ".";

      break;

    default:
      break;
  }
  return result;
}

function culculation(a, b, operation) {
  switch (operation) {
    case action[1]:
      result = plus(a, b);
    case action[0]:
      result = minus(a, b);
    case action[2]:
      result = multiply(a, b);
    case action[3]:
      result = devide(a, b);

      break;

    default:
      break;
  }
}

// function actionA() {
//   return result.value;
// }

const total = document.querySelector("#total");

function cleatAll() {
  total.textContent = "";
  console.log("hello");
}

function num1() {
  numBtn.onclick += a;
  console.log(num1);
}

const resultScrn = document.getElementById("result");

const acBtn = document.getElementById("ac");
const delBtn = document.getElementById("del");
const devideBtn = document.getElementById("slash");
const multipBtn = document.getElementById("multip");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const zeroBtn = document.getElementById("zero");
const dotBtn = document.getElementById("dot");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const equalBtn = document.getElementById("equal");

acBtn.addEventListener("click", cleatAll);
delBtn.addEventListener("click", function () {});
devideBtn.addEventListener("click", devide);
multipBtn.addEventListener("click", multiply);
sevenBtn.addEventListener("click", num1);
eightBtn.addEventListener("click", num1);
nineBtn.addEventListener("click", function () {});
fourBtn.addEventListener("click", function () {});
fiveBtn.addEventListener("click", function () {});
sixBtn.addEventListener("click", function () {});
oneBtn.addEventListener("click", function () {});
twoBtn.addEventListener("click", function () {});
threeBtn.addEventListener("click", function () {});
zeroBtn.addEventListener("click", function () {});
dotBtn.addEventListener("click", function () {});
minusBtn.addEventListener("click", minus);
plusBtn.addEventListener("click", plus);
equalBtn.addEventListener("click", function () {});

//-----------------------------------------------------------------

/*let a = ""; //first number
let b = ""; //second number
let sign = ""; //operator
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["+", "-", "*", "/"];

//Screen

const out = document.querySelector(".total");

function cleatAll() {
  let a = "";
  let b = "";
  let sign = "";
  let finish = false;
  total.textContent = 0;
  console.log("hello");
}

// const acBtn = document.getElementById("ac");

document.querySelector(".ac").onclick = cleatAll;

// acBtn.addEventListener("click", cleatAll);

document.querySelector(".buttonsss").onclick = (event) => {
  //not button
  if (!event.target.classList.contains(".btn")) return;
  //pressed btn ac
  if (event.target.classList.contains(".ac")) return;

  out.textContent = "";
  //recive presed btn
  const key = event.target.textContent;
  // if pressed 0-9 or dot

  if (digit.includes(key)) {
    a += key;
    console.log(a, b, sign);
  }
};*/
