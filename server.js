const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = 'd3cc0be354d6a2f6a44153d2f6f86b46';
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs', 'css')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`




  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

  const apiKey1 = 'e35cd51115bf2ea9a616f0d9610c78db'
  app.use(express.static('public'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.set('view engine', 'ejs')

  let url ='http://apilayer.net/api/live?access_key=${apiKey1}&currencies=EUR,GBP,CAD,PLN&source=USD&format=1'

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
