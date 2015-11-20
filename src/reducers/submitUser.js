/**
 * Created by dav on 2015-11-19.
 */
import initialState from './../initialState'

const submitUser = (state, action) =>{
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'successValidation':
            newState.email = state.email;
            newState.password = state.password;
            return newState;
        default:
            return state || initialState().userState;
    }
};

export default submitUser