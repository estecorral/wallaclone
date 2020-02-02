import { connect } from 'react-redux';
import { registUser } from '../../store/selectors';

import Register from './Register';
import { fetchNewUser } from "../../store/actions";

function mapStateToProps(state) {
    return {
        regUser: registUser(state),
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        regNewUser: user => dispatch(fetchNewUser(user), ownProps.push),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);