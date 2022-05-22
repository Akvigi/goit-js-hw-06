const form = document.querySelector(".login-form")
class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
}
function formLog(event) {
    event.preventDefault()
    const { elements: { email, password } } = event.currentTarget
    if (email.value === "" || password.value === "") {
        alert("all fields are not filled")
        return
    } 
    const user1 = new User(email.value, password.value) 
    form.reset()
    return console.log(user1) 
}
form.addEventListener("submit", formLog)
