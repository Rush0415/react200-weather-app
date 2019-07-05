
// const defaultState = {
//   cityInput: '',
//   lat: '',
//   lon: '',
//   temp: '',
//   pressure: 1013,
//   humidity: 100,
//   temp_min: '',
//   temp_max: '',
//   windSpeed: '',
//   history: []
// };

// export default function searchReducer(state = defaultState, action) {
//   const { type, payload } = action;

//   switch (type) {
//     case 'GET_WEATHER_FULFILLED': {
//       return {
//         ...state,
//         cityData: payload.data,
//         cityInput: payload.data.name,
//         lat: payload.data.coord.lat,
//         lon: payload.data.coord.lon,
//         temp: payload.data.main.temp,
//         pressure: payload.data.main.pressure,
//         humidity: payload.data.main.humidity,
//         temp_min: payload.data.main.temp_min,
//         temp_max: payload.data.main.temp_max,
//         windSpeed: payload.data.wind.speed,
//         history: [...state.history, {
//           cityInput: payload.data.name,
//           date: new Date().toLocaleString()
//         }]
//       };
//     }

//     case 'UPDATE_CITY': {
//       return {
//         ...state,
//         city: payload.city,
//       };
//     }

//     default: return state;
//   }
// }
const defaultState = {
  city: '',
  lat: '',
  lon: '',
  temp: 0,
  pressure: 0,
  humidity: 0,
  lowestTemp: 0,
  highestTemp: 0,
  wind: 0,
  history: []
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_WEATHER_FULFILLED': {
      return {
        ...state,
        city: payload.data.name,
        lat: payload.data.coord.lat,
        lon: payload.data.coord.lon,
        temp: payload.data.main.temp,
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity,
        lowestTemp: payload.data.main.temp_min,
        highestTemp: payload.data.main.temp_max,
        wind: payload.data.wind.speed,
        history: [
          ...state.history,
          {
            city: payload.data.name,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
          }
        ]
      };
    }
    case 'UPDATE_CITY': {
      return {
        ...state,
        city: payload.city
      };
    }
    default: {
      return state;
    }
  }
}

