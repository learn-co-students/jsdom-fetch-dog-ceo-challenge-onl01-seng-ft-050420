console.log('%c HI', 'color: firebrick')

//VARS
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


//DOM COMMAND
document.addEventListener("DOMContentLoaded", function () {
    fetchImages();
    fetchBreeds();
   
});

//FUNCTIONS
function fetchImages(){
    fetch(imgUrl).then(function(response) {
        return response.json();
    }).then(function(json){
        displayImg(json['message']);
    })
}

function displayImg(json) {
    const imgCont = document.querySelector('#dog-image-container');
    json.forEach(img => {
        const imgTag = document.createElement('img');
        imgTag.src = img
        imgCont.appendChild(imgTag)
    })
}

function fetchBreeds() {
    fetch(breedUrl).then(function(response){
        return response.json();
    }).then(function(json){
        listBreeds(json);
    });
}

function listBreeds(json) {
    const breedsUL = document.querySelector('#dog-breeds');
    const dogArray = Object.keys(json['message']);

    const dogList = dogArray.forEach(breed => {
        const li = document.createElement('li');
        li.innerHTML = breed; 
        breedsUL.appendChild(li);
    });
    clickLi();
    filterBreeds(dogArray);
}

function filterBreeds(dogArray) {
    const breedsUL = document.querySelector('#dog-breeds');
    const selection = document.querySelector('#breed-dropdown');
    const options = selection.options
    selection.addEventListener('change', function() {
        const lis = document.querySelectorAll('ul#dog-breeds li')
        for(i = 0; li=lis[i]; i++) {
            li.parentNode.removeChild(li)
        }
        if (options.selectedIndex === 0) {
            dogArray.forEach(breed => {
                if (breed.startsWith("a")) {
                const li = document.createElement('li');
                li.innerHTML = breed; 
                breedsUL.appendChild(li);
                }
            });
        } else if (options.selectedIndex === 1) {
            dogArray.forEach(breed => {
                if (breed.startsWith("b")) {
                const li = document.createElement('li');
                li.innerHTML = breed; 
                breedsUL.appendChild(li);
                }
            }); 
        } else if (options.selectedIndex === 2) {
            dogArray.forEach(breed => {
                if (breed.startsWith("c")) {
                const li = document.createElement('li');
                li.innerHTML = breed; 
                breedsUL.appendChild(li);
                }
            }); 
        }  else if (options.selectedIndex === 3) {
            dogArray.forEach(breed => {
                if (breed.startsWith("d")) {
                const li = document.createElement('li');
                li.innerHTML = breed; 
                breedsUL.appendChild(li);
                }
            }); 
        } else {
            dogArray.forEach(breed => {
                const li = document.createElement('li');
                li.innerHTML = breed; 
                breedsUL.appendChild(li);
            }); 
        }      
    });
}

function clickLi() {
    let listItems = document.querySelectorAll('ul#dog-breeds li');
    listItems.forEach(li => {
        li.addEventListener('click', function () {
            li.style.color = "red";
        });
    });
}






