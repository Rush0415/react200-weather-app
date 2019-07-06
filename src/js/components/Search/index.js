import { connect } from 'react-redux';
import Search from './search';

function mapStoreToProps(store) {
  return {
    searchTarget: store.search.searchTarget
  };
}

export default connect(mapStoreToProps)(Search);


// import { connect } from 'react-redux';
// import Search from './search';

// function mapStoreToProps(store) {
//   return {
//     city: store.search.city
//   };
// }

// export default connect(mapStoreToProps)(Search);
