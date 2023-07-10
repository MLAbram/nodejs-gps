// https://www.google.com/search?q=node.js+use+mobile+gps+location&newwindow=1
// https://stackoverflow.com/questions/20012977/how-to-use-node-js-in-a-real-time-gps-tracking-application
// https://geo.fcc.gov/api/census/#!/area/get_area
// https://geo.fcc.gov/api/census/area?lat=30.6315264&lon=-97.7043456&censusYear=2020&format=json
// https://api.nasa.gov/

const express = require('express')
const app = express()
const { json } = require("body-parser")
const https = require('https')

require('dotenv').config()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).json({title: 'Node.js GPS'})
})

app.get('/fcc-geo/', (req, res) => {
  https.get('https://geo.fcc.gov/api/census/area?lat=' + '&lon=' + '&censusYear=2020&format=json', (resp) => {
    let data = ''

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk
    })

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      // console.log(JSON.parse(data).explanation)
      return res.status(200).json(JSON.parse(data))
      // return res.status(200).json(JSON.parse(data).explanation)
    })

  }).on("error", (err) => {
    return res.status(400).json({error: err.message})
    // console.log("Error: " + err.message)
  })
})

app.get('/html5-geo/', (req, res) => {
    // const paramVal = req.params

  // function getLocation() {
  //   if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(showPosition);
  //   } else { 
  //       x.innerHTML = "Geolocation is not supported by this browser.";
  //   }
  // }

  // x.innerHTML = "Latitude: " + position.coords.latitude + 
  //   "<br>Longitude: " + position.coords.longitude + 
  //   "<br><br><a href='https://www.google.com/maps/search/" + position.coords.latitude + "," + position.coords.longitude + "'>Google Maps</a>";
  
  return res.status(200).send(req.params)
})

app.get('/nasa-apod/', (req, res) => {
  https.get('https://api.nasa.gov/planetary/apod?api_key=' + process.env.NASA_API, (resp) => {
    let data = ''

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk
    })

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      // console.log(JSON.parse(data).explanation)
      return res.status(200).json(JSON.parse(data))
      // return res.status(200).json(JSON.parse(data).explanation)
    })

  }).on("error", (err) => {
    return res.status(400).json({error: err.message})
    // console.log("Error: " + err.message)
  })
})

app.listen(3000, () => {
  console.log('Server listening on port: 3000.')
})