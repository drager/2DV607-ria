/**
 * Created by dav on 2015-11-16.
 */
import { combineReducers, createStore } from 'redux'
import initialState from './initialState';
import authReducer from './reducers/authenticate'
const reducers = combineReducers({
    authReducer : authReducer
});

const store = createStore(reducers, initialState());

export default store;