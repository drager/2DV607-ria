/**
 * Created by dav on 2015-11-16.
 */
import ReactDom from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import React from 'react'
import routes from './routes'
import store from './store'
import 'babel-polyfill'

let injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDom.render(
<Provider store={store}>
    <Router routes={routes}/>
</Provider>,
    document.getElementById('app')
);



