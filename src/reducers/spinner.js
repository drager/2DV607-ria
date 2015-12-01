/**
 * Created by dav on 2015-12-01.
 */
import initialState from './../initialState';

const spinner = (state, action) => {
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'START_SPINNER':
            newState.spinning = true;
            return newState;
        case 'STOP_SPINNER':
            newState.spinning = false;
            return newState;
        default:
            return state || initialState().spinner;
    }
};

export default spinner;
