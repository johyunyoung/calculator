const calculator = document.querySelector(".calculator");
const numberBtns = calculator.querySelectorAll(".number-btn");
const operators  = calculator.querySelectorAll(".operator");
const equalBtn = calculator.querySelector(".equal-btn");
const CBtn = calculator.querySelector(".C-btn");
const result = calculator.querySelector(".result");

let currVal = 0;
let currOp = null;

function handleCBtn(){
    currVal = 0;
    result.innerHTML = 0;
}

function showCurrVal(){
    result.innerHTML = currVal;
}

function handleOperator(event){
    currOp = event.target.innerHTML;
    showCurrVal();
}

function handleNumBtn(event){
    const currNum = event.target.innerHTML;
    if(currOp === null){
        if(currVal !== 0){
            currVal += currNum;
        } else {
            currVal = parseInt(currNum);
        }
        showCurrVal();
    } else {
        result.innerHTML = currNum;
        if(currOp === "+"){
            currVal += parseInt(currNum);
        } else if(currOp === "-"){
            currVal -= parseInt(currNum);
        } else if(currOp === "*"){
            currVal *= parseInt(currNum);
        } else if(currOp === "/"){
            currVal /= parseInt(currNum);
        }
    }
}

function init() {
    for(const number of numberBtns){
        number.addEventListener("click", handleNumBtn);
    }
    for(const operator of operators){
        operator.addEventListener("click", handleOperator);
    }
    CBtn.addEventListener("click", handleCBtn);
    equalBtn.addEventListener("click", showCurrVal);
}

init();