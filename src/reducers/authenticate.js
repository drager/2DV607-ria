/**
 * Created by dav on 2015-11-16.
 */
import initialState from './../initialState'
const authentication = (state, action) =>{
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'login':
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