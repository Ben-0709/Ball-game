const box = document.querySelector(".box");
const ball = document.querySelector(".ball");
const start = document.querySelector("#start");
const zeroing = document.querySelector("#zeroing");
const stopMove = document.querySelector("#stop");
const topLeft = document.querySelector(".top-left");
const topRight = document.querySelector(".top-right");
const downLeft = document.querySelector(".down-left");
const downRight = document.querySelector(".down-right");

document.addEventListener('DOMContentLoaded', () => {
  if (box && ball && start && zeroing && stopMove && topLeft && topRight && downLeft && downRight) {
    function moveBall() {
      const boxWidth = box.offsetWidth;
      const boxHeight = box.offsetHeight;

      const maxLeft = boxWidth - ball.offsetWidth;
      const maxTop = boxHeight - ball.offsetHeight;

      let left = randomNumberLeft(maxLeft);
      let top = randomNumberTop(maxTop);

      left = Math.max(0, Math.min(left, maxLeft));
      top = Math.max(0, Math.min(top, maxTop));

      ball.style.left = left + "px";
      ball.style.top = top + "px";

      [topLeft, topRight, downLeft, downRight, box].forEach(element => {
        element.style.transition = 'all 0.4s linear';
        element.style.background = randomColor();
      });
    }

    function centerBall() {
      ball.style.left = (innerWidth / 2) - ball.offsetWidth / 2 + "px";
      ball.style.top = (innerHeight / 2) - ball.offsetWidth / 2 + "px";
    }

    window.onresize = centerBall;

    ball.addEventListener("mouseover", moveBall, true);

    zeroing.onclick = () => {
      centerBall();
      ball.style.background = "#fff";
      box.style.background = "#fff";
      ball.addEventListener("mouseover", moveBall, true);
    };

    if (stopMove) {
      stopMove.addEventListener("click", () => {
        ball.removeEventListener("mouseover", moveBall, true);
        ball.style.background = "#fff";

        ball.addEventListener("mousedown", mousedown);

        function mousedown() {
          document.addEventListener("mousemove", mousemove);

          function mousemove(e) {
            const x = e.clientX - ball.offsetWidth / 2 + "px";
            const y = e.clientY - ball.offsetWidth / 2 + "px";
            ball.style.left = x;
            ball.style.top = y;
            ball.style.transition = "unset";
          }

          ball.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", mousemove);
          });
        }

        start.onclick = () => {
          ball.addEventListener("mouseover", moveBall, true);
          ball.style.transition = "all 0.5s ease";
          ball.style.background = "orange";
        };
      });
    }
  }
})

