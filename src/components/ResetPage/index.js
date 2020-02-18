import { connect } from 'react-redux';

import ResetPage from "./ResetPage";

import {fetchResetNewPass} from "../../store/actions";

function mapDispatchToProps(dispatch) {
    return {
        resetPass: (pass, email, token) => dispatch(fetchResetNewPass(pass, email, token)),
    };
}

export default connect(null, mapDispatchToProps)(ResetPage);