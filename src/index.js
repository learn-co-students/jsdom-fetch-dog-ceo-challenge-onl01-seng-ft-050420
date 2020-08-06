console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const letterSort = document.getElementById('breed-dropdown')

function fetchImage(){
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => displayImage(json.message))
}

function fetchBreed(){
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => displayBreeds(json.message))
}

function displayBreeds(breeds) {
    let arr = Object.keys(breeds)
    let dogList = document.querySelector('#dog-breeds')
    arr.forEach(breed => {
        let li = document.createElement('li')
        li.textContent = breed

        dogList.appendChild(li)

    })

};


function displayImage (images) {
    const container = document.querySelector('#dog-image-container')
    images.forEach(image => {
        let img = document.createElement('img')
        img.src = image
        container.appendChild(img)
    })
};

document.addEventListener('DOMContentLoaded', function(){
    fetchImage()
    fetchBreed()
})


