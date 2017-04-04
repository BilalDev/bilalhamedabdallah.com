let getRandom = () => {
  let min = 0;
  let max = 255;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let getRandomColor = () => {
  let r = getRandom();
  let g = getRandom();
  let b = getRandom();

  return `rgb(${r}, ${g}, ${b})`;
};
