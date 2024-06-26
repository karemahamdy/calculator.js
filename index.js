let click = document.querySelector("input");

function appendNumber(number) {
    if (number == ""){
        document.querySelector("input").value = "";
    }
    else{
    document.querySelector("input").value += number;
    }
  }

  function appendOperator(operator) {
    document.querySelector("input").value += operator;
  }
  function appendDot(operator) {
    document.querySelector("input").value += operator;
  }
  function deleteNumber() {
    let currentResult = document.querySelector("input").value;
    document.querySelector("input").value = currentResult.slice(0, -1);
  }
