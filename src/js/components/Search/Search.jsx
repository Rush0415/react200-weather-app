// import React, { Component } from 'react';

// import {
//   getWeather,
//   updateCity
// } from './searchActions';

// export default class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.handleInput = this.handleInput.bind(this);
//     this.handleSearch = this.handleSearch.bind(this);
//     this.handleButton = this.handleButton.bind(this);
//   }


//   handleInput(event) {
//     const { dispatch } = this.props;
//     const { value } = event.target;
//     dispatch(updateCity(value));
//   }

//   handleSearch() {
//     const { dispatch, city } = this.props;
//     dispatch(getWeather(city));
//   }

//   handleButton(event) {
//   event.preventDefault();
//   const { dispatch } = this.props;
//   const { value } = event.target;
//   dispatch(getWeather(value));
//   }


//   render() {
//     return (
//       <div className='container'>
//         <div className='row btn-group'>
//           <button className='btn btn-outline-light' onClick={ this.handleButton } value='San Diego'>San Diego</button>
//           <button className='btn btn-outline-light' onClick={ this.handleButton } value='New York'>New York</button>
//           <button className='btn btn-outline-light' onClick={ this.handleButton } value='Washington'>Washington D.C.</button>
//           <button className='btn btn-outline-light' onClick={ this.handleButton } value='London'>London</button>
//           <button className='btn btn-outline-light' onClick={ this.handleButton } value='Tokyo'>Tokyo</button>
//           <button className='btn btn-outline-light' onClick={ this.handleButton } value='Los Angeles'>Los Angeles</button>
//           <button className='btn btn-outline-light' onClick={ this.handleButton } value='Poway'>Poway</button>
//           <button className='btn btn-outline-light' onClick={ this.handleButton } value='Van nuys'>Van nuys</button>
//           <button className='btn btn-outline-light' onClick={ this.handleButton } value='burbank'>Burbank</button>
//         </div>
//         <div className='row'>
//           <div className='input-group'>
//             <input type='text' className='form-control' placeholder='Enter Your City' onChange={ this.handleInput } />
//             <div className='input-group-append'>
//               <button className='btn btn-outline-light' type='button' onClick={ this.handleSearch }>Go!</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }





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

  handleInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCity(value));
  }

  handleSearch() {
    const { dispatch, city } = this.props;
    dispatch(getWeather(city));
  }

  handleButton(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(getWeather(value));
  }

  render() {
    return (
      <div className='container'>
        <div className='row btn-group'>
          <button className='btn btn-primary' onClick={ this.handleButton } value='San Diego'>San Diego</button>
          <button className='btn btn-primary' onClick={ this.handleButton } value='New York'>New York</button>
          <button className='btn btn-primary' onClick={ this.handleButton } value='Washington'>Washington D.C.</button>
          <button className='btn btn-primary' onClick={ this.handleButton } value='London'>London</button>
          <button className='btn btn-primary' onClick={ this.handleButton } value='Tokyo'>Tokyo</button>
          <button className='btn btn-primary' onClick={ this.handleButton } value='Los Angeles'>Los Angeles</button>
          <button className='btn btn-primary' onClick={ this.handleButton } value='Poway'>Poway</button>
          <button className='btn btn-primary' onClick={ this.handleButton } value='Van nuys'>Van nuys</button>
          <button className='btn btn-primary' onClick={ this.handleButton } value='burbank'>Burbank</button>
        </div>
        <div className='row'>
          <div className='input-group'>
            <input type='text' className='form-control' placeholder='Enter Your City' onChange={ this.handleInput } />
            <div className='input-group-append'>
              <button className='btn btn-primary' type='button' onClick={ this.handleSearch }>Go!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
