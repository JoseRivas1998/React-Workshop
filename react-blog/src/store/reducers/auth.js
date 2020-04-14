const initialState = {
    signingUp: false,
    error: false,
    token: '',
    userId: '',
    refreshToken: '',
    username: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;