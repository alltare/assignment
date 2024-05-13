let numbers = document.getElementsByClassName("number");
let isMiddle = false;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    let num = numbers[i].innerHTML;
    let resultScene = document.getElementById("resultScene");
    resultScene.innerHTML = parseInt(resultScene.innerHTML + num);
    console.log(resultScene.value);
  });
}

function clickSymbol(symbol) {
  let result = 0;
  let result_scene = document.getElementById("resultScene");
  let symbol_scene = document.getElementById("symbolScene");
  let score_scene = document.getElementById("scoreScene");
  if (symbol == "C") {
    result_scene.innerHTML = "";
    score_scene.innerHTML = "";
    symbol_scene.innerHTML = "";
    return;
  }
  if (isMiddle) {
    if (symbol == "=") {
      num1 = parseInt(score_scene.innerHTML);
      num2 = parseInt(result_scene.innerHTML);
      switch (symbol_scene.innerHTML) {
        case "+":
          result = num1 + num2;
          break;
        case "−":
          result = num1 - num2;
          break;
        case "×":
          result = num1 * num2;
          break;
        case "÷":
          result = num1 / num2;
          break;
      }
      score_scene.innerHTML = "";
      symbol_scene.innerHTML = "";
      result_scene.innerHTML = result;
    }
    isMiddle = false;
  } else {
    if (symbol == "=") {
      return;
    }
    symbol_scene.innerHTML = symbol;
    score_scene.innerHTML = result_scene.innerHTML;
    result_scene.innerHTML = "";
    isMiddle = true;
  }
}
let symbols = document.getElementsByClassName("symbol");

for (let i = 0; i < symbols.length; i++) {
  symbols[i].addEventListener("click", function () {
    clickSymbol(symbols[i].innerHTML);
  });
}