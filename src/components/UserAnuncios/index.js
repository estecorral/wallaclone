import UserAnuncios from "./UserAnuncios";
import {connect} from "react-redux";
import { getAllAdsUser } from "../../store/selectors";
import { fetchAds } from "../../store/actions";

function mapStateToProps(state, ownProps) {
    return {
        ads: getAllAdsUser(state)(ownProps.match.params.username),
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        getAds: () => dispatch(fetchAds(), ownProps.push),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAnuncios);