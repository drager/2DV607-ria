/**
 * Created by dav on 2015-11-16.
 */
import React from 'react';
import Router, { IndexRoute, Route } from 'react-router';
import Home from './components/home';
import Auth from './components/auth/auth';
import {About} from './components/about';
import {Contact} from './components/contact';
import {PortfolioGrid} from './components/portfolio/portfolioGrid';

export default (
    <Route>
        <Route path="/" component={Home}>
            <Route path="portfolio" component={PortfolioGrid}/>
            <Route path="auth" component={Auth}/>
            <Route path="about" component={About}/>
            <Route path="contact" component={Contact}/>
        </Route>
    </Route>
);
