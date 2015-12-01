import initialState from './../initialState';

const user = (state, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case 'SET_LOGIN_USER':
            newState.email = action.email;
            newState.password = state.password;
            return newState;
        default:
            return state || initialState().userState;
    }
};

export default user;
