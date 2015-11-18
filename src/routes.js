/**
 * Created by dav on 2015-11-16.
 */
import React from 'react'
import ReactRouter, { IndexRoute, Route } from 'react-router'
import Home from './components/home';
import Auth from './components/authenticate'
export default (
    <Route path='/' component={Home}>
        <Route path ='/auth' component={Auth}/>
    </Route>
);