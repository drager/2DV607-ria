/**
 * Created by dav on 2015-11-18.
 */
import React, { Component } from 'react'
import Authenticate from './authenticate'

export default class Wrap extends Component {
    render (){
        return (

            <div id="wrap">
                <h1>Testing to wrap authenticate component</h1>
                <h4>Your current login status is</h4>
                <Authenticate></Authenticate>
            </div>
        )
    }
}