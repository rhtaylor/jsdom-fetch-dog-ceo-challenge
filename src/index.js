document.addEventListener('DOMContentLoaded', (event) => {
        runFunctionsForPage()
        letTheDogsOut()
        
       
});

function letTheDogsOut(){  
   
    const url = "https://dog.ceo/api/breeds/image/random/4"
    fetch(url)
}

function runFunctionsForPage(){  
     
    fetchDogBreeds() 
    function pullDogs(arg) {  
        let doggosGoHere = document.getElementById("dog-breeds");
       lis = document.querySelectorAll("li") 
       lis.forEach(element => { 
           if (element.innerText[0] === arg){ 
               doggosGoHere.appendChild(element)

           } 
           
       });
    } 

    

}
 

function filterDogs(letter){  
    
    fetch('https://dog.ceo/api/breeds/image/random/4').then(function (response) {
        return response.json();
    }).then(function (json) {
        arrayOfDogs = json.message 
        console.log(arrayOfDogs) 
        
        let doggosGoHere = document.getElementById("dog-image-container");
        let li = document.createElement("li")
        let img = document.createElement('img') 
       
        for(let i = 0; i < arrayOfDogs.length; i++){
            
            let img = document.createElement('img')
            img.src = arrayOfDogs[i] 
            img.setAttribute("id", i) 
            doggosGoHere.appendChild(img)
        };
    });   
     
}
    function fetchDogBreeds(){ 
        let selected = document.getElementById("breed-dropdown")

        selected.addEventListener("click", (event) => {
            console.log(event)
            let letter = event.target.value
            let doggosGoHere = document.getElementById("dog-breeds");
            pullDogs(letter)
        });   

       let ulForBreeds = document.getElementById("dog-breeds")
       fetch('https://dog.ceo/api/breeds/list/all') 
       .then((response) =>{ 
       return response.json();}) 
        .then( (jSON) => {  
            document.addEventListener("fetch", e => console.log("success", e))
            document.getElementById  
            dogKeys =  Object.keys(jSON.message) 
                 
            dogKeys.forEach(element => { 
                if (jSON.message[`${element}`]){  
                console.log("YES") }
               li =  document.createElement("li")  
               li.setAttribute('id', element)
               li.addEventListener("click", function(){ 
                console.log("li ", li, "this ", this)   
                this.style.color = "red"})
               li.innerHTML = element 
               ulForBreeds.appendChild(li)
            });
             
            function changeColor() {
                li.style.color = "red"
            }

        });
        
       
    }

function pullDogs(arg) {
    newFetch = fetch('https://dog.ceo/api/breeds/list/all')  
    .then((response) => { return response.json(); }) 
    .then((json) => { 

        let doggosGoHere = document.getElementById("dog-breeds");  
        doggosGoHere
        keys = Object.keys(json.message)  
        
        lis = document.querySelectorAll("li") 
        
        keys.forEach(element => { 
            if (element[0][0] === arg) { 
                newElement = document.createElement("li");
                newElement.innerText = element
                doggosGoHere.appendChild(newElement)
            } 
       
    }); 
        lis.forEach(liEle => {
            if (liEle[0] != arg) {
                doggosGoHere.removeChild(liEle)
            }
   
    }); 
    });
} 