function randomNumberLeft() {
  const min = 260;
  const max = 1437;
  return Math.round(Math.random() * (max - min) + min);
}

function randomNumberTop() {
  const min = 19;
  const max = 600;
  return Math.round(Math.random() * (max - min) + min);
}

function randomColor() {
  let color = "#";
  let symbol = "012345678ABCDEF";
  const number = 6;
  for (let i = 0; i < number; i++) {
    color += symbol[Math.round(Math.random() * 16)];
  }
  return color;
}