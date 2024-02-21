const bodyTag = document.querySelector("#theBody");
const btn = document.querySelector("button");

const color = ["yellow", "aqua", "purple", "crimson"];

let i = 0;
const changeColor = () => {
  i++;
  if (i >= colors.length) {
    i = 0;
  }
  bodyTag.style.backgroundColor = colors[i];
};

btn.addEventListener("click", changeColor);
