import UserAnuncios from "./UserAnuncios";
import {connect} from "react-redux";
import {getAllAdsUser, getSession} from "../../store/selectors";
import { fetchAds, fetchDeleteAd } from "../../store/actions";

function mapStateToProps(state, ownProps) {
    return {
        ads: getAllAdsUser(state)(ownProps.match.params.username),
        session: getSession(state),
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        getAds: () => dispatch(fetchAds(), ownProps.push),
        deleteAd: (id, name, token) => dispatch(fetchDeleteAd(id, name, token), ownProps.push),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAnuncios);