import { connect } from 'react-redux';
import History from './history';

function mapStoreToProps(store) {
  return {
    history: store.search.history,
    // city: store.search.city
  };
}

export default connect(mapStoreToProps)(History);
