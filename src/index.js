console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchImages(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        renderImages(data)
    })
}

function renderImages(data){
    let imgDiv = document.querySelector("#dog-image-container") 
    data.message.forEach(element => {
    const img = document.createElement("img")
        img.setAttribute("src", `${element}`)
        img.style.height = "300px"
        img.style.width = "300px"
        imgDiv.appendChild(img)
    });
}

function fetchBreeds(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}




fetchImages(imgUrl);
fetchBreeds(breedUrl);

