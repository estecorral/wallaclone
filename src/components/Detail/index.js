import Detail from "./Detail";
import {connect} from "react-redux";
import { fetchAd } from "../../store/actions";
import {getAd} from "../../store/selectors";

function mapStateToProps(state) {
    return {
        ad: getAd(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAd: (id) => dispatch(fetchAd(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);