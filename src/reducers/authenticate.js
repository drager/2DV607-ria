/**
 * Created by dav on 2015-11-16.
 */
import initialState from './../initialState'
const authentication = (state, action) =>{
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'login':
            console.log(newState.isLoggedIn);
            newState.isLoggedIn = true;
            console.log(newState.isLoggedIn);
            return newState;
        case 'logout':
            console.log(newState.isLoggedIn);
            newState.isLoggedIn = false;
            console.log(newState.isLoggedIn);
            return newState;
        default:
        return state || initialState().loginState;
    }
};

export default authentication