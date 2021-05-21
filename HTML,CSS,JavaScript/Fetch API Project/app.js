document.getElementById('button1').addEventListener('click',getText)
document.getElementById('button2').addEventListener('click',getJSON)
document.getElementById('button3').addEventListener('click',getAPI)

function getText()
{    
    
    fetch('test.txt')
    .then(function(res){  // fetch returns a promise which is an object.This object will contain specific methods in its proto such as .then() etc
        // along with this an object called promiseRespone which is passed as a param into the function inside .then()
        // in the .then() above, the promiseResponse is stored in 'res'. 
       // console.log(res) // will show the promiseResponse returned but the fetch() above
        //console.log(res.text()) // res.text() also returns a promise with the promiseResponse as the text from that file.
        // this response will be passed as a param to the function inside .then(), in this eg 'text'
        
        return res.text() // this also returns a promise so we need to chain another .then to handle that promise
    }).then(function(text){
        console.log(text)// will display the promiseResponse from the promise returned by res.text(). promiseResponse here is the file content

        document.getElementById('output').innerHTML=text
    }).catch(function(err){
        console.log(err) // To handle error if any
    })
}

function getJSON(){


    fetch('posts.json') // fetch will return a promise who promiseResponse is passed into 'res' in the .then()
    .then(function(res){ // res is the promiseResponse which is an object 
        console.log(res)
        //console.log(res.json())     
        return res.json()  // .json() returns another promise obj. This obj contains promiseResponse as the contents of the json file
    }).then(function(data){  // 'data' containes the promiseResponse. Which is the content of the json file, which is an array of obj
 
        let output =''
        data.forEach(post => { 
            output+= `<h5>${post.title}</h5> <br> <p>${post.body}</p>`
        });
     document.getElementById('output').innerHTML=output
    }).catch(function(err){
        console.log(err)
    })
}

function getAPI(){
    fetch('https://api.github.com/users') // external github api containing list of users
    .then(function(res){
        console.log( 'promiseResponse from Fetch() promise obj',res)

        return res.json() // the api has list of users as a json file, hence we use .json()

    }).then(function(users){
        console.log('promiseRespone from .json() promise object',users) // promise response from res.json promise obj
        let output=''
        users.forEach(function(user){
          output+=`<h5>${user.login}</h5>`
        })

        document.getElementById('output').innerHTML=output
    }).catch(function(err){
        console.log(err)
    })
}