const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname,'..', 'public')))

app.get('/weather', (req, res) => {
    
    geocode(req.query.address, (error, {longitude, latitude, location} = {}) => {
        if(error){
          return console.log(error)
        }
      
            forecast(longitude,latitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
            })
        })
    
    res.send({
        forecast: 'its snowing',
        location: 'Malta',
        address: req.query.address
    })

})

app.get('/products', (req, res) => {
    console.log(req.query)
    res.send({
        products:[]
    })
})

app.listen(3000, () => {
    console.log('Server is up')
})