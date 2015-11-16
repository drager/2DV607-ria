/**
 * Created by dav on 2015-11-16.
 */
import { combineReducers, createStore } from 'redux'
import initialState from './initialState';
const todoReducer = {};
const reducers = combineReducers({
    futureReducer: todoReducer
});

const store = createStore(reducers, initialState());

export default store;