"use strict";
(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let equal = document.querySelector(".btn-equal");
  let clear = document.querySelector(".btn-red");
  let backspace = document.querySelector(".btn-backspace");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      console.log(value);
      screen.value += value;
    });
  });

  equal.addEventListener("click", function (e) {
    console.log(screen.value);
    if (screen.value === " ") {
      screen.value = "p";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });

  backspace.addEventListener("click", function (e) {
    screen.value = screen.value.slice(0, -1);
  });
})();
