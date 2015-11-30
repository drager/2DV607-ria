/**
 * Created by dav on 2015-11-16.
 */
import ReactDom from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import React from 'react'
import routes from './routes'
import store from './store'
import userActions from './actions/userActions';
import 'babel-polyfill'



ReactDom.render(
<Provider store={store}>
    <Router routes={routes}/>
</Provider>,
    document.getElementById('app')
);

store.dispatch(userActions.listenToAuthState());
