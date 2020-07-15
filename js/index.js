window.onload = function (event) {
  const temp = document.getElementById("temp");
  const result = document.getElementById("result");
  const btn = document.getElementById("button");

  btn.addEventListener("click", () => {
    result.innerHTML = eval(((9 / 5) * temp.value + 32).toPrecision(3));
    temp.value = "";
  });

  document.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      result.innerHTML = eval(((9 / 5) * temp.value + 32).toPrecision(3));
      temp.value = "";
    }
  });
};
