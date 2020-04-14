import React from 'react';
import { connect } from 'react-redux';

import LoginSignUpDropDown from './LoginSignUpDropDown/LoginSignUpDropDown';

const accountDropDown = (props) => {
    if (props.signedIn) {
        return null;
    }
    return <LoginSignUpDropDown/>;
};

const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.username.length > 0
    };
};

export default connect(mapStateToProps)(accountDropDown);
