// client side JS file. Fetching requests to render to browser happens here

// When you submit

console.log('Client side JS file')


const form=document.querySelector('form') // Getting the form so we can prevent its default behavior 
const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')



form.addEventListener('submit',(e)=>{ // submit listener is added on the form not the submit button
e.preventDefault()// prevents form from reloading everytime we submit

const location=search.value

messageOne.textContent='Loading...'
messageTwo.textContent=''


// url below has no base url. Since we want this to work when we deploy on localhost or heroku we dont mention the base url.
// Irrespective of where it is deployed (heroku port or localhost:port) the below path will work
fetch(`/weather?address=${location}`).then((response)=>{
response.json().then((data)=>{
if(data.error){
    messageOne.textContent=`${data.error}`
}else{
    messageOne.textContent=`Location :${data.location}`
    messageTwo.textContent=`The Forecast : ${data.fCast}`

}
})
})


})