document.querySelector('.get-jokes').addEventListener('click',getJokes)
// button usually submits the form by default. But we are not submitting the form, rather calling the getJokes func. on click using a eventlistener


function getJokes(e){
const number = document.querySelector('#number').value // fetching the number from the input tag with id number
const xhr= new XMLHttpRequest();

xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true) // initialises a request. ('method','API',async or no(bool))

xhr.onload= function(){
    if(this.status===200)
    {
        const response = JSON.parse(this.responseText);

       let jokeList=''
       if(response.type==='success')
       {
           

           if(Array.isArray(response.value)) // when number is specified, return array of obj. else return an obj 
           {
            response.value.forEach(jokes => {
                jokeList+=`<li>${jokes.joke}</li>`
            
           }) }

           else{
            jokeList+=`<li>${response.value.joke}</li>`
        
        }
    }
        else{
            jokeList+=`<li>Oops something went wrong</li>`
        }

       document.querySelector('.jokes').innerHTML=jokeList


    }
}

xhr.send();

e.preventDefault() // prevents the default behavior of the button i.e submit the form


}