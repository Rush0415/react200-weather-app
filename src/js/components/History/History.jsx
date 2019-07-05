import React, { Component } from 'react';

export default class SearchHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    return (
      <div className='container'>
        <div className='card'>
          <div className='card-header'>Search History</div>
          <div className='card-body'>
            <ul>
              {
                history.map((search, index) => {
                  return (
                    <li key={index}>
                      <p>{search.city } - {search.date} - {search.time}</p>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
