console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages(){
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImage(json)); 
  
  }

  function renderImage(json) {
    //console.log(json)  
    const div = document.getElementById('dog-image-container')
      json.message.forEach(imgSource => {
      const image = document.createElement('img') //create node element from each of the strings
      image.src = imgSource
       //json is object and json.message is going to show the array with 4
       //console.log(image) //recommend using console.log
       div.appendChild(image)
      
      })
    }
  
    function fetchBreeds(){
        return fetch(imgUrl)
        .then(resp => resp.json())
        .then(breeds => renderBreeds(breeds));
    }

    function renderBreeds(breeds){
        //console.log(breeds.message) // this is returning an array of dog url image sources and their breeds are inside
        const ul = document.getElementById('dog-breeds')
        const li = document.createElement('li')
        const li1 = document.createElement('li')
        const li2 = document.createElement('li')
        const li3 = document.createElement('li')
        //console.log(li)
        const breed = breeds.message[0].split("/")
        const breed1 = breeds.message[1].split("/")
        const breed2 = breeds.message[2].split("/")
        const breed3 = breeds.message[3].split("/")
        //function things(){
        const thing = breed[4]
        const thing1 = breed1[4]
        const thing2 = breed2[4]
        const thing3 = breed3[4]
        //console.log(thing1)
        //let allBreeds = function things()
        //}
        //const breed = breeds.message[0].split("/").slice(30)
        //console.log(breed)
        li.innerHTML = thing
        li1.innerHTML = thing1
        li2.innerHTML = thing2
        li3.innerHTML = thing3
        ul.appendChild(li)
        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
    }

    function changeColor(){
        let li = document.querySelectorAll('li')
        console.log(document.querySelectorAll('li'))
      //if (li.addEventListener("click" === true)) {
         colorChanged()
      }
      //}
    
      //function colorChanged(){
      //  document.getElementById("li").style.color = "blue";
      //}

      function colorChanged(){
          document.getElementById("li").onclick = function(){
             document.getElementById("li").style.color = "blue";
        }


document.addEventListener('DOMContentLoaded', function() {
    fetchImages() 
    fetchBreeds()
    changeColor()
  })