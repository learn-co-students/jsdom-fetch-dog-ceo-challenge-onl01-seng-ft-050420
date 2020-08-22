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
       li.addEventListener('click', changeColorText)
       ul.appendChild(li)
    }) 
   //ul.addEventListener('click', changeColorText)-----this will work too
};


//challenge 3

function changeColorText(event) {
  event.target.style.color = "red"
};


//challange 4


const selectInput = document.getElementById("breed-dropdown")
selectInput.addEventListener("change", function (){
   let allBreeds = document.getElementsByTagName("li");

   Array.from(allBreeds).forEach(b=> {
     
     if(b.innerText[0] == selectInput.value){
       b.style.display = '';
     } else {
       b.style.display = 'none';
     }
   })
})





document.addEventListener("DOMContentLoaded", 
  function() {
      fetchPhotos()
      fetchBreedInfo()
  });

