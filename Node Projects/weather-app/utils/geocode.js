
// Geocding - converting an address into latitude and longitude
const request=require('postman-request')
const geocode = (address,callback)=>{
    
    const geoURL=`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidGVzdGVyYm90IiwiYSI6ImNrcGlhY2FoZTBoMWwzMXBjZDNwZmxkMTIifQ.h0PijWked4H9OWoLfrfHyA&limit=1`
    
    request({url:geoURL,json:true},(err,{body})=>{
     
    if(err){
      callback('Unable to Connect. Check your Connection', undefined)
    
    } else if(body.features.length===0){
      callback('Unable to find loaction', undefined)
    }else{
         
    const coords=body.features[0].center
    const lat=coords[1]
    const long=coords[0]
    
    coordinates={ latitude : lat,longitude:long,location:body.features[0].place_name}
    
    callback(undefined,coordinates)
    }
    
    })
    
    }

    module.exports = geocode
    