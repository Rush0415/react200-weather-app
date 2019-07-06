const axios = require('axios');

export const getWeather = (searchTarget) => ({
  type: 'GET_WEATHER',
  payload: axios.get(`/weather/${searchTarget}`)
});

export const updateCity = (searchTarget) => ({
  type: 'UPDATE_CITY',
  payload: { searchTarget }
});



// const axios = require('axios');

// export const getWeather = (city) => ({
//   type: 'GET_WEATHER',
//   payload: axios.get(`/weather/${city}`)
// });

// export const updateCity = (city) => ({
//   type: 'UPDATE_CITY',
//   payload: { city }
// });
