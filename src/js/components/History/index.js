import { connect } from 'react-redux';
import HistoryData from './History';

function mapStoreToProps(store) {
  return {
    history: store.search.history,
  };
}

export default connect(mapStoreToProps)(HistoryData);
