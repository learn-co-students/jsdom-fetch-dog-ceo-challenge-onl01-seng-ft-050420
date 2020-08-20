console.log('%c HI', 'color: firebrick')
//chalange 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchPhotos() {
    return fetch(imgUrl)
    .then(response => response.json())
    .then(displayPhotos);
};

function displayPhotos(photos) {
  const divContainer = document.getElementById("dog-image-container")
  photos.message.forEach( photo => {
      const img = document.createElement('img')
      img.setAttribute("src", photo)
      divContainer.appendChild(img)
  } )
};

//chalange 2

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
function fetchBreedInfo() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(showBreed)
};

function showBreed(breeds) {
   const ul = document.getElementById("dog-breeds")
   //debugger
   Object.keys(breeds.message).forEach(breed => {
       li = document.createElement("li")
       li.setAttribute("id", "each-breed")
       li.innerHTML = breed
       li.addEventListener("mouseover", changeColorText(li))
       ul.appendChild(li)
   }) 
};


//challange 3

function changeColorText(text) {
  text.style.color = "red"
};

const eachBreed = document.querySelectorAll("#each-breed");
eachBreed.forEach(breed => {
  breed.addEventListener("click", changeColorText())
});


//challange 4

function filterByFirstLetter(collection, letter) {
  return collection.filter(function(b){
    b.charAt(0) === letter
})
};





document.addEventListener("DOMContentLoaded", 
  function() {
      fetchPhotos()
      fetchBreedInfo()
  });

