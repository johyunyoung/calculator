const calculator = document.querySelector(".calculator");
const numberBtns = calculator.querySelectorAll(".number-btn");
const operators  = calculator.querySelectorAll(".operator");
const equalBtn = calculator.querySelector(".equal-btn");
const CBtn = calculator.querySelector(".C-btn");
const result = calculator.querySelector(".result");

let currVal = null;
let currOp = null;
let mode = "num";

function handleCBtn(){
  currVal = 0;
  currOp = null;
  mode = "num";
  result.innerHTML = 0;
}

function showCurrVal(){
  result.innerHTML = currVal;
}

function handleEqualBtn(){
  if(currOp !== null){
    const tempNum = parseInt(result.innerHTML);
    switch(currOp){
      case "+":
        currVal = parseInt(currVal);
        currVal += tempNum;
        break;
      case "-":
        currVal -= tempNum;
        break;
      case "*":
        currVal *= tempNum;
        break;
      case "/":
        currVal /= tempNum;
        break;
    }
  } else {
    currVal = result.innerHTML;
  }
  currOp = null;
  showCurrVal();
  mode = "Op";
}

function handleOperator(event){
  if(currOp !== null){
    const tempNum = parseInt(result.innerHTML);
    switch(currOp){
      case "+":
        currVal = parseInt(currVal);
        currVal += tempNum;
        break;
      case "-":
        currVal -= tempNum;
        break;
      case "*":
        currVal *= tempNum;
        break;
      case "/":
        currVal /= tempNum;
        break;
    }
  } else {
    currVal = result.innerHTML;
  }
  currOp = event.target.innerHTML;
  showCurrVal();
  mode = "Op";
}

function handleNumBtn(event){
  const currNum = event.target.innerHTML;
  if(mode === "num"){
    if(result.innerHTML === "0"){
      result.innerHTML = "";
      result.innerHTML += currNum;
    } else {
      result.innerHTML += currNum;
    }
  } else {
    result.innerHTML = "";
    result.innerHTML += currNum;
  }
  mode = "num";
}

function init() {
    for(const number of numberBtns){
        number.addEventListener("click", handleNumBtn);
    }
    for(const operator of operators){
        operator.addEventListener("click", handleOperator);
    }
    CBtn.addEventListener("click", handleCBtn);
    equalBtn.addEventListener("click", handleEqualBtn);
}

init();
