// init weather object

const weather = new Weather('London')

weather.getWeather()
.then(res =>console.log(res))
.catch(err => console.log(err));