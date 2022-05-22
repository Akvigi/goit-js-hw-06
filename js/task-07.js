const range = document.querySelector("#font-size-control")
const text = document.querySelector("#text")
console.log(text.style.fontSize)
console.log(text.textContent)
function change() {
    text.style.fontSize = `${Number(range.value)}px`
    console.log(text.style.fontSize)
}
range.addEventListener("input", change)
document.addEventListener("DOMContentLoaded", change, { once: true });