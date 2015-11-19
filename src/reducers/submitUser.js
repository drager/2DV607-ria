/**
 * Created by dav on 2015-11-19.
 */
import initialState from './../initialState'
import authenticate from './../components/authenticate'
const submitUser = (state, action) =>{
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'submitUser':
            newState.email = state.email;
            newState.password = state.password;
            newState.username = state.username;
            return newState;
        default:
            return state || initialState().userState;
    }
};

export default submitUser