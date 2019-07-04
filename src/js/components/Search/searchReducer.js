const defaultState = {
  city: '',
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

