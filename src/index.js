console.log('%c HI', 'color: firebrick')
function fetchImages(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderImages(json));
}

function renderImages(images){
    const main = document.querySelector('#dog-image-container');
    for (const image of images.message) {
     const img = document.createElement('img');
     img.src = image   
     main.appendChild(img)
    };
}

function fetchBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => { 
        renderBreeds(json); 
        
    });
    
}

function renderBreeds(breeds) {
    const ul = document.getElementById('dog-breeds');
    for (const breed in breeds.message){
        const li = document.createElement('li');
        li.innerHTML = breed;
        li.className = "breed";
        ul.appendChild(li);
    }
    listenForCLicks();
    filter(breeds.message);
}

document.addEventListener("DOMContentLoaded", function() {
    fetchImages();
    fetchBreeds();
    
    
    
})

function listenForCLicks(){
    const liBreeds = document.getElementsByClassName('breed');
    for (let i = 0; i < liBreeds.length; i++) {
        
        liBreeds[i].addEventListener('click', function() {
            liBreeds[i].style.color = 'red'
        });
    }

}

function filter(breeds) {
    const dropDown = document.getElementById('breed-dropdown')
    dropDown.addEventListener('change', function() {
        console.log('hello')
        const ulBreeds = document.getElementById('dog-breeds')
        const letter = dropDown.value 
    
        const liBreeds = document.getElementsByClassName('breed');
        for (const liBreed of liBreeds) {
            
            if (liBreed.innerHTML[0] !== letter){
                liBreed.removeChild
            }
        }
    })
   
}


