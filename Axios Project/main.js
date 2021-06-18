// Event Listeners

document.getElementById('get').addEventListener('click',getTodos)
document.getElementById('post').addEventListener('click',addTodo)
document.getElementById('update').addEventListener('click',updateTodo)
document.getElementById('delete').addEventListener('click',removeTodo)
document.getElementById('sim').addEventListener('click',getData)
document.getElementById('headers').addEventListener('click',customHeaders)
document.getElementById('transform').addEventListener('click',transformResponse)
document.getElementById('error').addEventListener('click',errorHandling)
document.getElementById('cancel').addEventListener('click',cancelToken) 


// To show output in browser
function showOutput(res){
    document.getElementById('res').innerHTML=`
    
<div class="card card-body mb-4">
<h5>Status: ${res.status}</h5>
</div>
<div class="card mt-3">
<div class="card-header">
    Headers
</div>
<div class="card-body">
    <pre>${JSON.stringify(res.headers, null,2)}</pre>
</div>
</div>

<div class="card mt-3">
<div class="card-header">
    Data
</div>
<div class="card-body">
    <pre>${JSON.stringify(res.data, null,2)}</pre>
</div>
</div>

<div class="card mt-3">
<div class="card-header">
    Config
</div>
<div class="card-body">
    <pre>${JSON.stringify(res.config, null,2)}</pre>
</div>
</div> 
    `;
}
// AXIOS GLOBALS
// Allows us to set some global values. Most commonly used to set the server generated jwt token when you login as a global so that we can use it for every protected route 
axios.defaults.headers.common['AuthToken'] ='sometoken123'



// GET request

async function getTodos(){ 
// Using a long method here by passing method,url,params as part of an obj arg into axios which returns a promise
//    try{ const axiosResponse = await axios({ 
//         method:'get',
//         url:'http://jsonplaceholder.typicode.com/todos',
//         params:{
//             _limit:5
//         }

//     })

// showOutput(axiosResponse)  
// }catch(e){

// console.log(e)
// } 

// A Much Faster way than above. Directly use .get and pass the params in the url
try {
    const res = await axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5',{timeout : 5000}) // we can add timeout as a key in the options obj argument. set to 5s here
showOutput(res)
} catch (error) {
    console.log(error)
}


}

// POST request
async function addTodo(){
    try { // 2nd arg is an object with the data being sent 
        const res = await axios.post('http://jsonplaceholder.typicode.com/todos?_limit=5',{
            title:'New Todo',
            completed:false

        })
        showOutput(res)
    } catch (e) {
        console.log(e)
    }
}

//PUT/PATCH request PUT replaces the whole resourse, PATCH replace only that is specified in data
async function updateTodo(){
    try {
        const res = await axios.patch('http://jsonplaceholder.typicode.com/todos/1',{
            title:'updated todo',
            completed:true
        })
      showOutput(res)

    } catch (e) {
        console.log(e)
    }
}

// DELETE 
async function removeTodo(){
   try{
const res = await axios.delete('http://jsonplaceholder.typicode.com/todos/1')
   showOutput(res)
}catch(e){
       console.log(e)
   }
}


// Getting simultaenous data

async function getData(){ // .all allows us to make simulataenous requests and the response of each is stored inside an array
    // response of first get call will be stored in index 0 and 2nd one in index 1 of the array
  // const [todos,posts] stores the 0 index in todos and 1 index in posts, so the first get req goes in first const i.e todos, 2nd get req goes in 2nd const i.e posts
  
    try{  const [todos,posts] = await axios.all([
        axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5'), // response gets stored in todos i.e first const
        axios.get('http://jsonplaceholder.typicode.com/posts?_limit=5') // Response gets stored in posts i.e 2nd const
    ])

    console.log(todos,posts)
    showOutput(todos) // Outputing the first one

} catch(e){
    console.log(e)
}
}


// To pass our own data into config. Eg to send a auth token during logging in. Allows us to modify the config of the req

async function customHeaders(){
   // our custom mods to the config, passed in as 3rd arg to axios.post. This data will be shown in the config of our request
   const config ={
      headers: {'Content-Type':'application/json',
    Authorization:'sometoken'}
}
   
    try { 
        const res = await axios.post('http://jsonplaceholder.typicode.com/todos?_limit=5',{
            title:'New Todo',
            completed:false

        },config)
        showOutput(res)
    } catch (e) {
        console.log(e)
    }
}


// Transforming the res and req. rarely used. Like pre defined rule is passed to tranform respone/request 
async function transformResponse(){
const options ={
    method:'post',
    url:'http://jsonplaceholder.typicode.com/todos?_limit=5',
    data:{
        title:'hello world'
    },
    transformResponse:axios.defaults.transformResponse.concat(data =>{
        data.title=data.title.toUpperCase()
        return data
    })

}
const res = await axios(options) // will make a post req as method in options is post above
showOutput(res)
}



// ERROR HANDLING
async function errorHandling(){
    try {
        const res = await axios.get('http://jsonplaceholder.typicode.com/todoss')
         showOutput(res)
    } catch (e) {
        if(e.response){
            console.log(e.response.data) // error body
            console.log(e.response.status) // error status
            console.log(e.response.headers) // headers of the error
        }
    }
}

// TO CANCEL A REQUEST IF NEEDED rarely used
async function cancelToken(){

    const source = axios.CancelToken.source();
    try {
        const res = await axios.get('http://jsonplaceholder.typicode.com/todos',{
            cancelToken:source.token
        })
         showOutput(res)
    } catch (e) {
        console.log('test1')
        if(axios.isCancel(e)){
            console.log('test3')
            console.log('Request Cancelled',e.message)
        }
    }

    if(true){
        console.log('test2')
        source.cancel('Cancelled Req')
    }
}

// AXIOS INSTANCES
// below creates an instance with the base url predefined. The key names are fixed. That means baseURL cant be baseUrl. It has to be baseURL
// const axiosInstance = axios.create({
//     // We can have other custom settings we can add too.
//     baseURL:'http://jsonplaceholder.typicode.com'
// })

// using the above instance we can just add /comments 
// axiosInstance.get('/comments').then(res =>{
//     showOutput(res)
// })

// below is an interceptor that executes when we make a request. It can be used as a log. it can intercept request and response. Basically it runs when req is sent / res is received
axios.interceptors.request.use((config)=>{
    console.log(`${config.method.toUpperCase()} request was sent to ${config.url}`)
 return config

}, (error)=>{
    return new Promise.reject(error)
})