/**
 * Created by dav on 2015-12-03.
 */
/**
 * Created by dav on 2015-12-03.
 */
/**
 * Created by dav on 2015-12-03.
 */
import React, {Component} from 'react'
import {Grid} from 'react-mdl'
import PortfolioCells from './portfolioCells'

export class PortfolioGrid extends Component {
    render(){
        return (
            <div style={{ margin: '0 auto', display: "flex",  flexDirection: "row", alignItems: "center" }}>
                <Grid>
                    <PortfolioCells/>
                    <PortfolioCells/>
                    <PortfolioCells/>
                </Grid>
            </div>
        )
    }
}