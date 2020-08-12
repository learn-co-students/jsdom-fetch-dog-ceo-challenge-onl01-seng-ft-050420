console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedsList = document.querySelector('#dog-breeds')

fetchItems(imgUrl, addImagesToDOM)
fetchItems(breedUrl, addBreedsToDOM)

const dropdown = document.querySelector('#breed-dropdown')
dropdown.addEventListener('change', filterBreeds)

function fetchItems(url, operation) {
  return fetch(url)
    .then(res => res.json())
    .then(operation)
}

function addImagesToDOM(images) {
  for (const image of images.message) {
    const p = document.createElement('p')
    const img = document.createElement('img')
    img.src = image
    img.height = 100
    p.appendChild(img)
    document.querySelector('#dog-image-container').appendChild(p)
  }
}

function addBreedsToDOM(breeds) {
  for (const breed in breeds.message) {
    const li = document.createElement('li')
    li.innerText = breed
    breedsList.appendChild(li)
    li.addEventListener('click', () => {li.style.color = 'red'})
  }
}

function filterBreeds(e) {
  const letter = e.target.value
  const breeds = [...breedsList.children]
  breeds.forEach((breed) => {
    if (letter == 'all') {
      breed.style.display = 'list-item'
    } else {
      breed.style.display = 'none'
      if (breed.textContent.startsWith(letter)) {
        breed.style.display = 'list-item'
      }
    }
  })
}
