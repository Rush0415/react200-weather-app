require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/weather/:cityTarget', (req, res) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.cityTarget}&APPID=${process.env.WEATHER_KEY}&units=imperial`)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

module.exports = app;
