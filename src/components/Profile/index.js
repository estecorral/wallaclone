import Profile from "./Profile";
import {connect} from "react-redux";
import {getSession} from "../../store/selectors";

function mapStateToProps(state) {
    return {
        session: getSession(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);