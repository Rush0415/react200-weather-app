import { connect } from 'react-redux';
import History from './history';

function mapStoreToProps(store) {
  return {
    history: store.search.history,
    city: store.search.city,
    lat: store.search.lat,
    lon: store.search.lon

  };
}

export default connect(mapStoreToProps)(History);
