/**
 * Created by dav on 2015-12-03.
 */
import React, {Component} from 'react'
import {Card,CardTitle,CardText,CardActions,Button} from 'react-mdl'

export class About extends Component {
    render(){
        return (
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{ alignItems: 'flex-start', color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>David Grenmyr</CardTitle>
                <CardText>
                    <ul>
                        <li>
                            Social: I am 33 years old blessed with a lovely wife and 2 children 4 and 7 years old.
                        </li>
                        <li>
                            Interests: Programming both backend and frontend. My favorite environments are .NET with C# and Javascript with Node or React.
                        </li>
                        <li>
                            Hobbies: Gardening, especially growing vegetables, berries and fruits.
                        </li>
                    </ul>
                </CardText>
            </Card>
        )
    }
}