const itemsUl = document.querySelectorAll('.item')
const totalElem = itemsUl.length
console.log(`Number of categories: ${totalElem}`)
itemsUl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    const ulInLi = item.lastElementChild
    console.log(`Elements: ${ulInLi.children.length}`)
}
)