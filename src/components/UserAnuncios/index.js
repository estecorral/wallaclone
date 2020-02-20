import UserAnuncios from "./UserAnuncios";
import {connect} from "react-redux";
import {getAllAdsUser, getSession} from "../../store/selectors";
import { fetchAds, fetchDeleteAd, fetchUpdateAd, revertAds, setReservado, setVendido} from "../../store/actions";

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
        updateAd: (id, ad, token) => dispatch(fetchUpdateAd(id, ad, token)),
        revertAds: (ads) => dispatch(revertAds(ads)),
        setVendido: (id, val, token) => dispatch(setVendido(id, val, token)),
        setReservado: (id, val, token) => dispatch(setReservado(id, val, token)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAnuncios);