import { connect } from 'react-redux';

import HomeAnuncios from './HomeAnuncios';
import {getAllAds, getAllTags} from "../../store/selectors";
import {fetchAds, fetchTags} from "../../store/actions";

function mapStateToProps(state) {
    return {
        ads: getAllAds(state),
        tags: getAllTags(state),
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        getAllAds: () => dispatch (fetchAds(), ownProps.push),
        getAllTags: () => dispatch (fetchTags(), ownProps.push),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeAnuncios);