
import * as actionTypes from './actionTypes';

const start_auth = () => {
    return {
        type: actionTypes.AUTH_START_AUTH
    };
};

const auth_error = () => {
    return {
        type: actionTypes.AUTH_FAIL
    }
};

export const signup = (email, username, password) => {
    return dispatch => {
        dispatch(start_auth());
        setTimeout(() => {
            dispatch(auth_error());
        }, 1000);
    };
};
