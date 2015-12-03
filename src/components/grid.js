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
import Cell4Col from './cell4col'

export class Portfolio extends Component {
    render(){
        return (
            <div style={{ margin: '0 auto', display: "flex",  flexDirection: "row", alignItems: "center" }}>
                <Grid>
                    <Cell4Col/>
                    <Cell4Col/>
                    <Cell4Col/>
                </Grid>
            </div>
        )
    }
}