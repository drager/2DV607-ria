/**
 * Created by dav on 2015-11-16.
 */
import { combineReducers, createStore } from 'redux'
import initialState from './initialState';
import authenticationReducer from './reducers/authenticate'

// Hidden string dependancy on naming of object to the object name located in the initialState.
const reducers = combineReducers({
    loginState : authenticationReducer
});

const store = createStore(reducers, initialState());

export default store;