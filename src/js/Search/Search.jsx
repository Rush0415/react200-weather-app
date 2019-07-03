import React from 'react';

export default class Search extends React.Components {
  render() {
    return (
      <div className='container'>
        <div className='row-btn-group'>
          <button className='btn-btn-primary'>San Diego</button>
          <button className='btn-btn-primary'>New York</button>
          <button className='btn-btn-primary'>Washington D.C.</button>
          <button className='btn-btn-primary'>London</button>
          <button className='btn-btn-primary'>Tokyo</button>
        </div>
      </div>
    );
  }
}
