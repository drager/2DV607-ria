/**
 * Created by dav on 2015-11-16.
 */
import initialState from './../initialState'
const authentication = (state, action) =>{
    const newState = Object.assign({}, state);
    //Todo: add action type here after component implemented.
    switch(action){
        // Todo: add action type here for clicking login.
        default:
        return state || initialState().authentication;
    }
};

export default authentication()