const request=require('postman-request')
const forecast=(lat,long,callback)=>{

    const url=`http://api.weatherstack.com/current?access_key=cd0e4e26baccd515e75ab58e1a956fb2&query=${lat},${long}`
     request({url,json:true},(err,{body})=>{ // res is destructured to get only body and url:url --> url as same name
         if(err){
             callback('Unable to connect to internet. Check your Connection',undefined)
         }
         else if(body.error){
             callback(`${body.error.type} : ${body.error.info}`,undefined)
         }
         else {
            const currentData=body.current
            callback(undefined,`${currentData.weather_descriptions[0]} : It is currently ${currentData.temperature} but it feels like ${currentData.feelslike}`)
         }
     })

}

module.exports=forecast