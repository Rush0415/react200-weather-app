import React, { Component } from 'react';

import {
  getWeather,
  updateCity
} from './searchActions';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleInput(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateCity(value));
  }

  handleSearch() {
    const { dispatch, searchTarget } = this.props;
    dispatch(getWeather(searchTarget));
  }

  handleButton(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateCity(value));
    const { searchTarget } = this.props;
    dispatch(getWeather(searchTarget));
  }

  render() {
    return (
      <div className='container'>
        <div className='row btn-group'>
          <button className='btn btn-primary' onChange={ this.handleButton } value='San Diego'>San Diego</button>
          <button className='btn btn-primary' onChange={ this.handleButton } value='New York'>New York</button>
          <button className='btn btn-primary' onChange={ this.handleButton } value='Washington D.C.'>Washington D.C.</button>
          <button className='btn btn-primary' onChange={ this.handleButton } value='London'>London</button>
          <button className='btn btn-primary' onChange={ this.handleButton } value='Tokyo'>Tokyo</button>
        </div>
        <div className='row'>
          <div className='input-group'>
            <input type='text' className='form-control' placeholder='Enter Your City' onChange={ this.handleInput } />
            <div className='input-group-append'>
              <button className='btn btn-outline-secondary' type='button' onClick={ this.handleSearch }>Go!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// import React from 'react';

// export default class Search extends React.Components {
//   render() {
//     return (
//       <div className='container'>
//         <div className='row-btn-group'>
//           <button className='btn-btn-primary'>San Diego</button>
//           <button className='btn-btn-primary'>New York</button>
//           <button className='btn-btn-primary'>Washington D.C.</button>
//           <button className='btn-btn-primary'>London</button>
//           <button className='btn-btn-primary'>Tokyo</button>
//         </div>
//       </div>
//     );
//   }
// }
