const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZ2lsYjE2NCIsImEiOiJja3VlOGtlbDcxZXNuMm9teHVkbXBkeTZvIn0.BAKmc26ugJqmYCGvDduVEQ&limit=1'
  
    request({ url: url, json: true}, (error, {body}) => {
        if(error){
          callback('unable to location service!', undefined)
        } else if( body.features[0].length === 0){
          callback('location not found'), undefined
        }else{
          callback(undefined, {
            longitude: body.features[0].center[0],
            latitude: body.features[0].center[1],
            location: body.features[0].place_name
          })
        }
    })
    
  }
  

  module.exports = geocode