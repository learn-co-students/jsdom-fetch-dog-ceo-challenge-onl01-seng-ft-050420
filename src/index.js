console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let dogBreeds = []

function fetchImages(){
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImage(json)); 
  
  }

  function renderImage(json) {
    
    const div = document.getElementById('dog-image-container')
      json.message.forEach(imgSource => {
      const image = document.createElement('img') 
      image.src = imgSource
    
       div.appendChild(image)
      
      })
    }
  
    function fetchBreeds(){
        return fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(breeds => {
            dogBreeds = Object.keys(breeds.message)
            renderBreeds(dogBreeds)
            changeColor()
            filterBreeds()
        });
        
    }

    function renderBreeds(breeds){
        
         const ul = document.getElementById('dog-breeds')
         breeds.forEach(breed => {
             const li = document.createElement('li')
             li.innerHTML = breed
             ul.appendChild(li)
          })
        


    }

    function changeColor(){
        let li = document.querySelectorAll('li')
        
     
         colorChanged(li)
      }

      function colorChanged(lis){
          
        lis.forEach(li => {
            li.onclick = function(e){ 
                
                e.target.style.color = "blue"; 
           }
        })
            
    }

function selectBreedStartingWithLetter(letter){
        renderBreeds(breeds)
}

    function filterBreeds(){
        let dropDown = document.getElementById("breed-dropdown")
        let letters = document.querySelectorAll("option")
        let filteredBreeds = []
        dropDown.onclick = function(e){
            let letter = e.target.value
            
            let breedsElements =  document.querySelectorAll('li')
            
            let breeds = []
            
         let allBreeds = document.getElementById('dog-breeds')
         
          allBreeds.innerHTML = "" //makes it all disappear
         
             breedsElements.forEach(element => {
           
               return breeds.push(element.innerHTML)
               
             })
             console.log(breeds)
              breeds.forEach(breed => {
                 
                 if (breed.split("")[0] === letter){
                     
                     let ul = document.querySelector('#dog-breeds')
                     let li = document.createElement('li')
                     
                     li.innerHTML=breed
                     
                     
                     //renderBreeds(breeds)
                     
                     ul.appendChild(li)
                     
                    
                 }
                 
                 })
              
        }
        
       
    }
    
       
      
    

document.addEventListener('DOMContentLoaded', function() {
    fetchImages() 
    fetchBreeds()
    
})