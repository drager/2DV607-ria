/**
 * Created by dav on 2015-11-16.
 */
import React, { Component } from 'react';
import { Link }  from 'react-router'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Hello World!</h2>
                <p>Todo: implement a home component</p>
                <p><Link to="/auth">Login</Link></p>
            </div>
        )
    }
}

