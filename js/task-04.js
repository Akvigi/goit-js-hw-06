const refs = {
    decree: document.querySelector('[data-action = decrement]'),
    incree: document.querySelector('[data-action = increment]'),
    counter: document.querySelector("#value"),
};
let total = 0;
refs.decree.addEventListener("click", () => {
   refs.counter.textContent = total -=1;
}),
refs.incree.addEventListener("click", () => {
    
    refs.counter.textContent = total +=1;
})