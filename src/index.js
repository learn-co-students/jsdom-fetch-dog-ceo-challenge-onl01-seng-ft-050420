console.log('%c HI', 'color: firebrick')


// Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json.message))
}

function renderImages(images) {
    const dogImageContainer = document.getElementById('dog-image-container')
    images.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        dogImageContainer.appendChild(img)
    })
}

// Challenge 2, 3, and 4 -- Do reading on object keys
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json.message));
}

function renderBreeds(breeds) {
    const dogBreedContainer = document.getElementById('dog-breeds')

    let xxx = Object.keys(breeds)
    xxx.forEach(breed => {
        let li = document.createElement('li')
        li.textContent = breed
        dogBreedContainer.appendChild(li)

        li.addEventListener('click', function() {
            li.style.color = 'red'
        })

        let dropDown = document.getElementById('breed-dropdown');
        dropDown.addEventListener('change', function() {
            let selectedLetter = dropDown.value;
            let lis = dogBreedContainer.getElementsByTagName('li');
            Array.from(lis).forEach(li => {
                let firstLetter = li.innerText[0];
                if (firstLetter === selectedLetter) {
                    li.style.display = '';
                } else {
                    li.style.display = 'none'
                }
            })
        })
    })
}


// Challenge 4


function filterBreeds() {

}

document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
    filterBreeds()
  })