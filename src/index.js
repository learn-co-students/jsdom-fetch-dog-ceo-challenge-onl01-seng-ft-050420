const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// challenge 1: fetch and add images
function fetchImages() {
  fetch(imgUrl)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      let imgArray = json.message
      imgArray.forEach((link) => {
        let imgContainer = document.getElementById('dog-image-container')
        const img = document.createElement('img')
        img.src = link
        imgContainer.appendChild(img)
      })
    })
}

// challenges 2 and 3: fetch and add breeds; change color of breed on click
function fetchBreeds() {
  fetch(breedUrl)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      let breedList = json.message
      Object.keys(breedList).forEach((breed) => {
        let targetBreedList = document.getElementById('dog-breeds')
        let li = document.createElement('li')
        li.className = 'dog-breed'
        li.innerHTML = `${breed}`
        li.addEventListener('click', function (e) {
          li.style.color = 'green'
        })
        targetBreedList.append(li)
      })
    })
}

// challenge 4: filter breeds that start with a letter (a - d)
function breedFilter() {
  let filterDropdown = document.getElementById('breed-dropdown')
  filterDropdown.addEventListener('change', function (e) {
    let firstLetter = filterDropdown.value
    let breedList = document.querySelectorAll('.dog-breed')
    breedList.forEach((breed) => {
      breed.style.visibility = 'visible' // not great, but simple
      if (!breed.textContent.startsWith(firstLetter)) {
        breed.style.visibility = 'hidden'
      }
    })
  })
}

document.addEventListener('DOMContentLoaded', function () {
  fetchImages()
  fetchBreeds()
  breedFilter()
})
