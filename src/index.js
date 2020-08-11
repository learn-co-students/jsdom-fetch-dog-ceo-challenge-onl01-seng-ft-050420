console.log('%c HI', 'color: firebrick')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener('DOMContentLoaded', function () {
    renderImgs();
    renderBreeds();
  });
  
function renderImgs() {
    fetch(imgUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        json.message.forEach(image=> addImgs(image)) 
    })
}

function renderBreeds() {
    fetch(breedUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        json.message.forEach(breed=> addBreeds(breed)) 
    })
}

function addBreeds(dogBreed) {
    const breedContainer = document.getElementById('dog-breeds');
    const newBreed = document.createElement('ul');
    newBreed.innerText = dogBreed;
    breedContainer.appendChild(newBreed);
}

function addImgs (dogImg) {
    const dogContainer = document.querySelector('#dog-image-container');
    const newImg = document.createElement('img');
    newImg.src = dogImg;
    dogContainer.appendChild(newImg);
}