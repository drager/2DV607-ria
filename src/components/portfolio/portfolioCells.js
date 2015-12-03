/**
 * Created by dav on 2015-12-03.
 */
import React, {Component} from 'react'
import {Cell} from 'react-mdl'
import {PortfolioCard} from './portfolioCard'

export default class PortfolioCells extends Component {
    render(){
        return (
            <div>
                <Cell style={{align:"stretch"}} col={6}><PortfolioCard/></Cell>
                <Cell style={{align:"stretch"}} col={6}><PortfolioCard/></Cell>

            </div>
        )
    }
}