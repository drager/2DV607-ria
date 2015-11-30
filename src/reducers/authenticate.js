import initialState from './../initialState'
const authentication = (state, action) =>{
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'successValidation':
            newState.isLoggedIn = true;
            return newState;
        case 'logout':
            newState.isLoggedIn = false;
            return newState;
        default:
        return state || initialState().loginState;
    }
};

export default authentication
