const check = document.querySelector("#check");
const box = document.querySelector(".box");
const ball = document.querySelector(".ball");

// The code below could replace check.checked with this.checked, but would fail if using an anonymous () => {}function.
check.addEventListener("change", function () {
  if (check.checked === true) {
    box.setAttribute("style", "background-color: white ");
    ball.setAttribute("style", "transform:translateX(100%)");
    document.body.setAttribute(
      "style",
      "background-color: black; color: white"
    );
  }

  if (check.checked === false) {
    box.setAttribute("style", "background-color: #262626 ");

    ball.setAttribute("style", "transform:translateX(0%)");
    document.body.setAttribute(
      "style",
      "background-color: white; color: black"
    );
  }
});
