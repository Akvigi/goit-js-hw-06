const input = document.querySelector("#validation-input")
function validation(event) {
    event.preventDefault();
    input.textContent = event.currentTarget.value;
    
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    };
}
input.addEventListener("blur", validation)