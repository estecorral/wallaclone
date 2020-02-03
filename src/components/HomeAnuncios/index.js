import { connect } from 'react-redux';

import HomeAnuncios from './HomeAnuncios';
import { getAllAds } from "../../store/selectors";
import {fetchAds} from "../../store/actions";

function mapStateToProps(state) {
    return {
        ads: getAllAds(state),
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        getAllAds: () => dispatch (fetchAds(), ownProps.push),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeAnuncios);