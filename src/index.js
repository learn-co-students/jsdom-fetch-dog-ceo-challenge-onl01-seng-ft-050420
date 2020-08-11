

window.addEventListener('DOMContentLoaded', () => {
    fetchImages()
    fetchBreeds() 
    document.getElementById('breed-dropdown').addEventListener('change', filterBreeds)

});
const breeds = []


function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => displayImages(json));
}

function displayImages(object) {
    object['message'].forEach( ( image ) => {
       let div = document.createElement('div')
       div.innerHTML = `<img src="${image}" />`
       document.getElementById('dog-image-container').appendChild(div)
    })  
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => displayBreeds(json));
}

function displayBreeds(object) {
    Object.keys(object["message"]).forEach((key, index) => {
            breeds.push(key)
            let li = document.createElement('li')
            li.innerHTML = key
            li.style.cursor = 'pointer'
            li.addEventListener('click', changeColor)
            document.getElementById('dog-breeds').appendChild(li)
    }) 
}


function changeColor(e) {
    e.target.style.color = '#'+Math.floor(Math.random()*16777215).toString(16)
}

function filterBreeds() {
    const breedFilterMenu = document.getElementById('breed-dropdown')
    if (breedFilterMenu.value == "") {
        fetchBreeds()
    }
    else {
        document.getElementById('dog-breeds').innerHTML = ""
        breeds.forEach( breed => {
            if(breed.charAt(0) === breedFilterMenu.value) {
                let li = document.createElement('li')
                li.innerHTML = breed 
                document.getElementById('dog-breeds').appendChild(li)
            }
        })
    }

}






