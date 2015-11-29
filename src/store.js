import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import authReducer from './reducers/authenticate';
import submitReducer from './reducers/submitUser';
// Hidden string dependancy on naming of object to the object name located in the initialState.
const rootReducer = combineReducers({
    loginState: authReducer,
    userState: submitReducer
});

// const store = createStore(rootReducer,initialState());
const store = applyMiddleware(thunk)(createStore)(rootReducer, initialState());

export default store;
