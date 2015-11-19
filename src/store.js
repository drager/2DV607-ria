/**
 * Store.js Created by dav on 2015-11-16.
 */
import { combineReducers, createStore, applyMiddleware } from 'redux'
import initialState from './initialState';
import authReducer from './reducers/authenticate';
import submitReducer from './reducers/submitUser'
import thunk  from 'redux-thunk'

// Hidden string dependancy on naming of object to the object name located in the initialState.
const reducers = combineReducers({
    loginState : authReducer,
    userState :submitReducer
});

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

const store = createStoreWithMiddleware(reducers,initialState());

export default store;