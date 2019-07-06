import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    city: store.search.city
  };
}

export default connect(mapStoreToProps)(Search);


// import { connect } from 'react-redux';
// import Search from './Search';

// function mapStoreToProps(store) {
//   return {
//     searchCity: store.search.searchCity
//   };
// }

// export default connect(mapStoreToProps)(Search);
