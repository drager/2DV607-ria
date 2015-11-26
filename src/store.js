/**
 * Store.js Created by dav on 2015-11-16.
 */
import { combineReducers, createStore, applyMiddleware } from 'redux'
import initialState from './initialState'
import authReducer from './reducers/authenticate'
import submitReducer from './reducers/submitUser'

// Hidden string dependancy on naming of object to the object name located in the initialState.
const reducers = combineReducers({
    loginState : authReducer,
    userState :submitReducer
});

const store = createStore(reducers,initialState());

export default store;