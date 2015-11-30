import initialState from './../initialState';

const authentication = (state, action) => {
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'LOGIN':
            newState.isLoggedIn = true;
            return newState;
        case 'LOGOUT':
            newState.isLoggedIn = false;
            return newState;
        default:
        return state || initialState().loginState;
    }
};

export default authentication;
