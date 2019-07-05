// import React from 'react';

// export default class City extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const {
//       cityInput,
//       lon,
//       lat,
//       temp,
//       pressure,
//       humidity,
//       temp_min,
//       temp_max,
//       windSpeed
//     } = this.props;

//     return (
//       <div>
//         <div className='card'>
//           <h5 className='card-header text-white bg-primary mb-3'>City Information</h5>
//           <div className='card-body'>

//             <h3 className='card-title text-center text-secondary'>{ cityInput }</h3>
//             {/* <div className='d-flex justify-content-center'>{getIcon()}</div> */}
//             <p className='card-text text-center'>Latitude and Longitude: {lat}, {lon}</p>
//             <div className='row'>
//               <div className='col'>
//                 <h6 className='text-center'>Temperature (F)</h6>
//                 <p className='text-center text-success font-weight-bold'>{ temp }°F</p>
//               </div>
//               <div className='col'>
//                 <h6 className='text-center'>Pressure</h6>
//                 <p className='text-center text-success font-weight-bold'>{ pressure }mb</p>
//               </div>
//               <div className='col'>
//                 <h6 className='text-center'>Humidity</h6>
//                 <p className='text-center text-success font-weight-bold'>{ humidity }%</p>
//               </div>
//             </div>

//             <div className='row'>
//               <div className='col'>
//                 <h6 className='text-center'>Lowest Temp (F)</h6>
//                 <p className='text-center text-success font-weight-bold'>{ temp_min }°F</p>
//               </div>
//               <div className='col'>
//                 <h6 className='text-center'>Highest Temp (F)</h6>
//                 <p className='text-center text-success font-weight-bold'>{ temp_max }°F</p>
//               </div>
//               <div className='col'>
//                 <h6 className='text-center'>Wind Speed</h6>
//                 <p className='text-center text-success font-weight-bold'>{ windSpeed }mph</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//     );
//   }
//   }
import React, { Component } from 'react';

export default class City extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { city, lat, lon, temp, pressure, humidity, lowestTemp, highestTemp, wind, icon } = this.props;
    
    return (
      <div className='container'>
        <div className='card'>
          <div className='card-header'>City Information</div>
          <div className='card-body'>
            <p>Lat/Long: {lat},{lon}</p>
            <div className='h5'>{city}  {icon} </div>
            <p>Lat/Long: {lat},{lon} </p>

            <div className='row'>
              <div className='col-4'>
                <h6> Temperature (F)</h6>
                <p>{temp}</p>
              </div>
              <div className='col-4'>
                <h6> Pressure </h6>
                <p>{pressure}</p>
              </div>
              <div className='col-4'>
                <h6> Humidity </h6>
                <p>{humidity}</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <h6> Lowest Temp (F) </h6>
                <p>{lowestTemp}</p>
              </div>
              <div className='col-4'>
                <h6> Highest Temp (F) </h6>
                <p>{highestTemp}</p>
              </div>
              <div className='col-4'>
                <h6> Wind Speed </h6>
                <p>{wind}</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

