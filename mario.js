const canvas = document.getElementById("marioCanvas");
const ctx = canvas.getContext("2d");

let x = 50, y = 300, gravity = 2, jump = -20, velocity = 0;

document.addEventListener("keydown", () => {
  if (y >= 300) velocity = jump;
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.fillRect(x, y, 50, 50);
  velocity += gravity;
  y += velocity;
  if (y > 300) {
    y = 300;
    velocity = 0;
  }
  requestAnimationFrame(draw);
}
draw();
