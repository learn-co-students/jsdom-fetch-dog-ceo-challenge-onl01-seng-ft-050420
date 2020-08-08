console.log('%c HI', 'color: firebrick')

function fetchDogPhotos(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => displayDogPhotos(json.message))
}

function displayDogPhotos(json){
    const dogImageContainer = document.getElementById("dog-image-container")

    json.forEach( photo => {
        const img = document.createElement("img")
        img.setAttribute('src', photo)
        dogImageContainer.appendChild(img)
    })
}

function fetchDogBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => displayBreedList(json.message))
}

function displayBreedList(breedArray){
    const ul = document.getElementById("dog-breeds")
    const dropdown = document.getElementById("breed-dropdown")
    removeChildrenUL()
    for(const breed in breedArray) {
        const li = document.createElement('li')
        li.innerText = breed
        if (dropdown.value){
            if (breed.startsWith(dropdown.value)){
                ul.appendChild(li)
                li.addEventListener('click', function(){
                    li.style.color = randomColor()
                })
            }
        }else {
            ul.appendChild(li)
            li.addEventListener('click', function(){
                li.style.color = randomColor()
            })
        }
    }
}

function removeChildrenUL(){
    const ul = document.getElementById("dog-breeds")
    while (ul.children.length > 0){
        ul.removeChild(ul.children[0])
    }
}

function randomColor() {
    return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
}




document.addEventListener("DOMContentLoaded", function(){
    const dropdown = document.getElementById("breed-dropdown")

    fetchDogPhotos()
    fetchDogBreeds()
    const ul = document.getElementById('dog-breeds')
    dropdown.addEventListener("change", fetchDogBreeds)
})
