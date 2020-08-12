console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const breedsList = document.getElementById('dog-breeds');

function getDogs() {
    return fetch(imgUrl).then(resp => resp.json()).then(dogs => renderDogs(dogs));
};

function renderDogs(dogs) {
    dogs['message'].forEach(dog => document.getElementById('dog-image-container').innerHTML += `<img src=${dog}>`);
};

function getBreeds() {
    return fetch(breedUrl).then(resp => resp.json()).then(breeds => renderBreeds(breeds))
};

function renderBreeds(dogs) {
    const keys = Object.keys(dogs['message']);
    keys.forEach(breed => document.getElementById('dog-breeds').innerHTML += `<li>${breed}</li>`)
};

const breedList = document.getElementById('dog-breeds')

getDogs();
getBreeds();
