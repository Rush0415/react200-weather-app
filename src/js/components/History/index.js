import { connect } from 'react-redux';
import History from './history';

function mapStoreToProps(store) {
  return {
    history: store.search.history,
    cityInfo: store.search.cityInfo
  };
}

export default connect(mapStoreToProps)(History);
