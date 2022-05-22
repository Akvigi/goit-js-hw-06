const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
}
function inputFun(event) {
    event.preventDefault();
    refs.output.textContent = event.currentTarget.value;
    event.currentTarget.value === "" ? refs.output.textContent = "Anonymous" : refs.output.textContent = event.currentTarget.value
}

refs.input.addEventListener("input", inputFun)