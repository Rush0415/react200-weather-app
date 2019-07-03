import React from 'react';
// import City from './components/City';
// import History from './components/History';
// import Search from './components/Search';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3'>Weather Application</h1>
          <p className='col-12'>Always know if you'll need an umbrella!</p>
        </div>

        <Search />

        <div className='row'>
          <City />

          <History />
        </div>
      </div>
    );
  }
}
