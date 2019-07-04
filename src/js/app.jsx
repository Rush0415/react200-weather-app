import React from 'react';
import City from './components/City';
import History from './components/History';
import Search from './components/Search';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3 text-center'>Weather Application</h1>
          <p className='col-12'>Always know if you'll need an umbrella!</p>
        </div>
        <div>
          <div className='row'>
            <div className='col-12'><Search /></div>
          </div>
        </div>
        <div>
          <div className='row mt-3 mb-3'>
            <div className='col-12 col-md-6 mb-3 pl-0'>
              <City />
            </div>
            <div className='col-12 col-md-6 mb-3 pr-0'>
              <History />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
