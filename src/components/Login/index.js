import { connect } from 'react-redux';

import Login from './Login';

import { fetchNewUser } from "../../store/actions";

function mapDispatchToProps(dispatch, ownProps) {
    return {
        regNewUser: user => dispatch(fetchNewUser(user), ownProps.push),
    };
}
export default connect(null, mapDispatchToProps)(Login);