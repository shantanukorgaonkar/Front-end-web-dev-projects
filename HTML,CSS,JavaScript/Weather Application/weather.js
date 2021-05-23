class Weather{
    constructor(city){
        this.apiKey='9ff7908e979f24d2650ab5acf09e6d03',
        this.city = city
        
    }
// Get Weather from APPI
    async getWeather(){
        const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`)
         console.log(response)
        const resData= await response.json()

    return resData
    }

    // Change Weather Location

    changeLocation(city,state){
        this.city=city
        this.state=state

    }
}