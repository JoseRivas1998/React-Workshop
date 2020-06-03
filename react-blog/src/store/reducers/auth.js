import * as actionTypes from '../actions/actionTypes';
import * as utility from '../../util/utility';

const initialState = {
    signingUp: false,
    error: false,
    token: '',
    userId: '',
    refreshToken: '',
    username: ''
};

const authStartAuth = (state, action) => {
    return utility.updateObject(state, {
        signingUp: true,
        error: false
    });
};

const authError = (state, action) => {
    return utility.updateObject(state, {
        signingUp: false,
        error: true,
        token: '',
        userId: '',
        refreshToken: '',
        username: ''
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START_AUTH:
            return authStartAuth(state, action);
        case actionTypes.AUTH_FAIL:
            return authError(state, action);
        default:
            return state;
    }
};

export default reducer;