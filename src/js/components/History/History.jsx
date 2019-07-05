// export default class History extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     // These values were provided by connect()
//     const { history } = this.props;
//     return (
//       <div>
//         <h5 className='card-header text-white bg-primary mb-3'>Search History</h5>
//         <div className='card-body'>
//           <ul className='list-unstyled'>
//             { history.map((histories, index) => (
//               <li key={ index }>
//                 <p>{ histories.cityInput } - { histories.date }</p>
//               </li>
//               )
//             )}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
import React, { Component } from 'react';

export default class History extends Component {
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
                    <li key={ index }>
                      <p>{ search.city } - { search.date } - { search.time }</p>
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
