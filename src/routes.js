/**
 * Created by dav on 2015-11-16.
 */
import React from 'react'
import Router, { IndexRoute, Route } from 'react-router'
import Home from './components/home';
import Auth from './components/authenticate'
import Wrap from './components/wrap'
export default (
    <Route path='/' component={Wrap}>
        <IndexRoute component={Home}/>
        <Route path='auth' component={Auth}/>
    </Route>
);