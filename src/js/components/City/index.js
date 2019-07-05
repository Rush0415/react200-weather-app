// import { connect } from 'react-redux';
// import City from './City';

// function mapStoreToProps(store) {
//   return {
//     cityInput: store.weather.cityInput,
//     lat: store.weather.lat,
//     lon: store.weather.lon,
//     temp: store.weather.temp,
//     pressure: store.weather.pressure,
//     humidity: store.weather.humidity,
//     temp_min: store.weather.temp_min,
//     temp_max: store.weather.temp_max,
//     windSpeed: store.weather.windSpeed
//   };
// }

// export default connect(mapStoreToProps)(City);
import { connect } from 'react-redux';
import City from './City';

function mapStoreToProps(store) {
  return {

    city: store.search.city,
    lat: store.search.lat,
    lon: store.search.lon,
    icon: store.search.icon,
    temp: store.search.temp,
    pressure: store.search.pressure,
    humidity: store.search.humidity,
    lowestTemp: store.search.lowestTemp,
    highestTemp: store.search.highestTemp,
    wind: store.search.wind
  };
}

export default connect(mapStoreToProps)(City);
