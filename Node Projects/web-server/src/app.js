const path=require('path') // node module to help us get file path. Refer node docs

const express =require('express') // express is a function. 
const hbs=require('hbs')
// console.log(path.join(__dirname,'../public')) // joins two path or join something to a file path

const app=express(); // Call the express function to create a new express application
// assigns All the express methods to const app

const publicDir=path.join(__dirname,'../public') // path of public dir 
const viewsPath=path.join(__dirname,'../templates/views') // Path of the dir where the views are 
const partialsPath=path.join(__dirname,'../templates/partials') // Path of partials dir


app.set('view engine','hbs') // setting the template engine to hbs
app.set('views',viewsPath)// letting the express know where to look for the views
hbs.registerPartials(partialsPath) // allows us to use the partials 

// set allows us to set few express settings. View engine tells express which template engine we are using to render dynamic pages
app.use(express.static(publicDir))

// way to customize the server to serve up that public folder
// The above will make the index.html page show on the root route. As index.html is interpreted by node as a root file.
// So app.get() below will not show and will be replaced by index.html
// but the help.html and about.html do not replace the app.get() of the /help and /about route
// It was only happening because of index.html as server thinks index.html means root so it replaces the app.get for root
// static is used for static websites only. Once that do not change dynamically


// app.get('', (request,response)=>{ 
// // get() lets us tell the server what it should do when someone enters a specific URL
// // it takes a callback and the url(route). Basically at the given URL, What should the server do or what it should give to the browser
// // empty means this is the root/home/main route of the url
// // other routes would /about or /help etc
// // The callback is where we decide what we want to do when someone vists this route
// // Request: is an obj containing data of the incoming request to the server
// // response: contains methods allowing us to work on what we want to send back to the requester
// // Based on what is sent in the request, we can decide what response to send using the response param
   
// response.send('Hello Express') // Simple method to send something back to the requester
// // It can be text(like in this case), HTML for the browser to render, JSON(depends on the requester) etc. 


// })


// app.get('/help',(req,res)=>{

// res.send('<h1>This is the help page</h1>') // HTML sent

// })

// app.get('/about',(req,res)=>{
// res.send([{    //Array of JSON sent. The server does the parsing to string and json for us
//     name:'Shantanu',
//     age:20
// },
// {
//     name:'Paul',
//     age:20
// }])    
// })

app.get('',(req,res)=>{
    res.render('index', { // This object will allow to dynamically add values to hsb file
        Pagetitle:'Weather App', // we can dynamically change these values.
        name:'Shantanu'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        Pagetitle:'About Me',
        name:'Shantanu'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        message:'I am ready to help!',
        Pagetitle:'Help Page',
        name:'Shantanu'
    })
})
app.get('/weather',(req,res)=>{
res.send({
    location: 'Mumbai',
    forecast: 'Clear sky'
})
})

app.get('/help/*',(req,res)=>{
res.render('error',{
errorText:'Error: Page Not Found',
Pagetitle:'404 Error',
    name:'Shantanu'
}) // when no page inside /help isnt found. SO any page under /help will show this
})
    
app.get('*',(req,res)=>{ // * means everything. It is important to put this get() last as the computer will only reach here if above routes are not found,
    // So if above are not found, then for any other route it should display this 
res.render('error',{
    errorText:'Error: Page Not Found',
    Pagetitle:'404 Error',
    name:'Shantanu'
})
})
    
app.listen(3000,()=>{// start a server on the specified port
 console.log('Server is up on 3000') // this callback is optional. Runs when server is up. Not displayed in the browser but in the terminal here
})

// if we visit localhost:3000, we'll see whats sent in the empty path send
// localhost:3000/help,localhost:3000/about,localhost:3000/weather will display on the browser the text we have sent in each case.