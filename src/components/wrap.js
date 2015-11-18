/**
 * Created by dav on 2015-11-18.
 */
import React, { Component } from 'react'
import Authenticate from './authenticate'
import { Link }  from 'react-router'

export default class Wrap extends Component {
    render (){
        return (

            <div id="wrap">
                <h1>Testing to wrap authenticate component</h1>
                <p><Link to="/">Home</Link></p>
                <Authenticate></Authenticate>
            </div>
        )
    }
}