import { connect } from 'react-redux';

import HomeAnuncios from './HomeAnuncios';
import {getAllAds, getAllTags} from "../../store/selectors";
import {fetchAds, fetchTags, fetchFilterAds} from "../../store/actions";

function mapStateToProps(state) {
    return {
        ads: getAllAds(state),
        tags: getAllTags(state),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getAllAds: () => dispatch (fetchAds()),
        getAllTags: () => dispatch (fetchTags()),
        getFilterAds: (filters) => dispatch(fetchFilterAds(filters)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeAnuncios);