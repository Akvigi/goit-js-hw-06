function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodySector: document.querySelector("body"), 
  changeButton: document.querySelector(".change-color"),
  colorName: document.querySelector(".color"),
}

function changeColor(event) {
  event.preventDefault()
  refs.colorName.textContent = getRandomHexColor();
  refs.bodySector.style.backgroundColor = getRandomHexColor()
}

refs.changeButton.addEventListener("click", changeColor)
