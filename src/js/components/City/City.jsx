import React, { Component } from 'react';

export default class City extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { city, lat, lon, temp, pressure, humidity, lowestTemp, highestTemp, wind } = this.props;

    return (
      <div className='container'>
        <div className='card'>
          <div className='card-header'>City Information</div>
          <div className='card-body'>
            <div className='h5'>{city}</div>
            <p>Lat/Long:{lat},{lon}</p>
            <hr />
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
    )
  }
}
