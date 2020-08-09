console.log('%c HI', 'color: firebrick')

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogImg() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderDogImg(json.message));
}

function renderDogImg(dogs) {
    const dogImageContainer = document.querySelector('#dog-image-container')
    dogs.forEach(dog => {
        const image = document.createElement('img');
        image.src  = dog;
        image.width = 100;
        dogImageContainer.appendChild(image);
    })
}

function fetchDogBreed() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderDogBreed(Object.keys(json.message)));
}

function renderDogBreed(breeds) {
    const dogBreeds = document.querySelector('#dog-breeds')
    const dropdown = document.querySelector('#breed-dropdown')

    breeds.forEach(breed => {
        const li = document.createElement('li');
        li.innerText = breed;
        dogBreeds.appendChild(li);

        li.addEventListener('click', () => {li.style.color = 'red'})
    })
}
  
function dropdownSelect() {
    const dogBreeds = document.querySelector('#dog-breeds')
    const dropdown = document.querySelector('#breed-dropdown')
    
    dropdown.addEventListener('change', function() {
        const filterLetter = dropdown.value;
        const breedLi = dogBreeds.children;
        Array.from(breedLi).forEach(li => {
          if (li.textContent.startsWith(filterLetter)) {
            li.style.display = '';
          } else {
            li.style.display = 'none';
          }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDogImg();
    fetchDogBreed();
    dropdownSelect();
});