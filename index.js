const calculator = document.querySelector(".calculator");
const numberBtns = calculator.querySelectorAll(".number-btn");
const operators  = calculator.querySelectorAll(".operator");
const equalBtn = calculator.querySelector(".equal-btn");
const CBtn = calculator.querySelector(".C-btn");
const result = calculator.querySelector(".result");

let currVal = 0;

function handleCBtn(){

}

function showCurrVal(){
    result.innerHTML = currVal;
}

function handleOperator(event){
    event.target.innerHTML;
}

function handleNumBtn(event){
    const currOp = event.target.innerHTML;
    if(currOp === "+"){

    } else if(currOp === "-"){

    } else if(currOp === "*"){

    } else if(currOp === "/"){

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
    equalBtn.addEventListener("click", handleEqualBtn);
}

init();