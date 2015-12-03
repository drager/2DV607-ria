/**
 * Created by dav on 2015-12-03.
 */
import React, {Component} from 'react'
import {Card,CardText,CardTitle} from 'react-mdl'

export class PortfolioCard extends Component {
    render(){
        return (
            <div style={{width: '80%', margin: 'auto'}}>
                <Card>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>TODO: implement backend in firebase to load portfolios</CardTitle>
                    <CardText>
                        I will need data from firebase look something like:
                        <ul>
                            Object start
                            <li>
                            imageUrl : url/to/image,
                            </li>
                            <li>
                            text: EX: This project was a portfolio project to publish all my works in.,
                            </li>
                            <li>
                            techniques: [Javascript,React,Redux,Firebase],
                            </li>
                            <li>
                            employer:
                                        name: LNU,
                                        url: lnu.se
                                        contact: david.waller@hismail.com
                            </li>
                            Object end
                        </ul>
                    </CardText>
                </Card>
            </div>
        )
    }
}