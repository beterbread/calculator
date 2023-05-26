function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, firstNum, secondNum) {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  if (operator === "+") {
    return add(firstNum, secondNum);
  }
  if (operator === "-") {
    return subtract(firstNum, secondNum);
  }
  if (operator === "x") {
    return multiply(firstNum, secondNum);
  }
  if (operator === "÷") {
    return divide(firstNum, secondNum);
  }
}

function isOperator(str) {
  if (str === "+" || str === "-" || str === "x" || str === "÷") {
    return true;
  }
  return false;
}

function containsOperator(str) {
  if (str.includes("+") || str.includes("-") || str.includes("x") || str.includes("÷")) {
    return true;
  }
  return false;
}

const topDisplay = document.querySelector('#top');
const bottomDisplay = document.querySelector('#bottom');
const buttons = document.querySelectorAll('.operand');
buttons.forEach(button => {
  button.addEventListener('click', function () {
    let arr = bottomDisplay.textContent.split(" ")
    if (isOperator(button.textContent)) {
      if (bottomDisplay.textContent === "" && button.textContent === "-") {
        bottomDisplay.textContent +=  "-"; 
      }
      else if (arr.length === 3 && button.textContent === "-") {
        bottomDisplay.textContent +=  "-";   
      }
      else if (bottomDisplay.textContent !== "" && arr.length !== 3) {
        bottomDisplay.textContent += (" " + button.textContent + " ");
      }
    }
    else if (!isOperator(button.textContent)) {
      if (button.textContent === ".") {
        let arr = bottomDisplay.textContent.split(" ")
        if (containsOperator(bottomDisplay.textContent)) {
          if (!arr[2].includes(".")) {
            bottomDisplay.textContent += button.textContent;
          }
        }
        else if (!arr[0].includes(".")) {
          bottomDisplay.textContent += button.textContent;
        }
      }
      else {
        bottomDisplay.textContent += button.textContent;
      }
    }
  });
});

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', function () {
  topDisplay.textContent = "";
  bottomDisplay.textContent = "";
});

const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', function () {
  let str = bottomDisplay.textContent;
  if (str.substring(str.length - 1, str.length) === " ") {
    bottomDisplay.textContent = str.substring(0, str.length - 2);
  }
  else {
    bottomDisplay.textContent = str.substring(0, str.length - 1);
  }
});

const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', function () {
  let arr = bottomDisplay.textContent.split(" ")
  if (arr.length === 3) {
    topDisplay.textContent = bottomDisplay.textContent + " =";
    bottomDisplay.textContent = operate(arr[1], arr[0], arr[2]);
  }
});
