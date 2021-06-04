const request=require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address =process.argv[2] // Accepts CLI args. 'node app,js New york' New york is the arg passed
 if(!address)
 {
     console.log('Please add Location')
 }else{
geocode(address,(err,{latitude,longitude,location}={})=>{ // ={} is added so when there is no object returned here to destructure it should default to an empty obj or undefined. 
    if(err){
       return console.log(err) // Another approach instead of an else. Since return would terminate the function, this acts like if-else
    }
    forecast(latitude,longitude,(err,Fres)=>{
    
        if(err){
            return console.log(err) // same as above

        }
        console.log(location)
        console.log(Fres) // Fres is Forecast Response
})

})

 }