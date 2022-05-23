const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryList = document.querySelector(".gallery")
// const liIm = images.map(image => {
//   const li = document.createElement("li")
//   const img = document.createElement("img")
//   img.style.width = "300px"
//   img.style.width = "200px"
//   img.src = image.url
//   img.alt = image.alt
//   li.append(img)
//   return li
// })
galleryList.insertAdjacentHTML("beforeend", images.map(image => 
  `<li><img src=${image.url} width = 300px height = 200px class = "itimg" alt=${image.alt}></li>`
).join("")
)

// // const imagesLi = images.map(image => {
//   galleryList.insertAdjacentHTML("beforeend", `<li><img src=${image.url} width = 300px 
//   height = 200px class = "itimg" alt=${image.alt}></li>`)
//  galleryList.insertAdjacentHTML("beforeend", images.map(image => {
//   const li = document.createElement("li")
//   const img = document.createElement("img")
//   img.style.width = "300px"
//   img.style.width = "200px"
//   img.src = image.url
//   img.alt = image.alt
//   li.append(img)
//   return li
// }) )


  // const li = document.createElement("li")
  // const img = document.createElement("img")
  // img.src = image.url
  // img.alt = image.alt
  // img.style.display = "flex"
  // img.style.flexDirection = "row"
  // galleryList.insertAdjacentHTML("beforeend", li)
  // li.insertAdjacentHTML("beforeend", img)
  // console.log(li)
  // console.log(img)
  // return li
// }) 

  galleryList.style.display = "flex"
  galleryList.style.flexDirection = "row"