import Profile from "./Profile";
import {connect} from "react-redux";
import {getSession} from "../../store/selectors";
import { fetchDeleteUser } from "../../store/actions"

function mapStateToProps(state) {
    return {
        session: getSession(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteUser: (id) => dispatch(fetchDeleteUser(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);