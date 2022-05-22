const itemsUl = document.querySelectorAll('.item')
const totalElem = itemsUl.length
console.log(`Number of categories: ${totalElem}`)
itemsUl.forEach(item => console.log(item.firstElementChild.textContent))