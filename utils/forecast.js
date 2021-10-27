const request = require('request')

const forecast = (lat, long, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=34d7be9ff6094837b1d52f7f36df8c62&query='+ long + ','+ lat +' &units=f'

request({ url, json:true }, (error, {body}) => {
    //console.log(response)
  if(error) {
   callback('error here', undefined)
  } else if (body.error){
    callback('unable to find location', undefined)
  }else {
   callback(undefined,body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ".  It feels like " + body.current.feelslike)
  }
  
})
}


module.exports = forecast